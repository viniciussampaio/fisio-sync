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
    <ListItemButton>
      <ListItemIcon>
        {" "}
        <HomeIcon />
      </ListItemIcon>
      <Link href="/login">
        <ListItemText primary="Home" />
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <CalendarMonthIcon />
      </ListItemIcon>
      <Link href="/agendamento">
        <ListItemText primary="Agendamento" />
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <Link href="/pacientes">
        <ListItemText primary="Pacientes" />
      </Link>
    </ListItemButton>
  </React.Fragment>
);

