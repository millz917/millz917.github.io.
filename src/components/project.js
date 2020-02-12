import React from 'react';
import ImageMoneyBuster from '../images/MoneyBuster/imgmoneybuster'
import ReactDOM from "react-dom";

class Project extends React.Component{
  render(){
    return (
     
      <section id="Projects" class="container">
         <ImageMoneyBuster />
      <h2>Projects</h2>
      <p>This is some of my favorite projects.</p>
      <div class="grid">
      <article id="project1" class="card">
      <a href="./pages/MoneyBuster.html">
      <div class="front-card">
      <img class="thumbnail" src="./images/portfolio-work/MoneyBuster/screen.png"/>
      </div>
      <div class="back-card">
      </div>
          </a>
      </article>
      <article id="project2" class="card">
      <a href="./pages/TPC.html">
      <div class="front-card full-size">
      <img class="thumbnail" src="./images/portfolio-work/TPC/Intro.png"/>
      </div>
      <div class="back-card">
      </div>
          </a>
      </article>
      </div>

  </section>
  );
}
}

export default Project;
