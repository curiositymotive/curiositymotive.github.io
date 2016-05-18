---
layout: post
title:  "Finding Joy In All the Weird Places"
date: 2016-05-18 10:00:00
categories: problem_solvers
author: ryan
show_avatar: true
feature_image: /post-assets/22982065445_c80a17f6e4_k
show_related_posts: false
square_related: /post-assets/22982065445_c80a17f6e4_sm
headerDark: true
permalink: /finding-joy-in-all-the-weird-places/
published: true
---

It should have been a very straightforward server app. It needed to respond to messages coming across a socket connection, occasionally make outbound web requests, and have some basic inputs to control the whole thing. It wasn't unlike something I might have made at my enterprise gig a few years ago or for a client at my present job.  So I reached for my server technology _du jour_ and started working on the app, but something was bothering me. **It felt like I was fighting my tool and that is always a warning sign that something is not what it seems.** There is one important detail I left out; the app was powering an audience-driven streaming event. That sounds ridiculous, let's try that again. It was powering a game.

## So I reached for my server technology _du jour_ and started working on the app, but something was bothering me.

<img class="post-img-full" title="Particle.io Photo" src="/img/post-assets/UnityUI.png" alt="">

As I set out developing this server app to manage all of these interactions, maintain a game clock, update scores, and try to keep this all in step with the streaming video we were sending out, I had a thought; what if this wasn't the right way to do this? I decided to do something that, looking back, was a little bit radical; I started over in Unity.

## Modular by Design

If you don't know what Unity is, it has become one of the most popular video game development tools. **The way Unity handles scripting is pretty wonderful.** Everything is broken out into components. These components can then be attached to whatever you want. Create a "run" component and attach it to your player, but also an enemy. Everything can be modular allowing you to quickly build up new objects from an existing pool of components.

Each component has hooks into the run loop making it easy to setup the component when it is woken up, update it on each tick, and clean up when it is shutdown. It is almost addicting to work this way. **Unity allows you to focus on breaking everything down into these single, manageable, ideas that you equip your game objects with.**

You can also easily pass references from these components to other components in the system either through script or by surfacing properties to the UI in Unity. For instance, if you have a player who needs to know about the weapon he is holding, just drag the weapon object onto the appropriate slot on the player and now you have a reference, just like that. I wish Unity would have existed when I was first learning to develop just so I could see these concepts played out in such a visual way.

## I wish Unity would have existed when I was first learning to develop just so I could see these concepts played out in such a visual way.

With Unity, I was able to focus on making a game that just happened to have a real-time socket component to it. The game was the real heart of the project, even if it didn't present itself as that upon first glance. If you looked at the technical requirements, building a server app would be the obvious choice, and you could certainly do all of this in your favorite server technology, but the soul of the app was a game. **Switching my focus made development flow so much more smoothly because it felt in concert with what I was trying to achieve.**

## A Sense of Exploration

Sometimes it is easy to get caught up in what a project technically needs to be finished versus looking at what the project is trying to accomplish. You have to take a step back, look at what you are creating, but also where your interests and thought process is, and make sure you pick the path that will give you the most joy. That joy is what sustains us when we get into the late stages of a project, tracking down bugs and fixing edge cases.

It also helps to explore other tools and ideas every once in a while so you have options. There is a lot of merit to becoming a master of something, but technology moves fast and there are many interesting new ideas emerging every day. It is worthwhile to take a second to look around and be exposed to something different. **I was able to use an enterprise C# background to be productive in a game development environment; something I could have never predicted.**
