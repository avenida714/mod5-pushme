// prop threading  parent to child component
// gets tedious if it is always being nested and nested and nested

//REACT CONTEXT  NOT the same as JS context.
  // own thing:  use it when we need info that can be 'considered global' ... wrapped around teh section of info that needs this information

// used on things with many nests... use sparingly because each time context changes, everything in the nests gets changed

// a -> b -> c ...  e  // prop drilling
//       a => e  with prop context

//"lifting state up"    use context if there are many nested trees


//THREE PARTS OF CONTEXT
   //1ST IS THE PROVIDER - component that is used to wrap other components in order to give access to the context's value. in our case, we will wrap the entire app

  //2 2ND IS THE CONSUMER - we don't see it in our code, but we use it in our hooks. react component that reads a context's value. consumer components must always be nested under provider components because the provider must render FIRST in order to pass that data down the tree. in other words, needs to exist before someone can talk to it.

  //3rd IS THE CONTEXT PART -  allows "gloal" data in a react application and stores  a single value.
  // par a/  createContext creates the global object  useContext - consumes that global information.

  //

  import { CreateContext } from 'react';

  export const LanguageContext = createContext()

  //wrapper component

  export const LanguageProvider = props => {
    const [language, setLanguage] = useState('french');

    return (
      <LanguageContext.Provider
        value={{ language, setLanguage, french, english }}
        >
          {props.children}
        </LanguageContext.Provider> // whatever we put between the tags, it will be a child
    );
  };


  //make a foler in src called context
  //create a file called PupContext.js


  //PupContext.js
  import {createContext } from 'react';

  export const PupContext = createContext()


  //create a provider

  <PupContext.Provider value={/*some value*/}>
    <App />
  </PupContext.Provider>

  <PupProvider>
    <App />
  </PupProvider>

  //./src/context/PupContext.js
  //...

  export function PupProvider(props) {
    return (
      <PupContext.Provider>
        {props.children}
      </PupContext.Provider>
    );
  };


  //dynamic context value

  // ./src/context/PupContext.js

  import { createContext, useState } from 'react'
  import speedy from '../pups/speedy-pup.jpg';

  export function PupProvider(props) {
    const [puppyType, setPuppyType] = useState(speedy);

    return (
      <PupContext.Provider>
        {props.children}
      </PupContext.Provider>
    );
  };

  //value prop

  export function PupProvider(props) {
    const [puppyType, setPuppyType] = useState(speedy);

    return (
      <PupContext.Provider value={{ puppyType, setPuppyType}}>
        {props.children}
      </PupContext.Provider>
    )
  }

  //useContext

  import { useContext } from 'react';
  import { PupContext} from '../../context/PupContext'
  import speedy from '../../pups/speedy-pup.jpg'
  import banana from '../../pups/banana-pup.jpg'
  import sleepy from '../../pups/sleepy-pup.jpg'

  const PupImage = () => {
    const { puppyType } = useContext(PupContext);

    return (
      <img src={puppyType} alt="pup" />
    )
  }

  export default PupImage;
