import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
  return (
    <section className="about-me">
        <h1 id="about">About Me</h1>
        <p>My name is Brandi and currently a student with the UofA Coding Bootcamp. Expected certification date is January 20th, 2021. Interested in full-stack web development.</p>
        <img src={coverImage} style={{ width: '18rem' }} alt="cover" />
    </section>
  );
}

export default About;