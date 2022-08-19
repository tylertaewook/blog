---
title: "How AI's Socratic Questioning can help you write better"
date: '2022-08-19'
tags: ['scraft', 'web-dev', 'django']
summary: 'Story behind bulding Scraft: an AI-powered Writing Tool'
mediumlink: 'https://towardsdatascience.com/orbitron-reinventing-the-wheels-and-its-control-algorithm-8f60ffd44238'
publication: 'Medium'
---

![](https://cdn-images-1.medium.com/max/1600/0*TcS4ISOfPMgeZ3vK)

Back when I was a high school student, I always struggled with writing assignments. We often had to write our opinion about recent events (Social Studies), historical events (History), and characters from literature (English).
Writing always seemed so hard for me because of these two factors:

- **Brainstorming**: I just couldn't come up with fresh ideas and perspectives when I was staring at a blank Google doc.
- **Organizing Ideas**: After 30min of drafting, I would often sit in front of 6–7 paragraphs that all seem to talk about the same redundant and dull ideas.

Fast forward to January 2022, and I was on a gap year before entering college. Graduating high school didn't mean I no longer had writing assignments, and I knew for sure expressing my ideas in writing is a critical skill for anyone in any field to have.
To help myself and others in my shoes, I started coding with the goal of building a free writing tool that tackled both of my writing fears. In this post, I will talk about how I tackled my first writing fear with AI.

# Brainstorm with Socratic Questioning

So. Brainstorming; I would often stare at an unnamed google doc and stress myself not being able to come up with fresh ideas.
One day, I came across the Socratic Questioning. According to a wiki page, Socratic Questioning/Method is defined as: "_an educational method that focused on discovering answers by asking questions._"

![preview](https://cdn-images-1.medium.com/max/1600/0*w-QjRukli1UjbKE9)

Basically, Socrates repeatedly asked quality questions to his students to stimulate and challenge their views, ultimately bringing the most out of their minds. Plato, one of Socrates' students, described this rigorous teaching method as follows:

> The teacher feigns ignorance about a given subject in order to acquire another person's fullest possible knowledge of the topic. Individuals have the capacity to recognize contradictions, so Socrates assumed that incomplete or inaccurate ideas would be corrected during the process of disciplined questioning, and hence would lead to progressively greater truth and accuracy.

It was an interesting thought, and I recalled that one of my high school English teachers implemented a very similar tactic when I visited for writing help. I'll name him Mr. Gray here.
One day, I was stuck on developing my ideas for an Editorial piece where I was writing about "Why Seattle's Approach to Homelessness Isn't Working". After reading my first draft, we had a short discussion that went like this:

**Mr. Gray**: What are some of the challenges associated with homelessness in Seattle?

**Me**: Finding and maintaining housing, accessing necessary services, and overcoming barriers to employment.

**Mr. Gray**: Hmm, how is Seattle trying to approach that first challenge?

**Me**: They are building more affordable housing and expanding its public safety toolkit.

**Mr. Gray**: Great! But I guess those approaches aren't as effective.

**Me**: Yeah…I would need to do more research on that

**Mr. Gray**: Of course! Here, I found this article that you might find interesting.

After just a short discussion with Mr. Gray, I had a starting point for my essay as well as some articles I could refer to. It was so much easier to brainstorm by exchanging questions instead of staring at an empty document.
So I thought, what if there was an AI who continuously asks questions when I'm writing? Just like Mr. Gray and Socrates.

# Let's make AI ask questions and suggest articles!

I was always interested in new technologies and AI, so it didn't take much time until I landed on a beta access page for OpenAI's GPT-3. The project has officially begun in January 2022.

For those who have never heard of it, GPT-3 is a state-of-the-art "neural network machine learning model trained using internet data to generate any type of text." It is trained on ~1 trillion words and is so big that it costs ~$4.6M each time to train.

Thankfully, OpenAI opened beta access to this amazing technology with minimal costs for training and using its API. I manually crafted a sample dataset containing ~100 argument sentences and 5–6 relevant questions, and I passed it into GPT for fine-tuning.

Now, GPT-3 was fine-tuned to ask questions about any given argument or statement! For the next eight months, I spent considerable time learning and building my project with web-dev frameworks like React, Typescript, NextJS, Django, and Tailwindcss.

If you're interested in how I built this tool on the technological side, please let me know in the comments and I will write another post dedicated to it!

Fast forward to August 2022, I released an AI-powered writing tool named Scraft for absolutely no charge, free for all.

# So, what is Scraft and how does it work?

Scraft is an AI-powered writing tool that helps you organize ideas and craft better arguments by asking mind-stimulating questions like Socrates. In simple words, Scraft can:

- Repeatedly generate questions based on the entered topic
- **Answer this question for me**: Provide the most relevant answer for any generated questions
- **We found this article you might find useful**: Provide ~10 articles and studies that you can use as supporting evidence for your arguments.

Click [this link](https://www.youtube.com/watch?v=dTJy7gU4Xjk) for the full demo video.

## How to use Scraft 101:

1. **Topic**: Enter a topic you want to write about on the main page.

![](https://cdn-images-1.medium.com/max/1600/1*KmMDb7t4jvWabn30mxXFVw@2x.png)

2. **Plan**: Scraft will generate you 5–6 questions to think about. You brainstorm and organize your ideas into 1–2 sentences for each paragraph.

![](https://cdn-images-1.medium.com/max/1600/1*RkemjbrabX-iMU4tu5qO1Q@2x.png)

3. **Draft**: Scraft will suggest ~10 relevant articles about your writing context. Generate more specific questions and Scraft will also answer the asked questions for you. Add supporting evidence and examples for each paragraph.

![](https://cdn-images-1.medium.com/max/1600/1*HJRxmx162-E6roTvh7ArJw.png)

4. **Write**: Turn it into a final draft by making final touch and proofreading for any mistakes

![](https://cdn-images-1.medium.com/max/1600/1*geFmumVBAmfwpYWKhu4M7w.png)

# Conclusion

There are many AI tools that could generate an entire essay for me, and I really enjoyed using them for fun. However, I quickly realized that just giving AI the prompt and mindlessly watching it write contributed nothing to improving my writing skills. Most importantly, I didn't really feel like I was "writing."

I believe Scraft cooperates the best of both worlds. It gives you just enough automation to stimulate your brain, but it has to be you who is actually writing and polishing your draft. Personally, I plan to use Scraft to improve my critical thinking skills by constantly asking questions to myself when writing.

I am finally entering Columbia University as a freshman this fall, and I am excited to use this tool I made for my very first University Writing course. It is no exaggeration that my entire gap year was essentially spent building this product, and I sincerely hope other high school/uni students can take advantage of what I made.

In my next post, I will write more about how I tackled my second writing fear using the "Plan-Draft-Write" technique! Follow for more!

If you have any questions, suggestions, or feedbacks, feel free to contact me in discord or in the comments.

---

[Scraft](https://scraft.ai)

![](https://i.imgur.com/cpOrygB.png)

Check out our [Instagram](https://instagram.com/scraft.ai)

Join our [Discord](https://discord.com/invite/KUBRRAXZgR)
