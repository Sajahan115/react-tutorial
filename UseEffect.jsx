// why we need useEffect

import { useEffect, useState } from "react";

const UseEffectNeed = () => {
  const [value, setValue] = useState(0);

  const helloWorld = () => {
    console.log("Hello There!!");
    // be careful, you will have infinite loop
    // setValue(value + 1);
  };
  helloWorld();
  return (
    <div>
      <h1>value : {value}</h1>
      <button onClick={() => setValue(value + 1)}>Click Me!</button>
    </div>
  );
};

// what is UseEffect?
// useEffect is a hook in react that allows you to perform side effects in function components.
// Side effects examples such as fetching data, directly updating the DOM, etc.

// accepts 2 arguments
// first argument  - callback function
// second argument - dependency array (optional)
// by default runs on each render (initial and re-render)
// if dependency array empty [] runs only on initial render
// callback function cant return promise so can't make it async

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  const helloWorld = () => {
    console.log("Hello There!!");
    // be careful, you will have infinite loop
    // setValue(value + 1);
  };

  useEffect(() => {
    console.log("hello form useEffect");
    helloWorld();
  }, []);

  return (
    <div>
      <h1>value : {value}</h1>
      <button onClick={() => setValue(value + 1)}>Click Me!</button>
    </div>
  );
};

// multiple useEffect
const UseEffectMultiple = () => {
  const [value, setValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  useEffect(() => {
    console.log("Hey from first UseEffect");
  }, [value]);

  useEffect(() => {
    console.log("Hey from second UseEffect");
  }, []);

  return (
    <div>
      <h1>value : {value}</h1>
      <button onClick={() => setValue(value + 1)}>Click Me!</button>
      <h1>Second Value: {secondValue}</h1>
      <button onClick={() => setSecondValue(secondValue + 1)}>Click Me!</button>
    </div>
  );
};

// useEffect with fetch
const UseEffectFetch = () => {
  const [users, setUsers] = useState([]);

  const url = "https://api.github.com/users";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const users = await response.json();
        console.log(users);
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h3>github users</h3>
      <div>
        {users.map((user)=> {
            const {id, login} = user;
            return (
                <div key={id}>
                    <p>{login}</p>
                </div>
            )
        })}
      </div>
    </div>
  );
};
