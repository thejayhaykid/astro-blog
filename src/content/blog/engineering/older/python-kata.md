---
title: "My Process on a Coding Challenge"
pubDate: "Nov 26 2019"
updatedDate: "Sep 8, 2023"
description: "Using test driven development to solve a problem."
heroImage: "/blog-images/tech/2020/03/kata-cover-image.jpg"
category: "Programming Exercise"
tags: ["Python", "Exercise", "CLI"]
draft: false
imageCaption: "Photo from [Unsplash](https://unsplash.com)"
---

### [Description of the Problem](https://github.com/PillarTechnology/kata-babysitter)

> # Babysitter Kata
>
> ## Background
>
> This kata simulates a babysitter working and getting paid for one night. The rules are pretty straight forward.
>
> ## Feature
>
> _As a babysitter<br>
> In order to get paid for 1 night of work<br>
> I want to calculate my nightly charge<br>_
>
> ## Requirements
>
> The babysitter:
>
> - starts no earlier than 5:00PM
> - leaves no later than 4:00AM
> - only babysits for one family per night
> - gets paid for full hours (no fractional hours)
> - should be prevented from mistakes when entering times (e.g. end time before start time, or outside of allowable work hours)
>
> The job:
>
> - Pays different rates for each family (based on bedtimes, kids and pets, etc...)
> - Family A pays $15 per hour before 11pm, and $20 per hour the rest of the night
> - Family B pays $12 per hour before 10pm, $8 between 10 and 12, and $16 the rest of the night
> - Family C pays $21 per hour before 9pm, then $15 the rest of the night
> - The time ranges are the same as the babysitter (5pm through 4am)
>
> Deliverable:
>
> - Calculate total pay, based on babysitter start and end time, and a family.

## [Github link to source code](https://github.com/thejayhaykid/babysitter-kata)

## Initial Thoughts

For this exercise I decided to go with Python as it is one of the languages I am most comfortable with. Thanks to the  [PythonBytes](https://pythonbytes.fm/) and [Test & Code](https://testandcode.com/) podcasts, I am using [`pytest`](https://docs.pytest.org/en/latest/) as the testing framework.

Having never used `pytest` before, but [Brian Okken's book](https://pragprog.com/book/bopytest/python-testing-with-pytest) helped me get started. _As a side note, I would recommend_ `_pytest_` _if you are working on a python project._ So I spent a couple of hours storming through that book so that I would have some idea of what I was doing.

After establishing that I was going to use `pytest`, I planned out the rest of what I was going to use for this project. To make it easier to develop on different machines I decided to use `virtualenv`. All I would need to do is `pip install -r requirements.txt` and then you are ready to go anywhere else.

The other package in `requirements.txt` file other than `pytest` is [Click](https://click.palletsprojects.com/en/7.x/). Click is a powerful package that makes adding a command line interface (CLI) to Python very easy. Using decorators and functions, defining a CLI is simple.

![Red Green Repeat](/blog-images/tech/2023/red-green.jpg)

## I have never done TDD before

But I am familiar with [Test-driven development (TDD)](https://en.m.wikipedia.org/wiki/Test-driven_development).

And I don't like it.

_From Wikipedia:_

> Test-driven development (TDD) is a software development process relying on software requirements being converted to test cases before software is fully developed, and tracking all software development by repeatedly testing the software against all test cases. This is as opposed to software being developed first and test cases created later.

_"Red, Green, Repeat"_

Strict TDD is very restricting and slows down my process a lot. Which is a good structure when you are starting out. And looking at the time on this, I was pretty early in my career at the time. But when doing TDD, it is difficult to ensure that

## Where to start

Following TDD as required for this exercise, you need to start with a test. My first ["real commit"](https://github.com/thejayhaykid/babysitter-kata/commit/6b410171369ecb2581de8b269521677928c2694a) is project setup which will vary depending on your tech stack. You can see mine is setting up a Python project with `virtualenv` to manage dependencies.

My first commit beyond setup is a [failing test only](https://github.com/thejayhaykid/babysitter-kata/commit/3c73d70ea74c15f297537aecfb8dae1e5b68bbc3).

> Red, Green, Repeat

This fails due to initializing a class that doesn't exist yet.

```python
from babysitter import Sitter

def test_event_occurred():
    """ First test simulating a babysitting event occurred. """
    expected = "Successful event."
    e1 = Sitter()
    assert expected == e1.babysit()
```

Now I need that test to pass. I a class that has a defined function call babysit and returns a string of "Successful event." Easy enough, let's [add that in](https://github.com/thejayhaykid/babysitter-kata/commit/0a6e279edda8e4af54c68395c9bc7bd9cbf6beab):

```python
""" This is the babysitter class """

class Sitter:
    def __init__(self):
        self.name = "test"

    def babysit(self):
        return "Successful event."
```

We've gotten through the difficult task of starting. But we still have a lot to get through to meet the requirements.

---

## Gaining Momentum

I'm not going to go through every single commit, you can look at the [commit history](https://github.com/thejayhaykid/babysitter-kata/commits/master) if you would like to do that. ollow that pattern as you create a test for every requirement and then update the code so that test passes. With TDD, you should not have to worry about a change you made causing you to no longer pass a handled requirement. If that's the case then previous tests will start failing. This gives you built-in regression testing. In my experience it is common to not have enough automated testing compared to the other way around. A robust, automated test suite is a luxury that I never take for granted.

Make a checklist of the requirements and make sure that every one is covered by at least one test.

Find edge cases, think on the problem at hand and figuring out what can throw that out of the happy path. In the requirements above, they already point out a few edge cases.

For example, this requirement

> should be prevented from mistakes when entering times (e.g. end time before start time, or outside of allowable work hours)

So make a test that ensures that passes.

---

## Review and Submit

You have now created your complete and robust test suite. All tests pass. Your class calculates what a babysitter should charge parents after sitting for them. Now what?

It's time to review. Go through the requirements one by one and line up each one up to a specific test. Return to the requirement from the previous section, I have the following test:

```python
def test_end_time_earlier_than_start_time():
    """ Ensuring that you cannot complete an event before it is started. """
    expected = "ERROR: Cannot end before start"
    e1 = Sitter("1900", "1700")
    assert expected == e1.babysit()
```

Continue for each requirement making sure you really are in the "Review" phase.

Next, double check your spelling. Trust me on this. If you are doing this as a step in a job interview process, you do not want spelling errors to hold back your evaluation. You can even get an AI assistant to check your spelling for you as well.

Finally, have another software developer review it if you can. At the time in my career that I completed this exercise I did not have that luxury. Looking at the code nearly 5 years later, I wish I did. Or, if you can be that person for someone else, try to see if you can do that for them. A second set of eyes is always helpful. Your own eyes glaze over mistakes.

And that is it, mark it as done, send it to whoever needs it, you're good from there.
