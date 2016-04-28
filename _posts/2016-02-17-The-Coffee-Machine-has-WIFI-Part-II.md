---
layout: post
title:  "The Coffee Machine has WIFI Part II"
date: 2016-02-08
categories: hacking coffee r&d
author_name : Kyle
author_url : /author/kyle
author_avatar: 8fb3464e807f98059679ed094b28f132
show_avatar : true
feature_image: /post-assets/coffee2-large
show_related_posts: false
square_related: /post-assets/coffee2-small
blurb: "Digging deeper into the inside of the machine, the first thing I did was research any model numbers found inside the unit."
headerDark: true
published: true
---

[<< Read Part I](/The-Coffee-Machine-has-WIFI/)

After taking some time off from this experiment, some co-workers brought it back up and pushed me to keep trying. My prior attempt at finding a user manual failed so this time I took detailed pictures of the inside components and tried to find further information on how it works. Also with this further investigation I noticed a compact flash card inserted at the bottom of the main circuit board.

The first thing I did was research any model numbers found inside the unit. One of the identifiers on the main board led me to a user manual that also had information on the application that runs everything. Inside this manual was the default password for logging into the admin panel, could it be that easy… yes, yes it was. After digging around in the settings I found where to connect the machine to our WIFI, which means all my effort looking on the network last time was for nothing.

After further noodling with the admin side of the software, I turned to the compact flash card. The card was unreadable on OSX and Windows but after connecting it to a Linux virtual machine I was able to copy over all the contents. In an effort to keep myself from being the most hated person in the office by breaking the coffee machine, I ordered an identical compact flash card to experiment on.

In a perfect world, I would have been able to create an image of the CF card that could both be used for imaging the new card and also loading in a VM to test modifications on. Unfortunately, I was never able to get the machine to boot from this card. I believe there is something I missed in order to make it a bootable card. A co-worker mentioned some software that would clone the card but I never made it that far.

During a casual conversation about this I mention my fear of breaking the machine because of how much usage I saw in the log files. This sparked the interest of Ryan who took the logs files and created an API that could query the data. The idea is to create some sort of data visualization about coffee drinkers in the office. There is also the idea floating around to combine the coffee machine data with data from the bathroom door sensor that Alex installed. Please feel free to send us title suggestions for this combined data viz.
