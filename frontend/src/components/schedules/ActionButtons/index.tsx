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
import { DateField, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function ButtonActions() {
  const [open, setOpen] = React.useState(false);
  const [openDialogDelete, setOpenDialogDelete] = React.useState(false);

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
  return (
    <Box sx={{ textAlign: "center" }}>
      <Container>
        <Tooltip title="Editar dados do paciente" arrow>
          <IconButton onClick={handleClickOpen}>
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Editando dados do paciente</DialogTitle>
          <DialogContent>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <TextField
                  autoFocus
                  id="namePatient"
                  label="Nome do Paciente"
                  type="text"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  autoFocus
                  id="physio"
                  label="Fisioterapeuta Responsável"
                  type="text"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DateField"]}>
                    <DateField
                      label="Próxima Sessão"
                      variant="standard"
                      format="DD-MM-YYYY"
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="inherit">
              Cancelar
            </Button>
            <Button
              onClick={() => console.log("marcar agendamento")}
              color="primary"
            >
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
          <DialogTitle>Você deseja excluir este agendamento?</DialogTitle>
          <DialogContent>
            <DialogActions>
              <Button onClick={handleCloseOpenDeleteDialog} color="inherit">
                Cancelar
              </Button>
              <Button
                onClick={() => console.log("confirmar exclusão")}
                color="error"
              >
                Excluir
              </Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
      </Container>
    </Box>
  );
}

