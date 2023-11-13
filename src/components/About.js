import React from "react";
import { image } from "../data/data";
import {render, screen } from "@testing-library/react"

function About() {
  return <div id="about">
    <h2>About Me</h2>
    <p> </p>
    <img src={ image } alt="I Made This"></img>
  </div>;
}

export default About;
