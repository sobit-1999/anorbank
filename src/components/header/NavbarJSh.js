import {
  AccessAlarm,
  AccessTimeOutlined,
  Menu,
  MobileFriendlyOutlined,
  MobileOffOutlined,
} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";

export default function NavbarJSh() {
  return (
    <Box
      sx={{
        display: {xs: "none", md: "flex"},
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          py: 1,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Menu />
        {dataNavbar.map((item, i) => {
          return (
            <Link to={item.link} key={i}>
              <Typography component="div" variant="h6" sx={{ ml: 3, fontSize: {xs: 12, lg: 16} }}>
                {item.name}
              </Typography>
            </Link>
          );
        })}
      </Box>
      <Box sx={{display: "flex", alignItems: "center"
    }}>

{dataNavbar2.map((item, i) => {return(
  <Link  to={item.link}>
        <Box sx={{display: "flex", alignItems: "center", color: "rgb(155, 19, 78)",
        ml: 4,
    ":hover": {
      color: "#000"
    }
  }}>
        <item.icon />
        <Typography component="div" variant="h6"
        sx={{fontSize: {xs: 13, lg: 16}, ml:"2px"}}
        >
         {item.name}
        </Typography>
        </Box>
        </Link>
  )})}
    </Box>
    </Box>
  );
}

const dataNavbar = [
  { name: "Hamkorlar", link: "/hamkorlar" },
  { name: "Kartalar", link: "/kartalar" },
  { name: "Omonatlar", link: "/omonatlar" },
  { name: "Rossiyadan o'tkazmalar", link: "/rossiyadan-o'tkazmalar" },
  { name: "Tariflar", link: "/tariflar" },
  { name: "Valyuta kursi", link: "/valyuta-kursi" },
];

const dataNavbar2 = [
  { name: "Mobil ilova", link: "/mobil-ilova", icon:  MobileFriendlyOutlined},
  { name: "Kirish", link: "/kirish", icon: LoginIcon },
];
