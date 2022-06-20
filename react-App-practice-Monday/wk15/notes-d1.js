/**
 * class components is a react component defined using es6 classes
 *
 * before 16.8 of react, only components allowed to use hold state
 * 16.8 hooks are introduced, and can hold state.
 *
 * slightly slower than functional
 *
 * logic of class components can sometimes be trickier
 *
 * why learn them?  need to be known for legacy code; code for businesses who have not completely refactored their codebase.
 * might need to know how to migrate from class to function
 *
 * class components are widely used in interviews.
 *
 *
 */

//create a class component

import {Component} from 'react';

class CreateClassComponent extends Component {
  render() {  //this creates the class component; allows us to render a DOM element
    return (
      <div className='wrapper'>
        <h1>Class Component</h1>
      </div>
    );
  }
}

export default CreateClassComponent;


//create state in a Class component
class CreateClassComponent extends Component {
  constructor() {
    super();  //inherits previous functionality from other classes
    this.state = {  //state is now an obj, not a slice; only used ONE TIME
      name: {  // first slice of state
        fName: 'Bobo',
        lName: 'Li'
      },
      color: 'black'  //second slice of state
    };
  }
}

render() {
  return (
    <div className='wrapper'>
      <span
      className='square'
      style={{backgroundColor: this.state.color}}
      />
      <h2>
        by {this.state.name.fName} {this.state.name.lName}
      </h2>
    </div>
  );
}


//update teh state of a class component



/********************************************************** */
//lifecycle methods
//constructor runs once only
//render method will be called many times   -- content visibleon screen

//  componentDidMount  -- similar to the useEffect  componentDidMount(){}    runs once only
//good for validating form inputs, users logging in

// componentDidUpdate  -- similar to useEffect with either state or props in dep. array  componentdidUpdate(prevProps, prevState) { if(){...}}
// works the same if the state of the array changes in useEffect.
//runs after every render.  very easy to cause an infinite loop.  don't want to set state inside of componentDidUpdate
//better to use a function as a second argument

// componentWillUnmount - similar to a cleanup func in useEffect  runs before a component is umounted and stops prev behavior


//component did mount
class Mountcomponent extends Component {
  constructor(){

  }
}
async componentDidMount() {
  const data = await fetch('https:/')
  const response = await data.json();
  const parsedData = response.data.br.mods;
}


componentdidUpdate (prevProps, prevState) {  //this can keep updating, so you should have a conditional to stop a stack overflow
 // if (prevState.number > 500) either can be used
 if (this.state.number > 500)
    alert(`${prevState.number} is greater than 500!`)
}


//with set interval things, we need to clean up memory leaks/stack overflows
//solution: use componentWillUnmount

componentWillUnmount() {
  clearInterval(this.colorChange);
}
