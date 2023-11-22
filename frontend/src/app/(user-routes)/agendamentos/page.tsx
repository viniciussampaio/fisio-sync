"use client";

import { Box } from "@mui/material";
import TableShedules from "@/components/schedules/Table";
import DialogSchedule from "@/components/schedules/DialogSchedule";

export default function Schedules() {
  return (
    <div>
      <Box
        sx={{
          mb: 2,
          textAlign: "end",
        }}
      >
        <DialogSchedule />
      </Box>
      <TableShedules />
    </div>
  );
}
