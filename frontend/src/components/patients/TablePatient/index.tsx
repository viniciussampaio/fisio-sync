import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ActionButtons from "../../schedules/ActionButtons";
import api from "@/services/api";

interface ScheduleProps {
  idPatient: string;
  namePatient: string;
  physioResponsable: string;
  nextSession: string;
}

function stableSort<TS>(array: readonly TS[]) {
  const stabilizedThis = array.map((el, index) => [el, index] as [TS, number]);
  return stabilizedThis.map((el) => el[0]);
}

export default function TableShedules() {
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [schedules, setSchedules] = React.useState<ScheduleProps[]>([]);

  const getAllSchedules = async () => {
    try {
      const { data } = await api.get("/schedules");
      setSchedules(data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getAllSchedules();
  }, []);

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const visibleRows = React.useMemo(
    () =>
      stableSort(schedules).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [page, rowsPerPage, schedules]
  );

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Nome Paciente
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Fisioterapeuta Responsável
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Ações
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {visibleRows.map((schedule) => {
                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, schedule.idPatient)}
                    tabIndex={-1}
                    key={schedule.idPatient}
                  >
                    <TableCell component="th" scope="row" align="center">
                      {schedule.namePatient}
                    </TableCell>
                    <TableCell align="center">
                      {schedule.physioResponsable}
                    </TableCell>
                    <TableCell align="center">
                      <ActionButtons idPatient={schedule.idPatient} />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 8]}
          component="div"
          count={schedules.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
