import Header from "./components/Header";
import Blogs from "./components/Blogs";
import UserBlogs from "./components/UserBlogs";
import BlogDetail from "./components/BlogDetail";
import AddBlog from "./components/AddBlog";
import Blog from './pages/Blog';
import Homee from './pages/Homee';
import Consult from './components/consult/Consult';
import Home from './components/hom/Hom';
import Blogg from "./components/blogg/Blogg";

import "./App1.css";
import "./App2.css";


import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store";
function App() {
  const dispath = useDispatch();

  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispath(authActions.login());
    }
  }, [dispath]);
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          {!isLoggedIn ? (
            <Route path="/auth" element={<Auth />} />
          ) : (
            <>
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/add" element={<AddBlog />} />
              <Route path="/myBlogs" element={<UserBlogs />} />
              <Route path="/search" element={<Homee />} />
              <Route path='/blog/:id' element={<Blog/>} />
              <Route path="/home" element={<Home />} />
              <Route path="/blog" element={<Blogg />} />

              <Route path='/consult' element={<Consult/>}/>

              <Route path="/myBlogs/:id" element={<BlogDetail />} />{" "}
            </>
          )}
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;


// import Header from "./components/Header";
// import Blogs from "./components/Blogs";
// import UserBlogs from "./components/UserBlogs";
// import BlogDetail from "./components/BlogDetail";
// import AddBlog from "./components/AddBlog";
// import Blog from './pages/Blog';
// import Homee from './pages/Homee';
// // import Consult from './pages/Consult';


// import React, { useEffect } from "react";
// import { Route, Routes } from "react-router-dom";
// import Auth from "./components/Auth";
// import { useDispatch, useSelector } from "react-redux";
// import { authActions } from "./store";
// function App() {
//   const dispath = useDispatch();

//   const isLoggedIn = useSelector((state) => state.isLoggedIn);
//   console.log(isLoggedIn);
//   useEffect(() => {
//     if (localStorage.getItem("userId")) {
//       dispath(authActions.login());
//     }
//   }, [dispath]);
//   return (
//     <React.Fragment>
//       <header>
//         <Header />
//       </header>
//       <main>
//         <Routes>
//           {!isLoggedIn ? (
//             <Route path="/auth" element={<Auth />} />
//           ) : (
//             <>
//               <Route path="/blogs" element={<Blogs />} />
//               <Route path="/blogs/add" element={<AddBlog />} />
//               <Route path="/myBlogs" element={<UserBlogs />} />
//               <Route path="/search" element={<Homee />} />
//               <Route path='/blog/:id' element={<Blog/>} />
//               {/* <Route path='/consult' element={<Consult/>}/> */}

//               <Route path="/myBlogs/:id" element={<BlogDetail />} />{" "}
//             </>
//           )}
//         </Routes>
//       </main>
//     </React.Fragment>
//   );
// }

// export default App;

































// import Header from "./components/Header";
// import Blogs from "./components/Blogs";
// import UserBlogs from "./components/UserBlogs";
// import BlogDetail from "./components/BlogDetail";
// import AddBlog from "./components/AddBlog";
// import Blog from './pages/Blog';
// import Homee from './pages/Homee';

// import React, { useEffect } from "react";
// import { Route, Routes } from "react-router-dom";
// import Auth from "./components/Auth";
// import { useDispatch, useSelector } from "react-redux";
// import { authActions } from "./store";
// function App() {
//   const dispath = useDispatch();

//   const isLoggedIn = useSelector((state) => state.isLoggedIn);
//   console.log(isLoggedIn);
//   useEffect(() => {
//     if (localStorage.getItem("userId")) {
//       dispath(authActions.login());
//     }
//   }, [dispath]);
//   return (
//     <React.Fragment>
//       <header>
//         <Header />
//       </header>
//       <main>
//         <Routes>
//           {!isLoggedIn ? (
//             <Route path="/auth" element={<Auth />} />
//           ) : (
//             <>
//               <Route path="/blogs" element={<Blogs />} />
//               <Route path="/blogs/add" element={<AddBlog />} />
//               <Route path="/myBlogs" element={<UserBlogs />} />
//               <Route path="/search" element={<Homee />} />
//               <Route path='/blog/:id' element={<Blog/>} />

//               <Route path="/myBlogs/:id" element={<BlogDetail />} />{" "}
//             </>
//           )}
//         </Routes>
//       </main>
//     </React.Fragment>
//   );
// }

// export default App;



