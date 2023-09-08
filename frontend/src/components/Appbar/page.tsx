"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Avatar, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import Menu from "@mui/icons-material/Menu";
import ArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PeopleIcon from '@mui/icons-material/People';
import HomeIcon from '@mui/icons-material/Home';
import Link from "next/link";

const sectors = [
  { nome: "Agendamento", route: "/agendamento", icon: <CalendarMonthIcon /> },
  { nome: "Pacientes", route: "/pacientes", icon: <PeopleIcon /> },
  { nome: "Dashboard", route: "/dashboard", icon: <HomeIcon /> }
];

export default function Appbar() {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }} >
        <AppBar position="fixed" sx={{ background: "#05773e", padding: 1 }}>
          <Toolbar>
            <IconButton onClick={handleOpenDrawer} sx={{ color: "white", paddingBottom: 1.2 }}>
              <Menu />
            </IconButton>
            <Typography sx={{ flexGrow: 1 }}>Fisio Sync</Typography>
            <IconButton>
              <Avatar
                alt="photo profile"
                src={
                  "https://images.pexels.com/photos/7697696/pexels-photo-7697696.jpeg?auto=compress&cs=tinysrgb&w=1600"
                }
              />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer anchor="left" open={openDrawer} PaperProps={{ sx: { backgroundColor: "#05773e" } }}>
          <Toolbar sx={{ background: "#05773e" }}>
            <IconButton onClick={() => setOpenDrawer(false)} sx={{ color: "white" }}>
              <ArrowLeft />
            </IconButton>
            <Typography sx={{ flexGrow: 1, color: "white" }}>
              Fisio Sync
            </Typography>

          </Toolbar>
          <List sx={{ background: "#05773e" }}>
            {sectors.map((text) => (
              <ListItem key={text.nome} disablePadding sx={{ color: "white" }}>
                <ListItemButton>
                  <IconButton sx={{ color: "white" }}>
                    {text.icon}
                  </IconButton>
                  <Link href={text.route} key={text.nome}>{text.nome}</Link>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Box >
    </>
  );
}
