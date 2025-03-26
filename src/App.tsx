import NavbarPage from "./pages/NavbarPage";
import SidebarPage from "./pages/SidebarPage";
import VideoContentPage from "./pages/VideoContentPage";
import { useState } from "react";
import styles from "./styles/App.module.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  
} from "react-router-dom";
import VideoDetailsPage from "./pages/VideoDetailsPage";


const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);

    // const location = useLocation();
  };

  return (
    <Router>
      <NavbarPage toggleSidebar={toggleSidebar} />
      {location.pathname === "/" && (
        <SidebarPage isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      )}
      <div
        className={`${styles.mainContent} ${
          isSidebarOpen ? styles.sidebarOpen : styles.sidebarClosed
        }`}
      >
        <Routes>
          <Route path="/" element={<VideoContentPage />} /> {/* Home Page */}
          <Route path="/video/:id" element={<VideoDetailsPage />} />{" "}
          {/* Video Details Page */}
        </Routes>
      </div>
    </Router>
  );
};
export default App;

// import NavbarPage from "./pages/NavbarPage";
// import SidebarPage from "./pages/SidebarPage";
// import VideoContentPage from "./pages/VideoContentPage";
// import VideoDetailsPage from "./pages/VideoDetailsPage";
// import { useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import styles from "./styles/App.module.css";

// const App = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <Router>
//       {/* Navbar is displayed on all pages */}
//       <NavbarPage toggleSidebar={toggleSidebar} />

//       <div className={styles.appContainer}>
//         {/* Routes */}
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <>
//                 {/* Sidebar only on the home page */}
//                 <SidebarPage
//                   isOpen={isSidebarOpen}
//                   toggleSidebar={toggleSidebar}
//                 />
//                 <VideoContentPage />
//               </>
//             }
//           />
//           <Route path="/video/:id" element={<VideoDetailsPage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;
