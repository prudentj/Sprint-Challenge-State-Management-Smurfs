1. What problem does the context API help solve?

It is a state management system that allows you to get variables without prop drilling as long as they are in context.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The store is where all state is stored. It is immutable and can only be updated with reducers. Reducers take an event that occured and use it to update state. Actions are what is the thing the command that reducer revieces and they are contained in their own file.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is the global state, and Component state is the local state stored in a component. Use Application state if multiple components need state. Component state is best when you need a local change that only influences that component, or its direct children.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

It allows react to handle asynchronous actions like axios calls. It makes our action creators asynchronous, and contain functions within themselves.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I like to work with browser router because it is simple. However not importing variable names makes it very difficult to reuse code, and I could pick a Redux component and place it in another Redux project way easier. Redux is way more complicated that it needs to be though as far as syntax goes.