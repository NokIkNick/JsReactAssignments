# JsReactAssignments

## nw-89@cphbusiness.dk

## Questions from ReactExerciseList.md:

- 2.1: What is the purpose of the key value, which must be given to individual rows in a react-list?
    To ensure that react knows exactly which item is which, and it makes it easier to manipulate.

- 2.2: It is recommended to use a unique value from your data if available (like an ID). How do you get a unique value in a map callback, for data without a unique ID?
    You can generate an ID either randomly, using Math.random, or from using different packages that offer random generation of UUIDs. You should never use the index of the element from the array you map from.

- 2.3: What is the difference(s) between state and props?
    State is a constant that can be updated with a setter function throughout the websites lifetime. Its able to be kept between renders. State can only be updated and accessed in the component its defined, unless passed through a props in a component.
    Props are like function parameters, they can be used to pass data between components. They cannot be modified by children, unless its a state variable, with its setter function. 
    
- 2.4: For which scenarios would you use props, and for which would you use state?
    Usually, state is used for storing or controlling something in a specific component. State could be used to keep track of a timer needed to be shown on the screen. And Props are used to modify a component, or hand a component information it needs, props could be used to pass the value of the timer to another component that displays the state.


## Completed assignments:
- React: State
- React: List and Keys. (Both State and List and Keys can be found in the folder "stateExercise").
- React: Tick Counter
- React: Crud with Forms.