//src/Main.js
const Main = () => {
  return (
    <div>
      <h1>Main Component</h1>
    </div>
  );
};


//src App.js

import Main from './Main';

function App() {
  return (
    <>
      <Main />
    </>
  );
};
export default App


import { useEfect, useEffect} from 'react';

const Main = () => {
  useEffect(() => {
    console.log('useEffect1 Run')
  });

  return (
    <div>
      {console.log('rendered or re-rendered')}
      <h1>Main Component</h1>
    </div>
  );
};

export default Main;


const [toggleOne, setToggleOne] = useState(false)

<button onClick={() => setToggleOne(!toggleOne)}>ToggleOne</button>


//useEfect with an epty dependency array

// only run one time, directly after the first render

useEffect(() => {
  console.log('UseEffect1 Ran');
}, []); // empty dependency array as second argument


const [toggleTwo, setToggleTwo] = useState(false);

useEffect(() => {
  console.log('UseEffect2 Ran');
}, [toggleTwo]);

useEffect(() => {
  console.log('UseEffect2 Ran');
  if(toggleTwo)
    console.log('toggleTwo sliece of state istrue so this code runs')
}, [toggleTwo]);
