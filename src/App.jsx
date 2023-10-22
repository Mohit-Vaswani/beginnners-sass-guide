import React from 'react';
import "./styles/app.scss";

const App = () => {
  const githubLink = "https://github.com/Mohit-Vaswani/beginnners-sass-guide";

  return (
    <div id='app'>
      <h1>Basics of SCSS / SASS</h1>
      <ol>
        <li>We can make variable in scss, so that we don't need to remember color code names and etc. <a target='_blank' href={githubLink}>click here to see code</a></li>
        <li>We can also make an array of variable. <a target='_blank' href={githubLink}>click here to see code</a></li>
        <li>Partials in scss <a target='_blank' href={githubLink}>click here to see code</a></li>
      </ol>
      <div id='exampleBox'>
        <p>This is a just for checking partials</p>
        <a target='_blank' href={githubLink}>click here to see code</a>
      </div>
      <button className='firstBtn'>
        Button 1
      </button>
      <button className='secondBtn'>
        Button 2
      </button>
      <button className='thirdBtn'>
        Button 2
      </button>
      <button className='fourthBtn'>
        Button 2
      </button>
      <button className='fifthBtn'>
        Button 2
      </button>
    </div>
  )
}

export default App