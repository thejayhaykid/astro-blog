---
title: "Should I Utilize a Microfrontend Architecture?"
pubDate: "Mar 1, 2024"
description: "This post is the first step of hopefully many along my journey this year"
heroImage: "/blog-images/tech/2024/mfe-arch.jpeg"
category: "Microfrontends"
tags: ["mfe", "apps", "single-spa", "architecture"]
draft: false
---

> What is it? How do I use it? Should I even use it? Let's find out.

There are many different ways to structure and plan out any software that you build. Some ways are better than others, and many times it is problem-specific as to which one is best.

One of those options has come to be known as microfrontend architecture, and that’s the one we are going to focus on.

## What is microfrontend architecture?

Microfrontend architecture is very much so, just like it sounds. Much like a [micro-service backend architecture](https://youtu.be/y8OnoxKotPQ?si=QoeIQy38pYXYEkYh), it breaks up the application into smaller, more manageable codebases. Allowing for loosely coupled microfrontends makes them easier and safer to deploy. Microfrontends can be split up by the paths on the same domain or even smaller sections to have multiple microfrontends on the same page.

## What options are available to implement it?

There are *technically* four options available.

- [Single-Spa](https://single-spa.js.org)
- [Webpack 5 Federated Modules](https://webpack.js.org/concepts/module-federation/)
- [Web modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [SystemJS](https://github.com/systemjs/systemjs)

However, Single-Spa does use SystemJS under the hood, if you are going to count that as a sub-option. I am partial to Single-Spa as I am \**disclaimer*\* an active maintainer on the project.

## What are the benefits of implementing it?

This separation has many advantages:

- Allowing separate teams to control their deployment process
- Deploying independently
- If one application goes down, it doesn't mean the entire web app is down
- It is built in lazy loading and application chunking. You only load the apps that you use, and the final bundle is already split up into smaller chunks, split up by app

## What are the downsides of implementing it?

- Everything can feel fragmented, it sometimes feels abstract how the code interacts with other microfrontends
- It requires a lot of forethought and planning. You'll want to at least start with a strategy for what constitutes an app, a parcel (single-spa-specific terminology), or a utility. This can change over time, but you should start somewhere.
- If you have to introduce a breaking change to a highly used utility, you cannot do a slow rollout of that change across all of your different microfrontends. Once it's live, it's live, and everything that uses it needs to be prepared to handle that.
  - This is why planning and forethought are important. This is only necessary when the API surface between microfrontends changes. If the contract is still in tact, this problem does not come into play.

## Conclusion

I am a firm believer in there being [No Software Silver Bullet](https://en.wikipedia.org/wiki/No_Silver_Bullet), and microfrontends are no different. It is not a one-size-fits-all solution; there are definite trade-offs depending on what you are looking for.

However, there are real problems out there in the world that microfrontends are a legitamate solution to. I have used it in an enterprise production environment and have been pleased with the flexibility and advantages that it offers.

Are you interested in using a microfrontend architecture? Are you already using one? Do you have any other questions for me or potential further articles that you think I should write? Let me know below!
