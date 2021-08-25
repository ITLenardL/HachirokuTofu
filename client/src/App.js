import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import About from "./pages/About";
import Store from "./pages/Store";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import Section from "./components/Section";
import dummyText from "./dummyText";
import './App.css';
// import Section from "./components/Section";
// import dummyText from "./DummyText";
import Container from "./components/Container";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/store" component={Store} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/blog" component={Blog} />
        </Wrapper>
        <Section
          title="Connect"
          dark={true}
          id="connectScroll"
        />
        <Footer />
      </div>
    </Router>
  );
}

// function App() {
//   return (
//     // <Provider>
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

// function App() {
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Wrapper>
//           <Section 
//             title="Section 1"
//             subtitle={dummyText}
//             dark={true}
//             id="section1"
//           />

//           <Route exact path="/" component={About} />
//           {/* <Route path="/about" component={About}
//             onEnter={function() {
//               document.getElementById("about_id").scrollIntoView();
//             }}
//           />
//           <Route path="/store" component={About}
//             onEnter={function() {
//               document.getElementById("store_id").scrollIntoView();
//             }}
//           />
//           <Route path="/gallery" component={About}
//             onEnter={function() {
//               document.getElementById("gallery_id").scrollIntoView();
//             }}
//           /> */}
//           <Route path="/blog" component={About} />
//           {/* <Route exact path="/discover" component={Discover} />
//           <Route exact path="/search" component={Search} /> */}
//         </Wrapper>
//         <Footer />
//       </div>
//     </Router>
//   );
// }


export default App;
