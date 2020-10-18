import React from 'react';
import logo from './logo.svg';
// import './App.css';
// import './Cart.js';
import './Home.js';
import './NavBar.js';
// import './Search.js';
// import './Signin.js';
// import './TreatList';

// class App extends Component {
//   state = {

//   }

//   componentDidMount() {
//     fetch('http://localhost:3000/treats')
//       .then(res => res.json())
//       .then((treatsArr) => {
//         this.setState({
//           treats: treatsArr
//         })
//       })
//   }

//   render() {
//     return (
//       <div className="App">
//         <Header />
        
//       </div>
//     );
//   }

// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
