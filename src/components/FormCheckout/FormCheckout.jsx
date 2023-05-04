import { Button, Grid, TextField } from "@mui/material";
import React from "react";

const FormCheckout = ({ handleSubmit, handleChange, errors, values }) => {
  return (
    <div style={{ paddingTop: "50px" }}>
      <form action="" onSubmit={handleSubmit}>
        <Grid container spacing={2} flex justifyContent={"center"}>
          <Grid item xs={11} sm={7}>
            <TextField
              id="outlined-basic"
              label="Nombre"
              variant="outlined"
              fullWidth
              name="nombre"
              onChange={handleChange}
              error={errors.nombre ? true : false}
              helperText={errors.nombre}
            />
          </Grid>
          <Grid item xs={11} sm={7}>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth
              name="email"
              onChange={handleChange}
              error={errors.email ? true : false}
              helperText={errors.email}
            />
          </Grid>
          <Grid item xs={11} sm={7}>
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              name="password"
              fullWidth
              onChange={handleChange}
              error={errors.password ? true : false}
              helperText={errors.password}
            />
          </Grid>
          {values.password.length > 0 && (
            <Grid item xs={11} sm={7}>
              <TextField
                id="outlined-basic"
                label="Confirmar"
                variant="outlined"
                name="confirmPassword"
                fullWidth
                onChange={handleChange}
                error={errors.confirmPassword ? true : false}
                helperText={errors.confirmPassword}
              />
            </Grid>
          )}
          <Grid item xs={6}>
            <Button type="submit" variant="contained" sx={{ marginTop: 2 }}>
              Comprar
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default FormCheckout;
