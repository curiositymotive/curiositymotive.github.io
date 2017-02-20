---
layout: post
title:  "You Want the Impossible"
subtitle: "Web Development and Windows 10"
date: 2017-02-16 13:12:32
categories: hacking
author: ryan
show_avatar: true
feature_image: /post-assets/impossible/ImpossibleLarge
show_related_posts: false
square_related: /post-assets/impossible/ImpossibleSquare
blurb: "Web Development and Windows 10"
comments: true
headerDark: true
permalink: /you-want-the-impossible/
published: true
---

For as long as I have been doing web development, I have always had a Mac. It seemed like what everyone who did any Ruby programming used. I would only hear horror stories of anyone attempting to port their skills to the Windows operating system of the day. That is exactly where I find myself now. For the first time in over a decade, I own a Windows machine. I needed to find a way to work on the various Ruby, Node, and Elixir projects that encompass my day in a harsh and unknown terrain.

## The Requirements

Besides the aforementioned languages, I also needed a text editor. I have been a big fan of VIM for a couple of years and my workflow relies on it and the [setup that I have cobbled together.](https://github.com/ryanbillingsley/dotfiles) So I needed to be able to edit in VIM and then run the services in a way that is reliable and fast.

There were also some nice-to-haves I wanted as well. I use a 256 color theme for VIM and I have grown quite attached to it, so I wanted [256 xterm color](https://commons.wikimedia.org/wiki/File:Xterm_256color_chart.svg) support. To go along with the theme, I also use [Inconsolas with Powerline](https://github.com/powerline/fonts/tree/master/Inconsolata) for my font. It is basically a patched version of Inconsolas that adds some additional symbols, that when combined with [Airline](https://github.com/vim-airline/vim-airline), make the whole presentation look a little bit nicer.

## The Candidates

I knew there were a lot of avenues I could pursue with none of them being necessarily the "right" one. I limited my selection down to just a few so I could manage my findings. I started with [Bash on Ubuntu on Windows](https://msdn.microsoft.com/en-us/commandline/wsl/about).

### Bash on Ubuntu on Windows

Bash on Ubuntu on Windows was at the top of my list as a possible solution to this problem. Bash was the shell I started with and is the shell that ships with macOS, so if I could just get it to work in Windows without any problems it would as if nothing really changed, how grand! Sadly, Bash for Windows is still in beta, and while you can occasionally get by just fine with pre-release software, this was not the case.

After getting [rbenv](https://github.com/rbenv/rbenv) setup, I was feeling great. I was really hopeful this could work and all my anxiety would be for nothing. Then I was able to get NodeJS installed, I was rolling. Then I ran `npm install` and everything came crashing to a halt. The problem is well documented here but the short of it is that Node tries to enumerate the networking interfaces on the machine, but the machine (or VM in this case) doesn't report any, which causes Node to crash. Thankfully there is a [fix in the pipeline](https://github.com/Microsoft/BashOnWindows/issues/468), so hopefully soon it won't be a problem, but there was no hard date on when the [Creators Update](https://www.microsoft.com/en-us/windows/upcoming-features) will actually ship, so I needed to look elsewhere.

There was also another problem with Bash on Ubuntu on Windows, but it was more superficial, and that is the lack of 256 color support. I really like the [theme I use](https://github.com/morhetz/gruvbox) and was hoping I wouldn't have to give it up. I also don't like the really high contrast you have to deal with when you only have 16 colors to work with. It is unclear at this point if 256 color support will ever make its way to Bash on Windows.

### Virtual Machine

I have for years maintained a Windows Virtual Machine (VM) on my Mac, so why not just do the same thing on my Windows machine. The truth is there is no reason why this solution would not work. I could run a VM with Ubuntu or some other Debian based operating system and use that as my development environment (Debian being what I know). However, I wasn't just trying to find a solution for myself, but also find a solution that would work for my other team members as well. I really wanted some way to pass along the environment configuration with the code in the repository, so at any given time, someone could check out the repo, build the environment, and be productive.

### Docker

Then I remembered Docker. When Docker was first blowing up, I messed with it quite a bit. The idea of being able to simply create a development environment from a text file was really intriguing. I have explored using [Puppet](https://puppet.com/), [Chef](https://www.chef.io/), or even [Vagrant](https://www.vagrantup.com/) to build out a development environment, but it always lacked a certain kind of elegance and simplicity to it. At the time, Docker felt very much the same way. It was interesting, but still took a lot of fiddling to get everything just so.

A lot has happened with Docker since that time, and now it feels easier than ever to get started with it. There are installers for both [Windows](https://docs.docker.com/docker-for-windows/) and [Mac](https://docs.docker.com/docker-for-mac/), which make it easy to get the daemon up and running and start playing around with containers. They also package in [docker-compose](https://docs.docker.com/compose/overview/), which allows you to build out multi-container projects through a simple YAML file. For instance, if you have a Ruby app that also uses PostgreSQL as a database, you can define that in the YAML file and `docker-compose` will spin up the separate containers and link them together, making it trivial.

My proof-of-concept project was a [Jekyll](https://jekyllrb.com/) static site that needed Ruby and Node with their respective package managers, Bundler and NPM. I was able to get a container up and running that had all the dependencies the project needed, and would build it with one simple command. It was exactly what I wanted.

To make things even better though, it worked on my Mac as well. I wouldn't have to tell someone how to install Ruby, install Node, and get all the various dependencies working, they could just build the containers and then tell Docker to start them.

A caveat I ran into with Docker was the version of Windows that Docker for Windows relied on. It uses Microsoft's HyperV technology to manage the virtual machines that are created. HyperV, unfortunately, is only available with the Pro version of Windows 10. My machine did not have that so I had to shell out $99 in order to upgrade my license so that Docker would work. Docker does have a [version that is built on Virtual Box](https://docs.docker.com/toolbox/overview/), the free virtualization software from Oracle, but it is clearly marked as the ‘Legacy' solution.

## This Ship Won't Steer Itself

I had a solution for running the services, but now I needed to figure out how I was going to write them with VIM. I looked at running VIM in [CMDer](http://cmder.net/), running VIM in Ubuntu, running VIM in a Docker container, but ultimately I settled on the most straightforward answer, which was to use [gVIM](http://www.vim.org/download.php). gVIM, which stands for GUI VIM, is the standalone VIM client put out by VIM itself. They have builds for Windows and Unix, as well as providing the source code if you want to build it for yourself. gVIM immediately felt familiar from my time working with MacVIM which is a kind of sister project to gVIM.

Once I had it installed, and grabbed my `.vimrc` file, I was up and running. NeoBundle grabbed all of the plugins I needed, my theme worked perfectly, and I was able to set the font to my Powerline font which meant Airline worked exactly as I had it on Mac as well.

I did give some of the other solutions a try, but they all had some hurdle that I either couldn't overcome or didn't want to invest any more time in trying to solve. Bash on Ubuntu on Windows does not support 256 colors, as I mentioned previously, and because I couldn't use it to run services either, it dropped out of contention. 

I had issues with getting some plugins to work with VIM for CMDer, but the biggest problem I had was trying to get Powerline fonts working. I read through as much as I could, trying this and that, but ultimately could never get it to work correctly.

## Good to Go

So that is my current working setup: Docker containers for running applications, gVIM for my editor, and CMDer as my terminal. I was able to pull down a Jekyll project, do some editing, and build the site and preview it all without a hitch. There may be problems I run into in the future (I have yet to set up an Elixir project), but so far this is working out better than any previous attempt I have had with web development on Windows.

While it isn't as easy as opening up a terminal and just getting started customizing it, I don't feel like I am being held back in any way. Being productive in the Windows environment was maybe one of my single biggest fears about buying a Windows PC, but I can finally put that one to rest, at least for the time being.

If you have any questions about my setup or have a different workflow that you really like, let me know about it in the comments. I certainly don't think this is the only or best way to work in Windows, and would love to hear what other developers are using.
