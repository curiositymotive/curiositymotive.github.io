---
layout: post
title:  "Announcing Stranger Things Tiger Edition"
subtitle: "New Game, New Engine, Classic Styling"
date: 2017-02-27 11:28:05
categories: games
author: alex
show_avatar: true
feature_image: post-assets/announcing-stranger-things-tiger-edition/sttx_large
show_related_posts: false
square_related: post-assets/announcing-stranger-things-tiger-edition/sttx_small
blurb: "We made a game based on the Netflix show Stranger Things that looks just like an old Tiger Electronics game."
comments: true
headerDark: true
permalink: /announcing-stranger-things-tiger-edition/
published: true
---

A few weeks ago my colleage [Nate](http://www.curiositymotive.com/author/nate/) posted an amazing [game design image](http://mikedonovandesign.com/stranger-things-handheld-game/) from UX Designer [Mike Donovan](http://mikedonovandesign.com) that showed an incredibly realistic looking Tiger Electronics game based on Stranger Things. It was in our #spoilers_strangerthngs Slack channel (I’m not obsessed, you’re obsessed) and I nearly lost myself in it thinking through the possibilities of how to make it work. Could we build a real Tiger-style LCD handheld game? That would probably be ridiculously complicated (but still totally going to try it one of these days), but we could certainly build an [HTML5 version](https://curiositymotive.itch.io/stranger-things-tiger-edition)!


<iframe frameborder="0" src="https://itch.io/embed/121912?linkback=true&amp;link_color=da1c5c" width="552" height="167"></iframe>
<br />


I got in touch with Mike that day and asked for his blessing to go ahead and turn his design into something playable. He was happy for me to do it and was really great to work with.

## What to build it with?

Now I needed to figure out what game engine I wanted to use. I’d been using [Unity](https://unity3d.com/) quite a bit as of late, but I had a few colleagues who were really enjoying developing with [GameMaker Studio](http://www.yoyogames.com/gamemaker), so I decided to try it out. I really like learning new tools, especially when they can do something better than what I was using, and GameMaker runs circles around Unity when it comes to 2D support, which is exactly what I needed in this case.

## Not as easy as it looks
In my head most of the gameplay I was looking to create was very simple. The player controls Eleven as she tries to rescue all the boys (Mike, Will, Lucas, and Dustin) from the normal world as well as the Upside Down. There are waffles for Eleven to eat, keys to access rooms, and even a government agent and the Demogorgon to avoid. The design is based on a grid and all kinds of game tools love grids. Then it hit me that a big part of this game was that the walls were boundaries between cells, not whole cells themselves, which immediately complicated things. Most grid-based algorithms assume that walls take up a full space in the grid. After wrapping my head around how to deal with that (creating cell objects that knew which boundaries they had) I needed an easy way to create those objects automatically, since there would be over 130 cells.

<img class="" title="Stranger Things Tiger Edition" src="/img/post-assets/announcing-stranger-things-tiger-edition/sttx.gif" alt="">

## Creating a level format

GameMaker Studio is quite capable of pulling in JSON files full of data and processing it, which ended up being the perfect way to lay out the levels in a text file that could then generate the level I wanted in the game. Though the level I created looks just like the one that Mike designed, it’s all programmed in such a way that it can be easily changed or possibly randomly generated in a future version.


## Soundscapes and retro-realness

It just so happens that when I was starting development I was also waist deep in learning some basics of electronic music design and production focusing on synthesis. I decided to recreate a couple of iconic tracks from the Stranger Things soundtrack with the goal to make it sound like it’s coming from an old Tiger game, tinny and mostly out of tune. You can listen to the two tracks here.

<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/309231528&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>

<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/309232376&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
<br />
To keep the game feeling realistically retro, on top of just the appropriate soundtrack, I was sure to make the game’s on-screen buttons function just like they would have on an original handheld, complete with mode-select and high score clearing functionality.

## Back in the right-side up

For me, this experience was all about designing within limitations, trying to mimic the feel of a certain game platform, and learning a new tool for game creation while coming out at the end with something that just feels right, from the art, to the music, to the gameplay. This was a fun project to work on, and starting out with such Mike’s beautiful design was fantastic inspiration to make something great. I really hope you enjoy playing and please let me know what you think! Also, don't forget to check out Mike who you can find on <a href="https://twitter.com/mikelikebike">Twitter</a> & <a href="https://dribbble.com/mikedonovan">Dribbble</a>.
