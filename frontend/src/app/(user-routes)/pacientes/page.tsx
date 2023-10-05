"use client";

import TableShedules from "@/components/schedules/Table/page";
import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function Patients() {
  return (
    <>
      <Box
        sx={{
          mb: 2,
          textAlign: "end",
        }}
      >
        <Button variant="contained">
          <AddIcon sx={{ mr: 1 }} />
          Adicionar paciente
        </Button>
      </Box>

      <TableShedules />
    </>
  );
}

