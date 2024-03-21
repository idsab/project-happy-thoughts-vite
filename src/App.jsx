import React from "react";
import { useState, useEffect } from "react";
import { Thoughts } from "./components/Thoughts.jsx";
import { ThoughtsInput } from "./components/ThoughtsInput.jsx";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [addThought, setAddThought] = useState("");
  const url = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

  //fetch happy thoughts messages from API
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setThoughts(json);
        console.log(json);
      });
  }, []);

  //handle form input submit default and clearing input text after sending message
  const handleSubmit = (event) => {
    event.preventDefault();
    setAddThought("");

    //function to post new thought to API
    const newThought = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: addThought }),
    };
    fetch(url, newThought)
      .then((response) => response.json())
      .then((data) => {
        setThoughts((thought) => [data, ...thought]);
      });
  };

  return (
    <div className="wrapper">
      <ThoughtsInput
        handleSubmit={handleSubmit}
        addThought={addThought}
        setAddThought={setAddThought}
      />
      {thoughts.map((thought) => (
        <Thoughts
          key={thought._id}
          message={thought.message}
          hearts={thought.hearts}
          time={thought.createdAt}
        />
      ))}
    </div>
  );
};
