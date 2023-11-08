//Card wala jaha display hora
import React from 'react'
const NewsItem=(props)=> {
  //Agar constructor use krna hai tho super ko use krna pdega uske bina error throw krega
  //Technically agar constructor bnega tho uskaobject bhi bnana pde ga

  // constructor(){
  //   super();
  //   console.log("Hi! I am a constructor")

    let { title, description, ImageUrl, newsUrl, author, date, source } =
      props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "19rem" }}>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <span className="position-absolute right-0  badge rounded-pill bg-danger">
              {source}
            </span>
          </div>
          <img
            src={
              !ImageUrl
                ? "https://i-invdn-com.investing.com/news/STOCK-EXCHANGE-RUSSIAN-TRADING-SYSTEMS_800x533_L_1414427815.jpg"
                : ImageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By:- <b>{!author ? "Unknown" : author}</b> on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;





//CLASS BASED COMPONENT CODE 


//uncomment first 
// import React, { Component } from "react";


//Card wala jaha display hora

//uncomment first 
// export class NewsItem extends Component {


  //Agar constructor use krna hai tho super ko use krna pdega uske bina error throw krega
  //Technically agar constructor bnega tho uskaobject bhi bnana pde ga

  // constructor(){
  //   super();
  //   console.log("Hi! I am a constructor")
  // }
//   render() {
//     let { title, description, ImageUrl, newsUrl, author, date, source } =
//       this.props;
//     return (
//       <div className="my-3">
//         <div className="card" style={{ width: "18rem" }}>
//           <div style={{ display: "flex", justifyContent: "flex-end" }}>
//             <span className="position-absolute right-0  badge rounded-pill bg-danger">
//               {source}
//             </span>
//           </div>
//           <img
//             src={
//               !ImageUrl
//                 ? "https://i-invdn-com.investing.com/news/STOCK-EXCHANGE-RUSSIAN-TRADING-SYSTEMS_800x533_L_1414427815.jpg"
//                 : ImageUrl
//             }
//             className="card-img-top"
//             alt="..."
//           />
//           <div className="card-body">
//             <h5 className="card-title">{title}...</h5>
//             <p className="card-text">{description}...</p>
//             <p className="card-text">
//               <small className="text-body-secondary">
//                 By:- <b>{!author ? "Unknown" : author}</b> on{" "}
//                 {new Date(date).toGMTString()}
//               </small>
//             </p>
//             <a
//               rel="noreferrer"
//               href={newsUrl}
//               target="_blank"
//               className="btn btn-sm btn-dark"
//             >
//               Read More
//             </a>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default NewsItem;
