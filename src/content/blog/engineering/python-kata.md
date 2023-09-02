---
title: "Babysitter Kata"
pubDate: "Nov 26 2019"
updatedDate: "Aug 30, 2023"
description: "Using test driven development to solve a problem."
heroImage: "/blog-images/tech/2020/03/kata-cover-image.jpg"
category: "Programming Exercise"
tags: ["Python", "Exercise", "CLI"]
draft: true
---

### [Description of the Problem](https://github.com/PillarTechnology/kata-babysitter):

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

For this exercise I was given the option to select my own language from a list, I decided to go with Python as it is one of the languages I am most comfortable with. After spending over a year listening to both the [PythonBytes](https://pythonbytes.fm/) and [Test & Code](https://testandcode.com/) podcasts, I had heard enough from [Brian Okken](https://twitter.com/brianokken) to use [pytest](https://docs.pytest.org/en/latest/) as the "test" part of my test driven development.

Having never used pytest before, I decided to buy [Brian's book](https://pragprog.com/book/bopytest/python-testing-with-pytest) so that I could get a good foundation of how pytest specifically worked. _As a side note, I would recommend pytest if you are working on a python project._ So I spent a couple of hours storming through that book so that I would have some idea of what I was doing.

After establishing that I was going to use pytest, I planned out the rest of what I was going to use for this project. To make it easier to develop on multiple machines I decided to use virtualenv. This way to use this package on another machine, all I would need to do (after using pip to install virtualenv) is install the packages in the requirements.txt file using `pip install -r requirements.txt` and then the package is ready to go.

The other package in requirements.txt file other than pytest is [Click](https://click.palletsprojects.com/en/7.x/). Click is a very powerful package that makes adding a command line interface (CLI) to your python package very easy. Using decorators and functions, defining a CLI is very easy.

![Red Green Repeat](../../../../public/blog-images/tech/2023/red-green.jpg)

## I have never done TDD before

But I am familiar with [Test-driven development (TDD)](https://en.m.wikipedia.org/wiki/Test-driven_development).

And I don't like it.

_From Wikipedia:_

> Test-driven development (TDD) is a software development process relying on software requirements being converted to test cases before software is fully developed, and tracking all software development by repeatedly testing the software against all test cases. This is as opposed to software being developed first and test cases created later.

"Red, Green, Repeat"

Well, strict TDD is very restricting and slows down my process a lot. Which is a good structure when you are starting out. And looking at the time on this, I was pretty early in my career at the time. But when doing TDD, it is difficult to ensure that

---

## Where to start

---

## Gaining Momentum

---

## Review and Submit

---

## Conclusion
