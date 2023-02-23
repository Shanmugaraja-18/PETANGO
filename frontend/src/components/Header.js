// import React, { useState } from "react";
// import {
//   AppBar,
//   Typography,
//   Toolbar,
//   Box,
//   Button,
//   Tabs,
//   Tab,
// } from "@mui/material";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { authActions } from "../store";
// import { useStyles } from "./utils";
// const Header = () => {
//   const classes = useStyles();
//   const dispath = useDispatch();
//   const isLoggedIn = useSelector((state) => state.isLoggedIn);

//   const [value, setValue] = useState();
//   return (
//     <AppBar
//       position="sticky"
//       sx={{
//         background:
//           "linear-gradient(90deg, rgba(58,75,180,1) 2%, rgba(116,49,110,1) 36%, rgba(2,0,161,1) 73%, rgba(69,92,252,1) 100%)",
//       }}
//     >
//       <Toolbar>
//         <Typography className={classes.font} variant="h4">
//         Petango
//         </Typography>
//         {isLoggedIn && (
//           <Box display="flex" marginLeft={"auto"} marginRight="auto">
//             <Tabs
//               textColor="inherit"
//               value={value}
//               onChange={(e, val) => setValue(val)}
//             >
//               <Tab
//                 className={classes.font}
//                 LinkComponent={Link}
//                 to="/blogs"
//                 label="All Post"
//               />
//               <Tab
//                 className={classes.font}
//                 LinkComponent={Link}
//                 to="/myBlogs"
//                 label="My Account"
//               />

//               <Tab
//                 className={classes.font}
//                 LinkComponent={Link}
//                 to="/search"
//                 label="Search"
//               />
//                <Tab
//                 className={classes.font}
//                 LinkComponent={Link}
//                 to="/blog/:id"
//                 label="Pets"
//               />
//               <Tab
//                 className={classes.font}
//                 LinkComponent={Link}
//                 to="/myBlogs"
//                 label="My Account"
//               />
//               <Tab
//                 className={classes.font}
//                 LinkComponent={Link}
//                 to="/blogs/add"
//                 label="Add Post"
//               />
//             </Tabs>
//           </Box>
//         )}
//         <Box display="flex" marginLeft="auto">
//           {!isLoggedIn && (
//             <>
//               {" "}
//               <Button
//                 LinkComponent={Link}
//                 to="/auth"
//                 variant="contained"
//                 sx={{ margin: 1, borderRadius: 10 }}
//                 color="warning"
//               >
//                 Login
//               </Button>
//               <Button
//                 LinkComponent={Link}
//                 to="/auth"
//                 variant="contained"
//                 sx={{ margin: 1, borderRadius: 10 }}
//                 color="warning"
//               >
//                 Signup
//               </Button>
//             </>
//           )}
//           {isLoggedIn && (
//             <Button
//               onClick={() => dispath(authActions.logout())}
//               LinkComponent={Link}
//               to="/auth"
//               variant="contained"
//               sx={{ margin: 1, borderRadius: 10 }}
//               color="warning"
//             >
//               Logout
//             </Button>
//           )}
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;



import React, { useState } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Box,
  Button,
  Tabs,
  Tab,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";
import { useStyles } from "./utils";
const Header = () => {
  const classes = useStyles();
  const dispath = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const [value, setValue] = useState();
  return (
    <AppBar
      position="sticky"
      sx={{
        background:
          "linear-gradient(90deg, rgba(58,75,180,1) 2%, rgba(116,49,110,1) 36%, rgba(2,0,161,1) 73%, rgba(69,92,252,1) 100%)",
      }}
    >
      <Toolbar>
        <Typography className={classes.font} variant="h4">
        Petango
        </Typography>
        {isLoggedIn && (
          <Box display="flex" marginLeft={"auto"} marginRight="auto">
            <Tabs
              textColor="inherit"
              value={value}
              onChange={(e, val) => setValue(val)}
            >
              <Tab
                className={classes.font}
                LinkComponent={Link}
                to="/home"
                label="Home"
              />
              <Tab
                className={classes.font}
                LinkComponent={Link}
                to="/blog"
                label="Blog"
              />
              <Tab
                className={classes.font}
                LinkComponent={Link}
                to="/blogs"
                label="All Post"
              />
              <Tab
                className={classes.font}
                LinkComponent={Link}
                to="/myBlogs"
                label="My Account"
              />

              <Tab
                className={classes.font}
                LinkComponent={Link}
                to="/search"
                label="Search"
              />
               <Tab
                className={classes.font}
                LinkComponent={Link}
                to="/blog/:id"
                label="Pets"
              />
              <Tab
                className={classes.font}
                LinkComponent={Link}
                to="/consult"
                label="Consulatation"
              />
              <Tab
                className={classes.font}
                LinkComponent={Link}
                to="/blogs/add"
                label="Add Post"
              />
            </Tabs>
          </Box>
        )}
        <Box display="flex" marginLeft="auto">
          {!isLoggedIn && (
            <>
              {" "}
              <Button
                LinkComponent={Link}
                to="/auth"
                variant="contained"
                sx={{ margin: 1, borderRadius: 10 }}
                color="warning"
              >
                Login
              </Button>
              <Button
                LinkComponent={Link}
                to="/auth"
                variant="contained"
                sx={{ margin: 1, borderRadius: 10 }}
                color="warning"
              >
                Signup
              </Button>
            </>
          )}
          {isLoggedIn && (
            <Button
              onClick={() => dispath(authActions.logout())}
              LinkComponent={Link}
              to="/auth"
              variant="contained"
              sx={{ margin: 1, borderRadius: 10 }}
              color="warning"
            >
              Logout
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
