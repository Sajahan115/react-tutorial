// useState with Array Example
// one clear button to remove all items

import { useState } from "react";

// clicking on each remove button to clear that specific item
export const data = [
  { id: 1, name: "Sajahan" },
  { id: 1, name: "Sai Ganesh" },
  { id: 1, name: "Subhajit" },
  { id: 1, name: "Tushar" },
];

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    console.log(id);
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  const clearAllItems = () => {
    setPeople([]);
  };

  return (
    <div>
      {people.map((person) => {
        console.log(person);
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button type="button" onClick={() => removeItem(id)}>
              Remove
            </button>
          </div>
        );
      })}
      <button type="button" onClick={clearAllItems}>
        Clear All
      </button>
    </div>
  );
};

// useState with Object Example
// onClick of a button change values
// autobatching -- by default, react uses a technique called "auto-batching" to group
// state updates that occur within same event loop into a single updates.

const UseSatateObject = () => {
  const [name, setName] = useState("Sai");
  const [age, setAge] = useState(24);
  const [hobby, setHobby] = useState("Develop Codes in .NET");

  const displayPerson = () => {
    setName("Subhajit");
    setAge(28);
    setHobby("Develop COdes in React");
  };

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>Enjoys : {hobby}</h3>
      <button onClick={displayPerson}>Display Subhajit</button>
    </>
  );
};

// refactoring above examples
const UseSatateObjectComplete = () => {
  const [person, setPerson] = useState({
    name: "Sai",
    age: 24,
    hobby: "Develop Codes in .NET",
  });

  const displayPerson = () => {
    setPerson({ name: "Subhajit", age: 28, hobby: "Develop Codes in angular" });
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>Enjoys : {person.hobby}</h3>
      <button onClick={displayPerson}>Display Subhajit</button>
    </>
  );
};

//   useState updating with functional approach
const UseSatateFunction = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setTimeout(() => {
      console.log("You Clicked Me!!");
      //   setValue(value + 1);
      setValue((currentState) => {
        return currentState + 1;
      });
    }, 3000);
  };

  return (
    <div>
        <h1>{value}</h1>
        <button type="button" onClick={handleClick}>increase</button>
    </div>
  )
};
