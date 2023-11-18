import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  TextField,
  Tooltip,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DeleteIcon from "@mui/icons-material/Delete";
import api from "@/services/api";

interface ButtonProps {
  idPatient: string;
}

export default function ButtonActions(idPatient: ButtonProps) {
  const [open, setOpen] = React.useState(false);
  const [openDialogDelete, setOpenDialogDelete] = React.useState(false);
  const [nextSession, setNextSession] = React.useState("");
  const [namePatient, setNamePatient] = React.useState("");
  const [physioResponsable, setPhysioResponsable] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenDeleteDialog = () => {
    setOpenDialogDelete(true);
  };

  const handleCloseOpenDeleteDialog = () => {
    setOpenDialogDelete(false);
  };

  const updateSchedule = () => {
    api.put(`/update-schedules/${idPatient.idPatient}`, {
      namePatient,
      physioResponsable,
    });
    setTimeout(() => {
      handleClose();
      window.location.reload();
    }, 1000);
  };

  const deleteSchedule = () => {
    api.delete(`/remove-schedules/${idPatient.idPatient}`);
    setTimeout(() => {
      handleClose();
      window.location.reload();
    }, 1000);
  };

  return (
    <Box sx={{ textAlign: "center" }}>
      <Container>
        <Tooltip title="Editar dados do paciente" arrow>
          <IconButton onClick={handleClickOpen}>
            <EditIcon />
          </IconButton>
        </Tooltip>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle sx={{ textAlign: "center" }}>
            Editando dados do paciente
          </DialogTitle>
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
            <Button onClick={updateSchedule} color="primary">
              Salvar
            </Button>
          </DialogActions>
        </Dialog>
        <Tooltip title="Excluir paciente">
          <IconButton color="error" onClick={handleOpenDeleteDialog}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        <Dialog open={openDialogDelete} onClose={handleCloseOpenDeleteDialog}>
          <DialogTitle sx={{ textAlign: "center" }}>
            Você deseja excluir este agendamento?
          </DialogTitle>
          <DialogContent>
            <DialogActions>
              <Button onClick={handleCloseOpenDeleteDialog} color="inherit">
                Cancelar
              </Button>
              <Button onClick={deleteSchedule} color="error">
                Excluir
              </Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
      </Container>
    </Box>
  );
}
