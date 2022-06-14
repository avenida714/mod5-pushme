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
