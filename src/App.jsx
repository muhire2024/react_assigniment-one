import react, { useState, useContext,useEffect,createContext } from 'react'
import './App.css'
import Hooks from './hooks';
import Context from './Context'


function App() {
  const [count, setCount] = useState(0)
  const [decrement, setdecrement]=useState(0)


  return (
    <div>
<h1>welecome to MY program</h1>
<section>
    <h2> my name:MUHIRE RENE </h2>
       <h2>Class:L5SOD</h2>
       <h2>Introduction on hooks:</h2>
    <p>
    Welcome to my React app! In this app, we are learning how to manage and share state 
    using React Hooks.

In React, Hooks are functions that allow you to "hook into" React state and lifecycle features from functional components.
 Before React introduced Hooks, state and lifecycle methods (like componentDidMount or setState) 
 were only available in class components. Hooks enable functional components to manage state, 
 perform side effects, and use other features that were previously only possible in class components.
     I am using the <code>useState</code> hook to manage the theme 
      (light or dark), the <code>useEffect</code> hook to persist the theme in localStorage 
      so that it remains even after page refresh, and the <code>useContext</code> hook to 
      share the theme state across different components.
    </p>
  </section>
  <h2>use state:</h2>
  <p>This hook allows you to add state to your functional components.</p>
  <h2>useEffect:</h2>
  <p>This hook allows you to perform side effects in your components
     (like fetching data, updating the DOM, or subscribing to external events).</p>
     <h2>useContext:</h2>
     <p>This hook allows you to subscribe to React context, making it easier 
      to share global state across components.</p>
  <div className="card">
  <button onClick={() => setCount((count) => count + 1)}>
    count is {count}
  </button>
  <button onClick={() => setdecrement((decrement)=>count-1)}>decrement{decrement}</button>
  <Hooks></Hooks>

</div>
<p className="read-the-docs">
  
</p>
</div>

    
  );
};
  

  
  

export default App
