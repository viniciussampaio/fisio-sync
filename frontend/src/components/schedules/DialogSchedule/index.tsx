import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AddIcon from "@mui/icons-material/Add";
import { Grid } from "@mui/material";
import api from "@/services/api";

export default function DialogSchedule() {
  const [open, setOpen] = React.useState(false);
  const [namePatient, setNamePatient] = React.useState("");
  const [physioResponsable, setPhysioResponsable] = React.useState("");
  const [nextSession, setNextSession] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const insertSchedule = () => {
    api.post("/create-schedules", {
      namePatient,
      physioResponsable,
      nextSession,
    });
    setTimeout(() => {
      handleClose();
      window.location.reload();
    }, 1000);
  };

  const insertScheduleValitaded = () => {
    const emailStorage = localStorage.getItem("Email");

    if (!emailStorage) {
      alert("Não tem permissão para cadastrar!!!");
    } else {
      insertSchedule();
    }
  };

  return (
    <>
      <Button variant="contained" onClick={handleClickOpen}>
        <AddIcon sx={{ mr: 1 }} />
        Adicionar agendamento
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ textAlign: "center" }}>Novo agendamento</DialogTitle>
        <DialogContent>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={4}>
              <TextField
                autoFocus
                id="namePatient"
                label="Nome do Paciente"
                type="text"
                variant="standard"
                value={namePatient}
                onChange={(text) => setNamePatient(text.target.value)}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="physioResponsable"
                label="Fisioterapeuta Responsável"
                type="text"
                variant="standard"
                value={physioResponsable}
                onChange={(text) => setPhysioResponsable(text.target.value)}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="nextSession"
                label="Primeira sessão"
                variant="standard"
                type="text"
                value={nextSession}
                onChange={(text) => setNextSession(text.target.value)}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="inherit">
            Cancelar
          </Button>
          <Button onClick={insertScheduleValitaded}>Marcar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

