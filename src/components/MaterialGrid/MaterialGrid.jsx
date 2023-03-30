import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { estilos } from "./estilos";

const MaterialGrid = () => {
  let { box, textos } = estilos;

  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={4}>
          <Box sx={{...box, ...textos}}>
            <Typography variant="h3" sx={textos}>
              Item 1
            </Typography>
            <h4>Hola como estas</h4>
            <h4>Este es un h4</h4>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <h5 style={{ border: "2px solid black" }}>Item 2</h5>
        </Grid>
        <Grid item xs={12} sm={4}>
          <h5 style={{ border: "2px solid black" }}>Item 3</h5>
        </Grid>
      </Grid>
    </div>
  );
};

export default MaterialGrid;
