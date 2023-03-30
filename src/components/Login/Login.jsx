import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import React, { useState } from "react";

const Login = () => {

    const [ showPassword , setShowPassword ] = useState(false)

    const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <div>
      <h3>Ingresa</h3>
      <form action="">
        <TextField color="secondary"  label="Ingresa tu nombre" variant="outlined" size="normal" />
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Button variant="contained">Ingresar</Button>
      </form>
    </div>
  );
};

export default Login;
