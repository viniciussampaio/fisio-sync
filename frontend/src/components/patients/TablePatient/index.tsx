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
import ActionButtons from "@/components/schedules/ActionButtons";

interface Data {
  physioResponsable: string;
  name: string;
}

function createData(name: string, physioResponsable: string): Data {
  return {
    name,
    physioResponsable,
  };
}

const rows = [
  createData("Ana Maria", "Adriano Silva"),
  createData("Bianca Lessa", "Adriano Silva"),
  createData("Camila Lima", "Alexandra Batista"),
  createData("Daniela Silva", "Juliana Montenegro"),
  createData("Eduardo Miron", "Juliana Montenegro"),
  createData("Fabio Lima", "Sabrina Mendes"),
  createData("Gabriel Dias", "Sabrina Mendes"),
  createData("Hugo Lins", "João Matos"),
  createData("Igor Santana", "Leandro Silva"),
  createData("Joana Santos", "Matheus Pereira"),
  createData("Joana Santos", "Matheus Pereira"),
];

function stableSort<T>(array: readonly T[]) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  return stabilizedThis.map((el) => el[0]);
}

export default function TablePatient() {
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleClick = (name: string) => {
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
      stableSort(rows).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [page, rowsPerPage]
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
              {visibleRows.map((row) => {
                return (
                  <TableRow
                    hover
                    onClick={() => handleClick(row.name)}
                    tabIndex={-1}
                    key={row.name}
                  >
                    <TableCell component="th" scope="row" align="center">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">
                      {row.physioResponsable}
                    </TableCell>
                    <TableCell align="center">
                      <ActionButtons />
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
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}

