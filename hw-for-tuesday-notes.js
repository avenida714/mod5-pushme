// REACT LET'S GO


//first jsx function
function NavBar() {
  return (
    <nav>
      <h1>Pett App</h1>
      <ul>
        <li className="selected">
            <a href="/pets">Pets</a>
        </li>
      </ul>
    </nav>
  );
}

// get a dom node for react to render to

const rootElement = document.getElementById('root')

//give react the elemtn tree and the target
ReactDOM.render(<NavBar />, rootElement);



//react must have something returned. if you don't want to return anything, return null.
const str = "hello";

function ExampleComponent() {
  if (str === "hello") return null;
  else return (
    <div>World!</div>
  );
}

function NavLinks() {
  return (
    <ul>
        <li className="selected">
            <a href="/pets">Pets</a>
        </li>
    </ul>
  );
}

function NavBar() {
  return (
    <nav>
        <h1>Pet App</h1>
        <NavLinks />
    </nav>
  );
}

//export here

export default NavLinks;

//import at top
import NavLinks from '.NavLinks.js'  //

export default NavBar;


//react.fragment

import React from 'react';

function CorrectComponent(){
  //returns two div tags wrapped in a reac.fragment

  return (
    <React.fragment>
      <div></div>
      <div></div>
    </React.fragment>
  );
}

import React from 'react';

function CorrectComponent(){
  //returns two div tags wrapped in empty tags
  return (
    <>
      <div></div>
      <div></div>
    </>
  );
}


//props is an object that gets passed down from the parent function component into the child function component.

function NavBar() {
  return (
    <nav>
      <h1>Pet App</h1>
      <NavLinks hello="world"/>
    </nav>
  );
}
//or
function NavBar() {
  const world = "world"
  return (
    <nav>
      <h1>Pet App</h1>
      <NavLinks hello={world} />
    </nav>
  );
}
