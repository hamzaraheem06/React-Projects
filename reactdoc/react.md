# Component

A react component always starts with an uppercase character, this differs it from the normal html elements. e.g.. An heading HTML element would be <h1></h1>, however a react component will start with an uppercase letter e.g. <MyButton />.
here MyButton is a function, also called a component, that would be returning HTML elements. e.g.

```javascript
function MyButton() {
  return <button>I'm a button</button>;
}
```

To use this component we will write it in an other function as _<MyButton />_

```javascript
function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
```

# Event's in react

to add an event to a component use onclick or on methonds like onClick, onMouseMove etc

to display an info on the screen use hooks or in particular for displaying data use useState hook

Syntax:

```javascript
let [state, setState] = useState(variable)

[something, setSomething].
```

# Thought process of creating a react project

1. First, break the UI in small components
2. Define all the state variables
3. Connect all the components so that the data can flow through them.
