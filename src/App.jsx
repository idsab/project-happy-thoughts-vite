import React from "react";
import { useState, useEffect } from "react";
import { Thoughts } from "./components/Thoughts";

export const App = () => {
const [thoughts, setThoughts] = useState([])
const url = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts"

useEffect(() => {
  fetch(url)
  .then((response) => response.json())
  .then((json) => {
    setThoughts(json.data)
    console.log(json)
  })
}, [])

useEffect (() => {
  console.log("thoughts", thoughts)
}, [thoughts])



  return (
    <div className="wrapper">
      <Thoughts thoughts={thoughts}/>
    </div>
  );
};
