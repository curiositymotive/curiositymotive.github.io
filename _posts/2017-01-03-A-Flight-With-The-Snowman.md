---
layout: post
title:  "A Flight With the Snowman"
subtitle: "A Holiday Tribute to an Animation Classic"
date: 2017-01-03 14:00:05
categories: webvr
author: alex
show_avatar: true
feature_image: /post-assets/a-flight-with-the-snowman/snowman_large
show_related_posts: false
square_related: /post-assets/a-flight-with-the-snowman/snowman_small
blurb: "Feeling the holiday spirit while creating this tribute for the classic animation The Snowman, with WebVR and the A-Frame 3D framework"
comments: true
headerDark: true
permalink: /a-flight-with-the-snowman/
published: true
---

From when the [book](https://www.thesnowman.com/books/) was released in 1978, to the [animated short](https://www.thesnowman.com/film-and-music/the-snowman/) in 1982 and beyond, *The Snowman* has warmed the hearts of children and adults alike. The story transports the viewer into a hazy, snowy world that feels alive with magic. We wanted to capture some of that magic and give the viewer a different perspective into that place by creating a portion of the snowman’s flight with [WebVR](https://webvr.info/), a technology that allows users to experience virtual reality through their desktop or mobile browser without the need to download an application.

## WebVR

Technically speaking, WebVR is a set of JavaScript API’s that gives a developer access to virtual reality device info from various headsets in the browser. In a more broad sense, though, WebVR means having virtual reality experiences that live on the web, at a simple URL. This also avoids a need to download an app that might be hundreds of megabytes in size. This also means that there’s no requirement for the experience to pass some set of app store rules and regulations. What this all means for [our](https://www.curiositymotive.com/pages/snowman/humans.txt) purposes, is that you can go to [our team's WebVR tribute to *The Snowman*](http://curiositymotive.com/pages/snowman) and quickly see what we created. If you’re on a mobile device and have a [Cardboard VR](https://store.google.com/product/google_cardboard) headset or similar device you can jump into that experience with one click to start, and one click to enable VR.

<img class="post-img-full" title="Snowy Village" src="/img/post-assets/a-flight-with-the-snowman/snowman_editor.jpg" alt="">

## A-Frame

To help us create this experience we wanted to use a framework that would allow us to focus on the content rather than just the technical setup of our 3D world. After doing some research and conducting a few experiments [possible links] in both pure WebGL as well as ThreeJS, we found the [A-Frame](https://aframe.io/) framework which would serve our purposes well. It allowed for easy asset loading which is essential when dealing with a large quantity of 3D assets. It also had a fairly simple, declarative syntax (defined via markup rather than generated with code) that we liked and even included a built in editor (something most other 3D web frameworks are sorely lacking) that became invaluable to us after a time. The editor is particularly useful for fine-grain positioning of elements, as well as editing scene lighting on the fly.

<img class="post-img-right" title="Snowy Village" src="/img/post-assets/a-flight-with-the-snowman/snowman_village_view.jpg" alt="">

## Shaders and the Snow

One other area we knew we wanted to get right, was the snowy, quiet ambiance that is the hallmark of *The Snowman*. To do this we did some research on creating highly performant snow effects that could really surround the user with snow without slowing the whole experience down in any significant way. We found the answer in creating simple vertex and fragment shaders (based on this great [tutorial](https://soledadpenades.com/articles/three-js-tutorials/rendering-snow-with-shaders/)) that would run in WebGL and render a whole lot of moving snow. Then, we created a small A-Frame component so we could apply the shader to the scene.

## Completing the Scene

Once we had our environment, including a mountain scene complete with village, falling snow, and even a model of the Indianapolis Soldiers’ and Sailors’ Monument (as a tribute to where our office is located), we needed to add a few things to finish it off. First up was to create the sense of flight by animating the camera (user’s viewpoint). Since we wanted the flight to be pre-programmed we used the [GreenSock](https://greensock.com/) tweening engine with it’s bezier curve functionality to set waypoints along the flight path and have it do the rest of the work to set the camera’s position. Once the user was flying, it only made sense to add the Snowman himself flying next to you, so we added him in as well. Last, but certainly not least, we needed sound. A symphonic metal version of [Walking In The Air](https://www.amazon.com/Walking-Air-Greatest-Ballads-Nightwish/dp/B007TJZBV8/ref=sr_1_1?ie=UTF8&qid=1481664260&sr=8-1&keywords=walking+in+the+air+nightwish) (the song from the original animation) by the Finnish band [Nightwish](http://nightwish.com/en) had helped to inspire this project in the first place so we couldn’t leave it out. Finally, our experience was complete.

<img class="post-img-left" title="Snowy Village" src="/img/post-assets/a-flight-with-the-snowman/snowman_snowman.jpg" alt="">

## Telling Stories in a New Medium

Virtual reality is a brand new medium on its own. Adding the ability for the viewer to interact with the scene, even if just by turning their head to focus on something specific, changes what stories you might want to tell. For our purposes we wanted to give a more immersive look at a specific scene with a certain feel and, for that, the medium of VR makes a lot of sense. Using A-Frame and WebVR allowed us to get rid of almost any barrier between the experience and any potential viewers. With all of the pieces put together, we were able to create a happy little slice of the winter and holiday feelings. [Come take a memorable flight with *The Snowman*](https://www.curiositymotive.com/pages/snowman/).
