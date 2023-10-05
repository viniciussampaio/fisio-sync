"use client";

import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import TableShedules from "@/components/schedules/Table/page";

export default function Schedules() {
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
          Adicionar agendamento
        </Button>
      </Box>
      <TableShedules />
    </>
  );
}

