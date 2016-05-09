---
layout: post
title:  "Problem Solvers - Using hash and all with promises in Ember"
date: 2016-02-17 00:10:00
categories: problem_solvers
author: ryan
show_avatar: true
feature_image: /post-assets/emberjs-logo
show_related_posts: false
square_related: /post-assets/emberjs-solid
blurb: "There is a lot to learn when it comes to Ember and it can feel daunting. There are some tools in Ember that can make working with promises a little easier."
logo: /images/post/emberjs-logo.png
img:
  small: /images/post/emberjs-solid.png
headerDark: true
published: true
---

Starting to learn something new can be difficult all on it's own.  There is a lot to learn when it comes to Ember and it can feel daunting.  If you have [never used promises](http://www.html5rocks.com/en/tutorials/es6/promises/), then this mountain just got a whole lot higher to climb.  There are some tools in Ember that can make working with promises a little easier.

## Hash

When I first started out using Promises in Ember, a common problem I would run into was needing two promises to resolve before I could take a next step.  Often I would solve this problem by doing something like this:

{% gist 0f36f55d85e53ce0db28 %}

That is anything but elegant.  That is where [hash](http://emberjs.com/api/classes/RSVP.html#method_hash) comes to the rescue.  You can provide `hash` with, you guessed it, a hash of promises that will all be resolved before it continues.  That means we can rewrite our example like this:

{% gist a0eca6bcedd970b1a993 %}

We are able to get rid of the mutable variables and make it clearer what we are trying to do.  Even though this is a trivial example, it shows the flexibility `hash` can provide.

## All

Another common scenario I would run into is applying some change to an array of objects, all of which need to resolve.  Trying to do this without using [all](http://emberjs.com/api/classes/RSVP.html#method_all) is a nightmare.  I am not sure what that would even look like.  So instead, let us look at an example of what using `all` is like:

{% gist e61e356af89d5f9b27a7 %}

Combining `map` and `all` makes it easy to create an array of promises that we can resolve and then continue doing work with the results.  It is important to note that `all` implements a 'fail-fast' method for handling promises that are rejected.  This means that as soon as a promise is rejected, processing of the array will halt and the error will be passed down the chain.  If you wanted to be able to report an all of the promises that were rejected, you can use [allSettled](http://emberjs.com/api/classes/RSVP.html#method_allSettled) instead.

`hash` and `all` are great tools to have around when dealing with promises in Ember.  However, they are not the only options available to you.  Make sure you take a look at the documentation for [Ember.RSVP](http://emberjs.com/api/classes/RSVP.html) and checkout some of the awesome tools that you can leverage with promises.
