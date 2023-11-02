import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AddIcon from "@mui/icons-material/Add";
import { Grid } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateField } from "@mui/x-date-pickers";

export default function DialogSchedule() {
  const [open, setOpen] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
  const [name, setName] = React.useState<String>("");
  const [physio, setPhysio] = React.useState<String>("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const insertSchedule = () => {
    try {
      const response = {
        body: { selectedDate, name, physio },
      };
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
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
            <Grid item xs={6}>
              <TextField
                autoFocus
                id="namePatient"
                label="Nome do Paciente"
                type="text"
                variant="standard"
                value={name}
                onChange={(text) => setName(text.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                autoFocus
                id="physio"
                label="Fisioterapeuta Responsável"
                type="text"
                variant="standard"
                value={physio}
                onChange={(text) => setPhysio(text.target.value)}
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
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={insertSchedule}>Marcar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
