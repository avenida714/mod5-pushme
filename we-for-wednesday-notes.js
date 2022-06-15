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
