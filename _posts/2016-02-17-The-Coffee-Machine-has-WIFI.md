---
layout: post
title:  "The Coffee Machine has WIFI?"
date: 2016-02-17 00:00:05
categories: hacking coffee r&d
author_name: Kyle
author_fullname: Kyle Werner
author_url: /author/kyle
author_avatar: 8fb3464e807f98059679ed094b28f132
show_avatar: true
feature_image: /post-assets/coffee-large
show_related_posts: false
square_related: /post-assets/coffee-small
blurb: "How sweet would it be to initiate a cup of coffee from my desk then have it ready after walking across the office and up the stairs."
headerDark: true
published: true
---

One day a new shiny office coffee machine showed up. Unlike the previous one, this machine had a large touchscreen instead of buttons. Of course, the first time I try to use it it locks up and says “trash full.” After tracking down the office manager, I watched her open the front, press a small button on the inside, enable the settings screen and that is when I saw a small WIFI icon in the bottom corner. This was the first time I thought about messing with it, but I didn’t have the time or any specific reason.

Fast forward a few months and I run into [this wonderful article about automation](https://www.jitbit.com/alexblog/249-now-thats-what-i-call-a-hacker/) and I now have a reason. How sweet would it be to initiate a cup of coffee from my desk then have it ready after walking across the office and up the stairs. However, our machine does not provide the cup. That means I either have to tackle anyone who tries to get in my way to chat or I have it wait after brewing and program a button to dispense. But that’s a problem that can be worried about once the experiment is successful.

After discussing this with a coworker, I decided to try and find the machine on our local network. Keep in mind I’m not a network guy and have never done anything like this before, but they make it look like so much fun on TV. He pointed me to a tool called NMAP and I started learning how to use it. In the meantime, he simply walked upstairs, opened the machine’s settings, and tried to find the IP address that way. Unfortunately, that section of the menu was password protected.

I decided to keep working on the network side and ran a scan of every IP in the network. A small part of me was afraid of receiving a call from the IT department, but I guess that didn’t trigger any warnings. The results were a very large list of ip addresses and open ports. I was able to filter out most results by eliminating any machine with anti-virus software. Anything with http/https was checked out in a browser and anything with ssh was inspected through the terminal. While I was unsuccessful in actually finding or gaining access to the coffee machine, I did find my way into a few printers and the smart TV.

The next step was to do a little research. Soon I realized trying to find user manuals was as sketchy as looking for random hardware drivers. I managed to find some promotional pdf’s and a few distributors of the machine but have yet to find any sort of service or user material. A few things that caught my eye were add on items to the product. The manufacture offers a paid service to remotely monitor your machine. Also, a credit card processor is an optional item. One would hope that these services have even the most basic of security. Perhaps thinking this wanna be hacker has any chance at cracking the machine is a bit of a stretch. Looks like this experiment will have to come down to good ol’ social engineering.

[Read Part II >>](/The-Coffee-Machine-has-WIFI-Part-II/)
