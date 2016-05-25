---
layout: post
title:  "Creating Fine Art With The Unity Game Engine"
subtitle: ""
date: 2016-05-25 12:30:00
categories: problem_solvers
author: alex
show_avatar: true
feature_image: /post-assets/fine-art-with-unity/simulationgrid
show_related_posts: false
square_related: /post-assets/fine-art-with-unity/simulationgrid_tiny
blurb: "When we’re faced with a new problem we have to get creative. That’s right where I like to be and I have been wanting to document a bit of the process that I go through while solving one of those problems."
comments: true
headerDark: true
permalink: /fine-art-with-unity/
published: true
---

When we’re faced with a new problem we have to get creative. That’s right where I like to be and I have been wanting to document a bit of the process that I go through while solving one of those problems.

## The Challenge

Recently, a local artist, [Constance Scopelitis](http://www.constanceart.com/) contacted me to help her evolve one of her fine arts pieces into an interactive experience.

After evaluating this particular art project, I wasn't quite sure where to start. She had drawn some shrouded figures in graphite that were beautifully realistic. Her goal  was to somehow make their cloth coverings move when a viewer touched a screen to reveal hidden imagery behind the figure.

I understood the request enough to know that it was within the realm of possibility. It would be a challenge, it would be something new, and there wouldn't be an instructional article to pull from on how to make this happen. I love that kind of problem. As an interactive developer, I was so intrigued I had to say “yes,” even before I knew exactly how I was going to pull it off. These types of projects can lead to frustration, but they can also lead to exciting breakthroughs.

## My Own Toolset

<img class="post-img-right" title="In Development" src="/img/post-assets/fine-art-with-unity/indev.jpg" alt="">

Taking a step back from the request and looking at all the different parts, I started researching what was available and how it could be incorporated into the project.

* I would need a large touchscreen for users to interact with.

Looking into the best touchscreen solutions for this kind of project I realized that  I'd likely need a PC or Linux box, as Macs don't have a lot of touchscreen options, especially at larger sizes. Windows is also integrating touch pretty deeply into their current operating systems in a way I hadn’t seen out of the box in a Linux distribution.

* It would need to all fit into a frame to be hung on a wall at a gallery.

Ok, so it needs to be fairly portable. I started researching things like [Compute Sticks](http://www.intel.com/content/www/us/en/compute-stick/intel-compute-stick.html) and media center PCs, and had an idea of what I'd need. I love using [Raspberry Pis](https://www.raspberrypi.org/) as well but wasn't sure one would be powerful enough to handle this particular application.

* The art would need to move like cloth.

There are a few ways I could handle that. I could build it using WebGL or maybe two-dimensionally with the HTML5 Canvas. I could also build it in Unity which I had been using a lot at this point. Unity’s editor also handles moving around visually in real, 3D space incredibly well which makes development much easier.

Looking at all of the above parts and decisions led me to my final answer; I would move forward building out the experience in Unity. Unity plays well with touch and could easily run on Windows, starting the application on power up, satisfying all the requirements for a gallery piece that needed to "just work."


## Finding Outside Help

I knew one of the toughest pieces of the final work would be getting the image to move like real cloth. I had originally hoped that Unity had the right tools built-in for the cloth physics, but the current version (5.3 at time of writing) didn't have anything that I could use. I did quite a bit of research before I finally found exactly what I needed. [The answer was a plugin](https://www.assetstore.unity3d.com/en/#!/content/40758) used to make flags, boat sails, and clothing move realistically. After watching all of the promotional videos I knew it worked on the large moving game objects, but wasn't sure if it would work with the very fine-tuned control I needed. 

<img class="post-img-right" title="Revealing Beauty" src="/img/post-assets/fine-art-with-unity/simulationgrid_small.jpg" alt="">

I ended up getting in touch with the plugin developer, [José María Méndez](http://www.josemariamendez.com/)  and I'm so glad I did. We went back and forth over the course of the next few weeks via email. I'd ask strange questions about the underpinnings of his cloth simulation and he'd point me in the right direction to make this plugin do exactly what I needed it to. It was a full physics simulation which meant that as long as I set it up correctly and physically tied it to the viewer’s input, it would work on any visual scale that I needed it to, even if that meant it was just a close up of one big piece of cloth lying on a table rather than a large array of ship’s sails billowing in the wind.

## When Things Go Sideways

The only thing that is certain when creating something new is that things will go wrong. It is important to stay flexible with tools and solutions, while trying to figure out exactly what the failure points might be and what you'll do when they do fail. 

For this project I ran into a pretty big failure point. The project inexplicably wouldn't work on the machine I wanted to use in the gallery piece. I was getting some strange errors I'd never seen before and after discussing them with José we discovered the Compute Stick I was using didn't handle memory the way that most computers do. The simple fix was to put  a different machine in the gallery, a "normal" PC. 

That did the trick with one big exception I was getting one frame of animation per second, which wasn't going to work. Luckily, the third time was the charm. It ended up taking a mini-gaming PC to handle what I needed, which was just a decent CPU and a dedicated GPU to handle both the cloth simulation and the 3D rendering of the project itself.

<img class="post-img-full" title="In the Gallery" src="/img/post-assets/fine-art-with-unity/gallery.jpg" alt="">

## Wrapping It Up

All in all the pieces came together and my client was incredibly happy with what I built for her. The feeling of booting it up once I was finished, interacting with it the way a viewer would, and seeing past the trials it took me to get here was intense. I was looking at a piece of interactive fine art and I couldn’t have been more proud of what I had worked so hard to create. Seeing it hanging in a gallery show alongside other amazing works of art, and seeing others look at it and play with it was an experience I could scarcely believe. The process I used worked, and, thanks to the help of some old tools, some new ones, and some quick problem solving when it really mattered, what I knew was possible ended up being awesome.

<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-version="7" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:50.0% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/BFG720ql2t_/" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">So excited to see this awesome piece that I helped bring to life by the fantastic @constanceart in the @lsgindy #xroadsindy show!</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">A video posted by Alex Porter (@streetalchemist) on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2016-05-07T13:51:42+00:00">May 7, 2016 at 6:51am PDT</time></p></div></blockquote>
<script async defer src="//platform.instagram.com/en_US/embeds.js"></script>