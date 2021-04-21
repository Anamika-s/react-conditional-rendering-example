// // // import React, { Component } from "react";
// // // import './App.css';

// // // class App extends Component {
// // //   constructor(props) {
// // //     super(props);
// // //     this.state = {
// // //       isLoggedIn: true
// // //     };
// // //   }

// // //   render() {
// // //     let {isLoggedIn} = this.state;

// // //     const renderAuthButton = () => {
// // //       if (isLoggedIn) {
// // //         return <button>Logout</button>;
// // //       } else {
// // //         return <button>Login</button>;
// // //       }
// // //     }

// // //     return (
// // //       <div className="App">
// // //         <h1>
// // //           This is a Demo showing several ways to implement Conditional Rendering in React.
// // //         </h1>
// // //         {renderAuthButton()}      </div>
// // //     );
// // //   }
// // // }

// // // export default App;

// // import AuthButton from "./AuthButton";

// // import React, { Component } from "react";
// // import './App.css';

// // class App extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       isLoggedIn: true
// //     };
// //   }

// //   render() {
// //     let { isLoggedIn } = this.state;
// //     let AuthButton;

// //     if (isLoggedIn) {
// //       AuthButton = <button>Logout</button>;
// //     } else {
// //       AuthButton = <button>Login</button>;
// //     }

// //     return (
// //       <div className="App">
// //         <h1>
// //           This is a Demo showing several ways to implement Conditional Rendering in React.
// //         </h1>
// //         {AuthButton}
// //       </div>
// //     );
// //   }
// // }

// // export default App;
// // // class App extends Component {
// // //   constructor(props) {
// // //     super(props);
// // //     this.state = {
// // //       isLoggedIn: true
// // //     };
// // //   }

// // //   render() {
// // //     return (
// // //       <div className="App">
// // //         <h1>
// // //           This is a Demo showing several ways to implement Conditional Rendering in React.
// // //         </h1>
// // //         <AuthButton1 isLoggedIn={this.state.isLoggedIn} />
// // //       </div>
// // //     );
// // //   }
// // // }

// // //export default App;

// import React, { Component } from "react";
// import './App.css';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoggedIn: false
//     };
//   }

//   render() {
//     let { isLoggedIn } = this.state;

//     return (
//       <div className="App">
//         <h1>
//           This is a Demo showing several ways to implement Conditional Rendering in React.
//         </h1>
//         {isLoggedIn ? <button>Logout</button> : <button>Login</button>}
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from "react";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true
    };
  }

  render() {
    let { isLoggedIn } = this.state;

    return (
      <div className="App">
        <h1>
          This is a Demo showing several ways to implement Conditional Rendering in React.
        </h1>
        {isLoggedIn && <button>Logout</button>}
      </div>
    );
  }
}

export default App;