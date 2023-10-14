import React from 'react'
import loading from'./loading.gif'
import Circle from'./Circle.gif'

const spinner =()=> {
    return (
      <div className='text-center'>
        <img src={loading} alt="loading" /><br />
        <img src={Circle} alt="Circle" />
      </div>
    )
  
}

export default spinner




//CLASS BASED COMPONENT CODE 

// import React, { Component } from 'react'
// import loading from'./loading.gif'
// import Circle from'./Circle.gif'

// export class spinner extends Component {
//   render() {
//     return (
//       <div className='text-center'>
//         <img src={loading} alt="loading" /><br />
//         <img src={Circle} alt="Circle" />
//       </div>
//     )
//   }
// }

// export default spinner
