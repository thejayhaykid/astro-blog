---
title: "I am not renewing my GitHub Copilot Subscription"
pubDate: "Jun 3, 2024"
description: "I hope I can again, one day"
heroImage: "/blog-images/tech/2024/copilot.jpg"
category: "Engineering Life"
tags: ["AI", "copilot", "engineering-life"]
draft: false
imageCaption: "Photo by [Gerard Siderius](https://unsplash.com/@siderius_creativ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on [Unsplash](https://unsplash.com/photos/a-robot-holding-a-gun-next-to-a-pile-of-rolls-of-toilet-paper-YeoSV_3Up-k?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)"
---

_I honestly tried to ironically have Microsoft Copilot make the hero image for this post. But they were all terrible so I gave up. Credit [Gerard Siderius on Unsplash](https://unsplash.com/@siderius_creativ)_

I paid for an entire year of personal access to GitHub Copilot. About a month before my subscription ended, I asked myself if I was getting the value from it that I was hoping for. The answer, obviously, was no. So I wanted to explain some of my reasons, some of my hope, and why I am just using free LLM's and old-fashioned Googling again.

## It's good at the basics, mostly

All the marketing videos are not complete lies. If you are looking for a more advanced auto-complete, this is perfect. The problem is that I don't want to pay $100 per year for auto-complete. But when I'm trying to make a simple button in React or typing in some obvious lists with a key/value of an object, it does a good job of recognizing that and saving me the keystrokes.

### Bad at specific questions

I'm not the world's most advanced engineer. But I can handle pretty much all of the basic stuff. Especially if it's something in my technical wheelhouse like React or TypeScript. So I am not asking Copilot a lot of questions about the basics. If I am asking Copilot a question using its chat feature, it's usually a more advanced topic. Something that is tricky for me. The problem I have run into is that, more often than not, Copilot does not have a clue on how to answer me. And what I consider an even bigger problem is that it doesn't tell me that it doesn't know; it gives me the most ridiculous answer with as much confidence as it can muster.

Over the last year, though, I have become so pessimistic about using it that I just stopped asking Copilot questions. I would instead try to brute force it myself or _*cringe*_ read the documentation. 😱😱

Both of those methods turned out to be faster than Copilot because of...

### Rabbit holes

I don't want to add a bunch of packages to my already bloated React project. But Copilot is absolutely insistent on add more packages first. Then I have to actually find out what the package it's recommending is, are there better packages that do the same thing, down down down...

> Absolutely! All you need to do is install [package A], [package B], and [package C]. Then, adjust your dev server (and, of course, your build pipeline 🤭) and then add the following block of code:>> `js> // ….>`

Except Copilot didn't tell me the package I had mentioned by name could do what I asked without any other changes. Read the docs, kids.

### Code Churn

[I'm apparently not the only person who noticed this.](https://www.gitclear.com/coding_on_copilot_data_shows_ais_downward_pressure_on_code_quality) But I have had to update a lot more of my own code after starting to use Copilot.

#### Deleting so much code

I would also, especially at the beginning before becoming disillusioned, blindly trust Copilot and just press <Tab> any time a suggestion popped up without reading it. After painfully learning the lesson of not blindly tabbing, I got to experience a new pain in my coding workflow:

- Write some code, get in the groove, and a Copilot suggestion pops up ->
- Stop my coding flow; switch my brain to reading mode while slamming on the brakes, effectively killing my flow ->
- Realize the Copilot suggestion is kind of irrelevant to what I am trying to do; it's the most mid-engineer I've ever met in my life (which is kind of the point) ->
- Try my best to get back into the flow as quickly as possible ->
- Repeat ->

That workflow was not ideal for me or my ADHD, as every time I blast through my flow state barriers, who knows what I'll be doing 20 minutes later when I realize my office is clean but my code is still unwritten.

## The Dreaded Switch to NeoVim

But don't worry, I use [AstroNvim](https://astronvim.com) just so I can piss everyone off. It was a mistake to turn on Vim bindings in VSCode, because then I got good at them. And when I got the muscle memory, I felt like VSCode was just a touch too slow. And then I tried it in NeoVim and realized how slow VSCode is. Then I had to choose between Copilot Chat and the Copilot NVim extension, which is just glorified autocomplete. And I realized I would rather have NVim than Copilot chat.

This was actually one of the catalysts for me doing the self reflection on if I should renew Copilot at all. It turns out I didn't really miss it. I was faster; I got into a flow state more frequently. My code was more understandable to me and to other people.

## I'm Googling again

This feels weird to say, but is this considered "old school" now? I am searching for things on Google again instead of copying and pasting errors into an LLM. And you know what? I think I'm faster at it. A big part of the problem is that error messages usually stink or are irrelevant, so LLM's try to rely heavily on what the error message says is wrong. And usually it's something unrelated, but the Stack Overflow answer for that error message knows that and can point you in the right direction a lot faster.

Don't get me wrong, I'll check with an LLM sometimes, especially if the first few search results are not what I need. But for all the reasons outlined above, there are a lot of times when it is just as unhelpful.

## I hope it doesn't stay like this

I have hope for our AI overlord's future. When Copilot originally came out, and for the first few months I started using it, I thought I wouldn't have a job soon. But then there weren't really great improvements. And I started to realize how bad most of its suggestions are, and the AI sheen started to wear off. Then I had the feeling that it was actually getting worse. Then I saw other people [talk about it getting worse too](https://youtu.be/dDUC-LqVrPU?si=vfxXQXTYAWBBs0BG).

All of that made me really pessimistic about AI, and I thought it would turn out to be like Web3, crypto, NFT's, and GameStop stock, just another hype thing that has VCs throwing money at it, bankrupting any software engineer foolish enough to try to make an AI-based startup that overpromises the world. (Have you seen the first episode of Silicon Valley?) But now I don't feel that is right either.

At this point, I have swung so hard each way that I have pretty much just mellowed out. AI will be an impressive tool for anyone to use. Creating AI is tough, but you can build on the shoulders of giants and make impressive strides. It might fade just due to the costs of training; it might explode again; I'm not an oracle. But I personally am just so burned out on it that I'm just checking out for a little while. I will let it improve at whatever rate it does, and then check back in later.

Thanks for reading.
