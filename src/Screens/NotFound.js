import React from "react";
import { Link } from "react-router-dom";
import { Typography, Grid, Button, Box } from "@material-ui/core";

const NotFound = () => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      spacing={1}
      key={1}
      item
      xs={12}
    >
      <Typography align="center" gutterBottom variant="h4">
        Oops, No se ha encontrado la página solicitada
      </Typography>
      <Box
        component="img"
        alt="Pagina no encontrada"
        src={`${process.env.PUBLIC_URL}/assets/images/not-found.png`}
      />
      <Button variant="contained" m={4} size="large">
        <Link to="/">Página de inicio</Link>
      </Button>
    </Grid>
  );
};

export default NotFound;
