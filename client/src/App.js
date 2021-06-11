import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import About from "./pages/About";
import './App.css';
import Section from "./components/Section";
import dummyText from "./DummyText";
import { Link, animateScroll as scroll } from "react-scroll";

// function App() {
//   return (
//     // <Provider store={createStoreWithMiddleware(reducers)}>
//       <Router>
//         <div className='app-containter'>
//           <Navbar />
//           <Wrapper>
//             <Route path='/' component={Container}
//               onEnter={function() {
//                 document.getElementById("home_id").scrollIntoView();
//               }} 
//             />
//             <Route path='/about' component={Container}
//               onEnter={function() {
//                 document.getElementById("about_id").scrollIntoView();
//               }} 
//             />
//             <Route path='/store' component={Container}
//               onEnter={function() {
//                 document.getElementById("store_id").scrollIntoView();
//               }} 
//             />
//             <Route path='/gallery' component={Container}
//               onEnter={function() {
//                 document.getElementById("gallery_id").scrollIntoView();
//               }} 
//             />
//             <Route path='/blog' component={Container}
//               onEnter={function() {
//                 document.getElementById("blog_id").scrollIntoView();
//               }} 
//             />
//           </Wrapper>
//           <Footer />
//         </div>
//       </Router>,
//     // </Provider>,
//     document.querySelector('#app')
//   )
// };

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Section 
            title="Section 1"
            subtitle={dummyText}
            dark={true}
            id="section1"
          />

          <Route exact path="/" component={About} />
          {/* <Route path="/about" component={About}
            onEnter={function() {
              document.getElementById("about_id").scrollIntoView();
            }}
          />
          <Route path="/store" component={About}
            onEnter={function() {
              document.getElementById("store_id").scrollIntoView();
            }}
          />
          <Route path="/gallery" component={About}
            onEnter={function() {
              document.getElementById("gallery_id").scrollIntoView();
            }}
          /> */}
          <Route path="/blog" component={About} />
          {/* <Route exact path="/discover" component={Discover} />
          <Route exact path="/search" component={Search} /> */}
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
