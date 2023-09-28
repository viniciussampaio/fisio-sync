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
import ButtonActions from "../ActionButtons/buttonActions";

interface Data {
  calories: string;
  carbs: string;
  fat: string;
  name: string;
}

function createData(
  name: string,
  calories: string,
  fat: string,
  carbs: string
): Data {
  return {
    name,
    calories,
    fat,
    carbs,
  };
}

const rows = [
  createData("Ana Maria", "Adriano Silva", "20/08/2023", "28/08/2023"),
  createData("Bianca Lessa", "Adriano Silva", "09/08/2023", "15/08/2023"),
  createData("Camila Lima", "Alexandra Batista", "12/08/2023", "20/08/2023"),
  createData("Daniela Silva", "Juliana Montenegro", "24/07/2023", "13/08/2023"),
  createData("Eduardo Miron", "Juliana Montenegro", "03/08/2023", "18/08/2023"),
  createData("Fabio Lima", "Sabrina Mendes", "28/07/2023", "16/08/2023"),
  createData("Gabriel Dias", "Sabrina Mendes", "01/08/2023", "19/08/2023"),
  createData("Hugo Lins", "João Matos", "02/07/2023", "20/07/2023"),
  createData("Igor Santana", "Leandro Silva", "27/06/2023", "20/07/2023"),
  createData("Joana Santos", "Matheus Pereira", "12/07/2023", "01/08/2023"),
  createData("Joana Santos", "Matheus Pereira", "12/07/2023", "01/08/2023"),
];

function stableSort<T>(array: readonly T[]) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  return stabilizedThis.map((el) => el[0]);
}

export default function TableShedules() {
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

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
                  Sessão Anterior
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Próxima sessão
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Ações
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {visibleRows.map((row, index) => {
                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.name)}
                    tabIndex={-1}
                    key={row.name}
                  >
                    <TableCell component="th" scope="row" align="center">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">{row.calories}</TableCell>
                    <TableCell align="center">{row.fat}</TableCell>
                    <TableCell align="center">{row.carbs}</TableCell>
                    <TableCell align="center">
                      <ButtonActions />
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

