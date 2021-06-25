import React from 'react';

/* function App() {
  return <div>hello, world!</div>;
} */

/* class App extends Component {
  render () {
    return (
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={() => {console.log("I am clicked.")}} />
      </React.Fragment>
    )
  }
}
 */

const App = () => {
  return <div>
    <Cat />
    <Cat />
    <Cat />
    <Cat />
  </div>

}
const Cat = () => {
  return <div>
    meow!
  </div>

}


/* 
class App extends Component {
  render () {
    return React.createElement(
      "div",
      null,
      "hello, world!!"
    );
  }
}
 */

export default App;
