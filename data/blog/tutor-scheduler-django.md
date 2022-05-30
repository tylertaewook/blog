---
title: 'What I learned from building a Django appointment scheduler for my school'
date: '2021-05-30'
tags: ['web-dev', 'django']
summary: 'The project that taught me how to learn, why I learn, and what to learn in my future CS career.'
---

I recently made a [Reddit post](https://www.reddit.com/r/webdev/comments/utyv1o/i_built_an_appointment_scheduler_for_my_school/) featuring my first web app; an appointment scheduler to improve my alma mater’s tutor scheduling service using Django and Bootstrap.

![preview](https://tylertaewook.com/images/projects/tutor-01.png)

- **[Github Repo](https://github.com/tylertaewook/tutor-scheduler-django)**
- **[Project Page](https://tylertaewook.com/projects/tutorscheduler)**

Many people gave great suggestions and feedback, and some asked about more stories behind this project.

So as my first blog post this year (yeah it’s been a while), I wanted to write about my project’s behind the scenes:

- **Before**: How did this project start?
- **During**: Let's Build it with Django!
- **After**: The Lessons I learned

---

# How Did This Project Start?

## Background: The problem with an existing sign-up system

Let’s start by talking about how my high school used to organize appointments and how I proposed a better way.

My Alma Mater’s library had an Academic Resource Center (ARC), where they provided writing tutor services in six 20-minute blocks every night. It was commonly used by students who wanted to receive feedback on their writing assignments and common app essays.

While it was an awesome resource to have, many students including myself suffered from its high-tech sign-up system: whiteboard. Yes, we often had to travel across the campus to write our names on a whiteboard every day. There was also much confusion as students often forgot to erase their names when they wanted to reschedule or cancel the appointment.

## Making a proposal for a new sign-up system

As a high-school senior looking for a new project, this was the best idea I could ask for. I quickly built a [proof of concept](https://github.com/tylertaewook/kentschool-emailbot) using basic python where students sign up using google forms, check for availability with google sheets, and cancel appointments with email bots.

![kentschool-emailbot](https://miro.medium.com/max/1400/1*l-q9EgUckHMhUHwGa-d_Zw.png)

I then met with the librarians to propose this new system, but my current system wasn’t very efficient nor reliable for production-level use. Both forms and sheets had to manually be updated weekly, the python script had to run every hour, counterintuitive UI, etc…

# Let's Build it with Django!

I then sought a way to transform this idea into an actual useable app. I needed a reliable and scalable CRUD backend, an intuitive mobile-friendly UI, and distinctive user models with varying permission groups.

After digging around r/webdev for a few days (wonderful community btw), I learned Django was both a “battery-included web framework” and a highly-respected skillset. What more could I ask for?

There was a small problem: I had zero experience in web development, not to mention a lack of knowledge in databases and ORM. I basically had to finish a production-level web app in a few months, using a framework I’d never used before.

## Learning and building simultaneously

Many people suggested that I start by reading the Django documentation and following its six-part tutorial. I was able to follow the tutorial by writing code line by line, but it was nowhere near for me to prepare me enough to do a project from scratch on my own. Especially, I struggled to get a grasp of Django's model–template–views architectural pattern and its ORM(Object-Relational-Mapping) feature.

Then, I came across Corey Schafer’s [Django Tutorial](https://www.youtube.com/playlist?list=PL-osiE80TeTtoQCKZ03TU5fNfx2UY6U4p); a 17-video playlist where he builds a full CRUD (Create, Read, Update, Delete) web app with user authentication, pagination, and more.

I think it is one of the best resources for Django out there; he explains the core concepts in much detail enough for an absolute beginner like myself to follow along. Even better, the CRUD web app he built in the playlist covered the most common features anyone would need.

I followed his tutorial by coding line by line only up to the first five or six videos when all the concepts suddenly clicked inside me. At this point, I could start adding my own features on top of Corey’s project because I now knew “what to google”.

Basically, Corey’s tutorial kickstarted me just enough to overcome that first hill of Django’s learning curve. The rest of the project was me digging into Django’s documentation, multiple blog posts, and StackOverflow as I slowly transformed the project into my own.

## Deployed for a semester

Finally, I finished the project along with extensive unit tests to avoid as many issues as possible when deployed to production. I had the final meeting with a local school to showcase the finished app and deployed it to the AWS instance.

At the time of writing this post, we just finished the first semester in which the app was deployed experimentally for 500+ students. I collected bug reports through google forms, and thankfully, I have not encountered any major scaling/breaking issues so far.

Here’s a short list of notable bugs we met and how we fixed them:

1. **Students with multiple gmail accounts**: Fixed by only allowing student@school-name.edu gmail accounts to sign up for sessions
2. **Different timezone issues**: Turns out it was caused when a student was using VPN. The app only had one timezone as it was for boarding school students.
3. **Duplicate appointments from the previous week**: caused by student not closing the sign-up tab for more than a week. Fixed by implementing a timeout function.

Other than these small bug reports, I received many emails from both students and teachers thanking me for building such a service for free. It’s certainly a wholesome moment I won’t forget :)

I plan on adding more requested features during the summer to prepare for the upcoming fall semester.

# What Did I Learn?

## How to learn: The best way to learn when you’re an absolute beginner

I really struggled with “tutorial hell” for several months where I mindlessly followed tutorials and copied code but never put them to use by working on my own projects.

While working on this project, I found the “learning by doing” technique that worked with me the best: **Start by following a tutorial that is similar to what you want to build; then slowly detach the project from the tutorial and become independent.**

The first portion of this technique allows you to overcome that initial learning curve where you’re confused with everything. This way, you can learn just enough to the point where you know what to google for when encountering a problem. After then, the second portion teaches you the “grind” process of programming. I’m talking about those hours where you have to read multiple blog posts and documentation just to solve a single bug. I believe this grinding process is what truly pushes you to become a better programmer with grit.

## Why I learn: To make a more impactful contribution

Building a scheduler for my school was the first project that made a real impact on others: my school community. I could witness the change I brought to my school; where students no longer had to travel across campus to sign up for tutor sessions, where tutors could easily view past and upcoming sessions, and where teachers could assign students to a session during class.

The fact that I could bring such positive change to the community I love with my skills is the best feeling I could ask for. I love SWE because I believe it’s one of few fields where one could contribute back to their community while doing what they love: coding.

Working on this project was the most motivational experience of my coding career so far, and I can confidently say the lessons I learned will be the core value that would push me onward.

## What to learn now: React -> Fullstack

I used Django Template in this project to substitute for the need for a frontend framework. While using templates was very powerful and easy to implement, I realized the need to learn frontend frameworks to work on more dynamic websites.

Therefore, I am naturally led towards learning a new skill: React. Now that I’ve experienced the backend side of web development, I want to try out the frontend framework to see which one I like more.

I’m currently working on a Django REST+ NextJS SaaS by using the same learning technique I mentioned above. I’ll be writing another post about it very soon, so keep your heads up by following me!
