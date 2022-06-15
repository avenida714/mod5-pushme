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
