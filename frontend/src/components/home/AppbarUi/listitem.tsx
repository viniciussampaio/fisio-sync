import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PeopleIcon from "@mui/icons-material/People";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";

export const mainListItems = (
  <React.Fragment>
    {/* <Link href="/home">
      <ListItemButton>
        <ListItemIcon sx={{ color: "white" }}>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
    </Link> */}
    <Link href="/agendamentos">
      <ListItemButton>
        <ListItemIcon sx={{ color: "white" }}>
          <CalendarMonthIcon />
        </ListItemIcon>
        <ListItemText primary="Agendamento" />
      </ListItemButton>
    </Link>
    <Link href="/pacientes">
      <ListItemButton>
        <ListItemIcon sx={{ color: "white" }}>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Pacientes" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);
