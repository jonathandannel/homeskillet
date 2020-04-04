###### 1. How long did you spend on the coding test? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.

- I spent about 2 days going at a leisurely pace. If I had more time, I would have worked on the mobile responsiveness as well as some of the architectural decisions regarding my state management. I would also add a lot more flair to the UI with features such as better restaurant card interactivity.

- Today, Saturday, April 4 is my birthday. I am pushing my repo and deploying without writing tests because you only turn 30 once.

###### 2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

- I love destructuring. Whenever I use other languages, like Python, it is the feature that I sorely miss. It's a really great way to quickly access the properties of objects when you already know what they are.

Take `e.target.value` for event handlers, for instance.

`const someFn = ({ target: { value }}) => ...`

Now you can use the value straight away instead of typing `e.target.value` everywhere!

###### 3. How would you track down a performance issue in production? Have you ever had to do this?

- I've had to do this during new features particularly related to searching. I once wrote a search over thousands of documents and didn't pinpoint the issue until I finally learned how to use the React Dev Tools' built in profiler. The profiler is a good tool for tracing the call stack and seeing what's eating up memory.

###### 4. How would you improve the API that you just used?

- There's supposed to be a "cuisine type", but I was unable to find any. It would be really useful for users to get that kind of information.

###### 5. Please describe yourself using JSON.

```
{
  "name": "Jonathan",
  "stats": {
    "intellect": 9,
    "strength": 7,
    "armor": 8,
    "healing": 8,
    "speed": 4,
    "dexterity": 2,
    "charisma": 10
  },
  "skills": {
    "allNighter": "Increases productivity by 70% but also increases damage taken by 50%. Lasts 6 hours.",
    "destructureArrays": "The next spell you cast is guaranteed to do 200% damage.",
    "useTypescript": "Immediately destroy all bugs within a 2 meter radius."
  },
  "passive": ["friendly", "curious", "supportive"],
  "equipment": ["guitar", "dslr", "laptop(linux)", "wedding ring"]
}
```
