//function based component code 
import React from 'react'
import favicon from'./favicon.png'
const Navbar =()=> {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        {/* <img src={favicon} alt="favicon-16x16" /> */}
  <div className="container-fluid">
  <img className='image mx-3'src={favicon} alt="favicon-16x16" />
    <a className="navbar-brand mx-2" href ="/">NewsNook</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href ="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href ="/business">Business</a></li>
        <li className="nav-item">
          <a className="nav-link" href ="/entertainment">Entertainment</a></li>
        <li className="nav-item">
          <a className="nav-link" href ="/general">General</a></li>
        <li className="nav-item">
          <a className="nav-link" href ="/health">Health</a></li>
        <li className="nav-item">
          <a className="nav-link" href ="/science">Science</a></li>
        <li className="nav-item">
          <a className="nav-link" href ="/sports">Sports</a></li>
        <li className="nav-item">
          <a className="nav-link" href ="/technology">Technology</a></li>
     </ul>
    </div>
  </div>
</nav>
      </div>
    )
  
}

export default Navbar




//CLASS BASED COMPONENT CODE 

// rcep

// import React, { Component } from 'react' 
// import favicon from'./favicon.png'
// export class Navbar extends Component {
//   static propTypes = {

//   }

//   render() {
//     return (
//       <div>
//         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//         {/* <img src={favicon} alt="favicon-16x16" /> */}
//   <div className="container-fluid">
//   <img className='image mx-3'src={favicon} alt="favicon-16x16" />
//     <a className="navbar-brand mx-2" href ="/">NewsNook</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <a className="nav-link " aria-current="page" href ="/">Home</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href ="/business">Business</a></li>
//         <li className="nav-item">
//           <a className="nav-link" href ="/entertainment">Entertainment</a></li>
//         <li className="nav-item">
//           <a className="nav-link" href ="/general">General</a></li>
//         <li className="nav-item">
//           <a className="nav-link" href ="/health">Health</a></li>
//         <li className="nav-item">
//           <a className="nav-link" href ="/science">Science</a></li>
//         <li className="nav-item">
//           <a className="nav-link" href ="/sports">Sports</a></li>
//         <li className="nav-item">
//           <a className="nav-link" href ="/technology">Technology</a></li>


// uncomment first 
        // {/* <li className="nav-item dropdown">
        //   <a className="nav-link dropdown-toggle" href ="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //     Dropdown
        //   </a> */}

        // uncomment first 

        //   {/* <ul className="dropdown-menu">
        //     <li><a className="dropdown-item" href ="#">Action</a></li>
        //     <li><a className="dropdown-item" href ="#">Another action</a></li>
        //     <li><hr className="dropdown-divider"/></li>
        //     <li><a className="dropdown-item" href ="#">Something else here</a></li>
        //   </ul>
        // </li> */}
        // {/* <li className="nav-item">
        //   <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        // </li> */}


    //  </ul>

    // uncomment first 
      // {/* <form className="d-flex" role="search">
      //   <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      //   <button className="btn btn-outline-success" type="submit">Search</button>
      // </form>  */}

      
//     </div>
//   </div>
// </nav>
//       </div>
//     )
//   }
// }

// export default Navbar
