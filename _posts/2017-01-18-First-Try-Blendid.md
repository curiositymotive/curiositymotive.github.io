---
layout: post
title:  "First Try: Blendid"
subtitle: "A unique approach to Gulp front-end workflows"
date: 2017-01-30 10:00:00
categories: r&d
author: nate
show_avatar: true
feature_image: /post-assets/first-try-blendid/blender_large
show_related_posts: false
square_related: /post-assets/first-try-blendid/blender_small
blurb: "Trying out a unique approach to Gulp front-end workflows"
comments: true
headerDark: true
permalink: /first-try-blendid/
published: true
---

_A unique approach to Gulp front-end workflows_

In my work, my teammates and I frequently switch between many projects, needing to quickly  set up front-end workflows that incorporate current best practices. Being able to reuse workflow code across all our projects, new and old, has proved tough. The web and the tools that support it are always evolving, so workflows must constantly change and evolve too. [Gulp](http://gulpjs.com/) has done a great job of helping us to get workflows up and running fast, but Gulp, itself, does not try to solve the issue of reusablility. Until recently, I had not found an elegant solution for transferring what we&rsquo;d learned in the latest project to the next (or even back to the previous projects). **That is until I found [_Blendid_](https://github.com/vigetlabs/gulp-starter/tree/blendid).**

_Editor&rsquo;s Note: Viget has not announced Blendid beyond mentioning it on [Gulp Starter&rsquo;s Github repository](https://github.com/vigetlabs/gulp-starter). At the time of this writing, it is still early in its life and under active development. I am just sharing my experience kicking the tires and my excitement at where it is headed._

## I Do Not Want To Copy/Paste Another Gulpfile
Setting up a new workflow starts with copying the Gulpfile and any other required files out of the latest project. That is usually because no one has taken the time to copy any workflow updates into a starter project repository. I have tried a lot of different ways to make getting a project started easier, making sure to include the latest best practices I had learned.

I have tried breaking Gulpfiles into their own git repository (hard to find motivation to copy new knowledge back to the &ldquo;starter&rdquo; repository), sharing code with git submodules (clunky) and creating [Yeoman generators](http://yeoman.io/) (great for the first run, but no real update mechanism) all in an effort to easily share that gained knowledge to no avail. Even if you could share some of the code, there was an issue keeping the code and Gulp&rsquo;s package dependencies up to date across projects, especially those projects whose dependencies might get stale because they were not touched for a while. **No solution felt elegant.**

<img title="Blendid logo" src="/img/post-assets/first-try-blendid/blendid-logo.png" alt="Blendid logo">

## New Things Are Happening

In my search for a better solution, I had come across digital agency [Viget&rsquo;s](https://viget.com) popular [Gulp Starter](https://github.com/vigetlabs/gulp-starter) project. I am a long-time fan of Viget and their approach to web development, so I would check in from time to time with the Gulp Starter project to see what I might crib for my own projects. I noticed a message at the top of the README: &ldquo;New things are happening! Check out the blendid branch for a preview! 🎁&rdquo; It appeared Viget had been quietly working on a new version of the Gulp Starter project, which they renamed [_Blendid_](https://github.com/vigetlabs/gulp-starter/tree/blendid). I pulled down the `blendid` branch and gave it a spin. **Viget might have finally found an elegant solution to the problem.**

Blendid is a set of Gulp tasks and build tools that provide a modern front-end workflow, which can also be used as a static site builder. It continues the Gulp Starter project&rsquo;s focus on creating a front-end pipeline that automates best practices, but takes it a step further by packaging the Gulp tasks as a configurable [Yarn](https://yarnpkg.com) package (If you haven&rsquo;t used it, Yarn was trivial to get up and running, but that&rsquo;s another article). **The seemingly simple act of treating a Gulp workflow as a code package addresses so many of the issues that have plagued my Gulp workflows.**

<img class="post-img-full" title="Words simple and obvious spraypainted on wall" src="/img/post-assets/first-try-blendid/simple-obvious.jpg" alt="Words simple and obvious spraypainted on wall">

## Most Elegant Solutions Seem Simple and Obvious

**The core of Blendid&rsquo;s simple, yet elegant, approach is packaging a Gulp workflow as a Yarn package, a genius idea so simple and obvious you feel like you should have thought of it.** If you have created or used an NPM or Yarn package, you can understand the power of developing with them. Packaging a Gulp workflow gives you all the advantages of working with packaged code: easier code reuse, easier sharing, easier bug tracking, centralized documentation, and versioning. If you focus your workflow development efforts on a single, packaged set of tasks, you now have the ability to quickly share and spread learnings as fast as you can update the package and all the instances that depend on it.

## Running a Gulpfile from a Yarn package

Blendid takes advantage of the Yarn package.json&rsquo;s `bin` field (also available in NPM), which holds paths to executable files in the package. The user runs `yarn run blendid`, which triggers the executable, “blendid,” kicking off the short Node script below. This script passes along arguments and spins up a new Gulp workflow using the package&rsquo;s Gulpfile and instance of Gulp. The Gulpfile included in the package then looks for configuration files located in your project and uses those to set paths globally and per task. **The code looks relatively simple, but sets up a potentially powerful approach to managing Gulp tasks.**

{%gist 00203f537a9570ca9a63b67245220041%}

## Would I use Blendid?

Despite all my excitement over Blendid, there is one thing that holds me back from adopting it for all my projects; [Google PageSpeed](https://developers.google.com/speed/pagespeed/) (not exactly that, but you will see). I recently spent a fair amount (read ridiculous amount) of time trying to get a perfect Google Pagespeed score on a website for two reasons: to ensure the site&rsquo;s mobile experience was snappy and, also, as a challenge to see if I could do it. I got incredibily close by creating complicated workflows to fix issues like [eliminating render-blocking JavaScript and CSS in above-the-fold content](https://developers.google.com/speed/docs/insights/BlockingJS). I believe trying to achieve a high PageSpeed score is a noble pursuit, but it complicates the workflow, which, in turn, increases the learning curve when bringing new developers into the project. There is a balance between ease of use and payoff that I believe must be struck on each project.

**Currently, Blendid does not handle the complicated workflows required to achieve a perfect PageSpeed score nor should it.** Blendid has a tasteful set of core tasks that many projects need, which can result in a well-performing site when used properly. What holds me back from using it, is that there is not currently a way to easily [extend Blendid&rsquo;s workflow](https://github.com/vigetlabs/gulp-starter/tree/blendid#can-i-customize-and-add-gulp-tasks) to handle your project&rsquo;s unique requirements.

There may be solutions for easily extending Blendid in the future, and I will definitely continue to keep an eye out for them (or even try to figure them out myself). **If Blendid&rsquo;s tasks match what you need, I highly suggest using it.** Even if they do not, forking Blendid and tweaking it to fit your needs or simply following their approach to packaging your Gulp workflow is a great way to start building out and maintaining your own.

<img class="post-img-full" title="Blender pouring magaritas" src="/img/post-assets/first-try-blendid/margarita-time.jpg" alt="Blender pouring magaritas">
