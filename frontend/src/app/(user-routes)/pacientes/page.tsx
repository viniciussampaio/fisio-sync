"use client";
import { Box } from "@mui/material";
import TablePatient from "@/components/patients/TablePatient";

export default function Patients() {
  return (
    <div>
      <Box
        sx={{
          mb: 2,
          textAlign: "end",
        }}
      />
      <TablePatient />
    </div>
  );
}
