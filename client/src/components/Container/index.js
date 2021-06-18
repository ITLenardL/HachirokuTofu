import React, { createClass } from "react";
import About from "../../pages/About"
import Gallery from "../../pages/Gallery"
import Blog from "../../pages/Blog";
import Store from "../../pages/Store"

// const Container = createClass({
//   render: function(){
//     return <div>
//       {/* <Home/> */}
//       <About/>
//       <Gallery/>
//       <Blog/>
//       <Store/>
//     </div>;
//   }
// });

function Container(props) {
  return <div className="container" style={props.style}>{props.children}</div>;
}

export default Container;
