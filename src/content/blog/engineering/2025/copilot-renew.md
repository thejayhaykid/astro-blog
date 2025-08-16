---
title: "I (finally) renewed my GitHub subscription"
pubDate: "Aug 16, 2025"
description: "How much better has it gotten?"
heroImage: "/blog-images/tech/2025/copilot.jpg"
category: "Engineering Life"
tags: ["AI", "copilot", "engineering-life"]
draft: false
imageCaption: "Photo by [Jan Huber](https://unsplash.com/@jan_huber?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on [Unsplash](https://unsplash.com/photos/two-men-sitting-on-aircraft-control-panel-0xNbk7D_s6U?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)"
---

AI is a peculiar thing. It’s certainly a useful tool. I use it pretty much daily at this point. I ask questions, bounce ideas off of it, give myself sanity checks, and more. I’ve written in the past about [quitting my copilot subscription](/blog/engineering/2024/not-renewing-copilot), and I ended that conversation by saying I hope it improves enough to make paying for it worth it again.

Large language models cost a fortune to create and maintain. OpenAI is still not [profitable, despite revenue in the BILLIONS](https://www.cnbc.com/2024/09/27/openai-sees-5-billion-loss-this-year-on-3point7-billion-in-revenue.html). But still these companies are giving out generous free tiers in the hope of making everyone rely on it to the point that they’ll have to pay the inevitable gouging pricing increases. To this point, I had added back the copilot free tier after it was [announced by GitHub](https://code.visualstudio.com/blogs/2024/12/18/free-github-copilot).

And had it gotten better to the point where it was worth paying for it? Well…no. It hasn’t gotten much better. I know there are thousands of graphs and marketing people yelling out how much better it’s doing now at made up benchmarks. But in my every day use, it’s still not as good as they would try to convince you it is. It still struggles mightily with codebases of any significant size like you would find in an enterprise application.

I tried to do what I considered a trivial task of creating a class around a method I had already written providing an example class to model after. Something that I would honestly give a junior engineer and expect them to be able to do it, maybe even a little too ‘hand-holdy’. And it could not do it, even GPT-5. It even cut some existing method and type definitions in half without restoring the closing bracket. There’s linting errors, compiler errors, huge problems everywhere.

I was both completely shocked and disappointed. I thought this was the perfect use case for AI, building a simple class, good amount of boilerplate and I would not have to type it. I was genuinely only left with just deleting everything Copilot did.

```bash
git restore .
```

So why then did I pick my subscription back up? If I’m still dissatisfied with AI’s capabilities, is there a point to paying for it? The short answer is yes.

The slightly longer answer is I have a better handle on **how** to use Copilot that is less frustrating for me and does help me in my day-to-day as a software engineer. And it really all comes down to expectations; I don’t expect it to function as well as the benchmarks or marketing tells me it will. I’ve used this quite a lot in the real world and really have run into the hard edges.

But it can really help with the tedium of hand-typing everything. Especially on side projects, smaller repos, or even just inserting a logging statement that’s useful while debugging. It is a tool, a powerful tool, it does not replace the person. It is much closer to other tools like debuggers, linters, autocomplete that it is to being as smart as a real person.

I won’t guarantee that I will keep paying for this indefinitely, who can? The AI world is changing so rapidly I don’t know what it will look like in 3 months. But for now, for today, I’m happy to be paying for it.
