import React from "react";
import { useState, useEffect } from "react";
import { ThoughtsMessage } from "./components/ThoughtsMessage.jsx";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const url = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setThoughts(json);
        console.log(json);
      });
  }, []);

  return (
    <div className="wrapper">
      {thoughts.map((thought) => (
        <ThoughtsMessage
          key={thought._id}
          message={thought.message}
          hearts={thought.hearts}
          time={thought.createdAt}
        />
      ))}
    </div>
  );
};
