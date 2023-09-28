import { Box, Container, IconButton, Tooltip } from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";
import EditIcon from "@mui/icons-material/Edit";

export default function ButtonActions() {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Container>
        <Tooltip title="Ver anamnese" arrow>
          <IconButton color="primary">
            <ArticleIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Editar dados do paciente" arrow>
          <IconButton>
            <EditIcon />
          </IconButton>
        </Tooltip>
        {/* <Tooltip title="Confirmar paciente">
          <IconButton color="success">
            <CheckIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Paciente faltou">
          <IconButton color="error">
            <CloseIcon />
          </IconButton>
        </Tooltip> */}
      </Container>
    </Box>
  );
}

