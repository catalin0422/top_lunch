/* eslint-disable jsx-a11y/anchor-is-valid */
// import React, { useState } from "react";
import Logo from "../Assets/toplunch2.png";
// import { HiOutlineBars3 } from "react-icons/hi2";
//  import Box from "@mui/material/Box";
// import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
// import Drawer from "@mui/material/Drawer";
// import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import HomeIcon from "@mui/icons-material/Home";
// import InfoIcon from "@mui/icons-material/Info";
// import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import { Link } from "react-scroll";

const Navbar = () => {
  // // const [openMenu, setOpenMenu] = useState(false);
  // const menuOptions = [
  //   {
  //     text: "Home",
  //     icon: <HomeIcon />,
  //   },
  //   {
  //     text: "Despre noi",
  //     icon: <InfoIcon />,
  //   },
  //   {
  //     text: "Meniu",
  //     icon: <RestaurantMenuIcon />,
  //   },
  //   {
  //     text: "Contacteaza-ne",
  //     icon: <PhoneRoundedIcon />,
  //   },
    
  // ];
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt=""/>
      </div>
      <div className="navbar-links-container">
        <a href="">Home</a>
        <Link to="about-section" smooth={true} duration={500}>Despre noi</Link>
        <Link to="menu-section" smooth={true} duration={500}>Meniu</Link>
        <Link to="contact-section" smooth={true} duration={500}>Contactează-ne</Link>
      </div>
      {/* <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer> */}
    </nav>
  );
};

export default Navbar;
