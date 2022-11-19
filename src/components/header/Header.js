import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Logo from "../images/logo.svg";
import {
  AppBar,
  Collapse,
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { bgcolor, Box, fontSize } from "@mui/system";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import LightOutlinedIcon from "@mui/icons-material/LightOutlined";
import {
  Call,
  ExpandLess,
  ExpandMore,
  Menu,
  Public,
  StarBorder,
} from "@mui/icons-material";

const Item = styled(Paper)(({ theme }) => ({
  background: "none",
  boxShadow: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "100%",
  maxWidth: 650
}));


export default function Header() {
  const [open, setOpen] = useState(false);
  const [uzRuEn, setUzRuEn] = useState("O'zbekcha");
  const [valueRu, setValueRu] = useState("Русский");
  const [valueEn, setValueEn] = useState("English");

  const handleClickTrue = () => {
    setOpen(true);
  };

  const handleClickFalse = () => {
    setOpen(false);
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        py: 1,
        mx: {xs: "2%", md: "8%"},
        borderBottom: "1px solid rgba(185, 119, 178, 0.2)"
      }}
    >
      <Grid container spacing={2}
      >
        <Grid item xs={12} lg={6}>
          <Item>
            <img alt="Logo" src={Logo} />
            <Box 

              sx={{
                display: {
                  md:"flex", 
                  xs: "none",
                sm: "none"
                },

                justifyContent: "flex-end",
                alignItems: "center"
              }}
            >
              {HeaderData.map((item, i) => {
                return (
                  <Link  to={item.link} key={i}>
                    <Typography
                      component="div"
                      variant="h6"
                      sx={{
                        mx: 2,
                        fontSize: { xs: 14, lg: 15 },
                      }}
                    >
                      {item.name}
                    </Typography>
                  </Link>
                );
              })}
            </Box>
          <Menu sx={{ display: {sx:"block", xs: "block", md: "none"}}}/>
          </Item>
        </Grid>
        <Grid 
         sx={{display:{xs: "none", md: "grid"}}}
         item xs={12} lg={6}>
          <Item> 
            <Box sx={{ display: "flex", alignItems: "center", ml: {xs:0, lg: "10%"} }}>
              {HeaderData2.map((item, i) => {
                return (
                  <Link to={item.link} key={i}>
                    <Typography
                      component="div"
                      variant="p"
                      sx={{
                        ml: 2,
                      }}
                    >
                      {item.name}
                    </Typography>
                  </Link>
                );
              })}
            </Box>

            <Tooltip
              title={
                <Typography
                  component="div"
                  variant="h6"
                  fontSize={14}
                  color="#fff"
                >
                  Maxsus imkoniyatlar
                </Typography>
              }
              arrow
            >
              <LightOutlinedIcon />
            </Tooltip>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                ":hover": {
                  color: "rgb(171, 27, 90)",
                },
              }}
            >
              <Call />
              <Typography component="div" variant="h6">
                1290
              </Typography>
            </Box>

            <Box
              sx={{
                position: "relative",
                width: 140,
                height: 45,
              }}
            >
              <List
                sx={{
                  width: 180,
                  bgcolor: "none",
                  position: "absolute",
                  paddingY: 0,
                  borderRadius: 3,
                  right: -23,
                  ":hover": {
                    bgcolor: "#fff",
                    boxShadow: 3,
                  },
                }}
                onMouseLeave={handleClickFalse}
                onMouseOut={handleClickTrue}
              >
                <ListItemButton sx={{ borderRadius: "12px 12px 0 0" }}>
                  <Public sx={{ mr: 1 }} />
                  <ListItemText primary={uzRuEn} />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 5 }}>
                      <ListItemText
                        primary={valueRu}
                        onClick={(e) => {
                          setValueRu(uzRuEn);
                          setUzRuEn(e.target.innerText);
                        }}
                      />
                    </ListItemButton>
                    <ListItemButton
                      sx={{ pl: 5, borderRadius: "0 0 12px 12px" }}
                    >
                      <ListItemText
                        primary={valueEn}
                        onClick={(e) => {
                          setValueEn(uzRuEn);
                          setUzRuEn(e.target.innerText);
                        }}
                      />
                    </ListItemButton>
                  </List>
                </Collapse>
              </List>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

const HeaderData = [
  {
    name: "JISMONIY SHAXSLARGA",
    category: [
      { nameLink: "Kartalar", link: "/kartalar" },
      { nameLink: "Omonat", link: "/omonat" },
      { nameLink: "Kreditlar", link: "/kreditlar" },
      { nameLink: "Rossiyadan o'kazmalar", link: "/rossiyadan-o'kazmalar" },
      { nameLink: "Tariflar", link: "/tariflar" },
      { nameLink: "Mobil ilova", link: "/mobil-ilova" },
    ],
  },
  {
    name: "BIZNES",
    category: [
      {
        nameLink: "Hisob kitob xizmatini ko'rsatish",
        link: "/hisob-kitob-xizmatini-ko'rsatish",
      },
      { nameLink: "Ekvayring", link: "/ekvayring" },
      { nameLink: "Depositlar", link: "/depositlar" },
      { nameLink: "Hamkorlik dasturi", link: "/hamkorlik-dasturi" },
      { nameLink: "Internet-bank", link: "/internet-bank" },
    ],
  },
  {
    name: "BANK HAQIDA",
    category: [
      { nameLink: "Bank haqida", link: "/bank-haqida" },
      { nameLink: "Missiyasi va qadryati", link: "/missiyasi-va-qadryati" },
      {
        nameLink: "Rivojlanish strategiyasi",
        link: "/rivojlanish-strategiyasi",
      },
      { nameLink: "Bank hujjatlari", link: "/bank-hujjatlari" },
      { nameLink: "Bankning tuzilmasi", link: "/bankning-tuzilmasi" },
      { nameLink: "Rahbariyat", link: "/rahbariyat" },
      {
        nameLink: "Aksiyadorlar va sarmoyadorlarga",
        link: "/aksiyadorlar-va-sarmoyadorlarga",
      },
      { nameLink: "Press markaz", link: "/press-markaz" },
      { nameLink: "Kontaktlar", link: "/kontaktlar" },
      { nameLink: "Bank rekvizitlari", link: "/bank-rekvizitlari" },
      { nameLink: "Vakansiyalar", link: "/vakansiyalar" },
      { nameLink: "Valyutalar kursi", link: "/valyutalar-kursi" },
    ],
  },
];

const HeaderData2 = [
  { name: "Bankamatlar", link: "/bankamatlar" },
  { name: "Savdo Nuqtalari", link: "/savdo-nuqtalari" },
];
