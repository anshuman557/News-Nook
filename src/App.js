import './App.css';
import React, { Component } from 'react'
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  //Api= 997d68b2a48b479bbf0ce53166509d51
  pageSize =5;
  // apiKey= process.env.REACT_APP_NEWS_API
  apiKey= process.env.REACT_APP_NEWS_API
  state={
    progress:0
  }
  setProgress = (progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
     <>
      <Main>
        <div>
           <Navbar />
           <LoadingBar
           height={3}
                 color='#f11946'
                   progress={this.state.progress}
                  //  progress={10}
      />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News setProgress={this.setProgress} apiKey={this.apiKey}pageSize={this.pageSize} country="in" category="general" />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News setProgress={this.setProgress} apiKey={this.apiKey}pageSize={this.pageSize} country="in" category="business" />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="entertainment" />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <News setProgress={this.setProgress} apiKey={this.apiKey}pageSize={this.pageSize} country="in" category="general" />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News setProgress={this.setProgress} apiKey={this.apiKey}pageSize={this.pageSize} country="in" category="health" />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News setProgress={this.setProgress} apiKey={this.apiKey}pageSize={this.pageSize} country="in" category="science" />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News setProgress={this.setProgress} apiKey={this.apiKey}pageSize={this.pageSize} country="in" category="sports" />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News setProgress={this.setProgress} apiKey={this.apiKey}pageSize={this.pageSize} country="in" category="technology" />
              }
            />
          </Routes>
        </div>
      </Main>
     </>
    )
  }
}





//Function base component 
// import logo from './logo.svg';   //Double comment 
// import "./App.css";
// import Navbar from "./Components/Navbar";
// import News from "./Components/News";
// import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar'
// function App() {
//   const pageSize = 8;
//   const setProgress(progress){
//     setState({progress: progress})
//   }
//   return (
//     <>
//       <Main>
//         <div>
//           <Navbar />
//           <LoadingBar
//         color='#f11946'
//         progress={10}
//         // onLoaderFinished={() => setProgress(0)}
//       />
//           <Routes>
//             <Route
//               exact
//               path="/"
//               element={
//                 <News pageSize={pageSize} country="in" category="general" />
//               }
//             />
//             <Route
//               exact
//               path="/business"
//               element={
//                 <News pageSize={pageSize} country="in" category="business" />
//               }
//             />
//             <Route
//               exact
//               path="/entertainment"
//               element={
//                 <News
//                   pageSize={pageSize}
//                   country="in"
//                   category="entertainment"
//                 />
//               }
//             />
//             <Route
//               exact
//               path="/general"
//               element={
//                 <News pageSize={pageSize} country="in" category="general" />
//               }
//             />
//             <Route
//               exact
//               path="/health"
//               element={
//                 <News pageSize={pageSize} country="in" category="health" />
//               }
//             />
//             <Route
//               exact
//               path="/science"
//               element={
//                 <News pageSize={pageSize} country="in" category="science" />
//               }
//             />
//             <Route
//               exact
//               path="/sports"
//               element={
//                 <News pageSize={pageSize} country="in" category="sports" />
//               }
//             />
//             <Route
//               exact
//               path="/technology"
//               element={
//                 <News pageSize={pageSize} country="in" category="technology" />
//               }
//             />
//           </Routes>
//         </div>
//       </Main>
//     </>
//   );
// }
// export default App;
