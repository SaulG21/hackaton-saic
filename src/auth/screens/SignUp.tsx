import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function SignUp() {
  const [rol, setRol] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setRol(event.target.value as string);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white shadow-lg rounded-lg p-10 w-[600px] h-[670px]">
        <h2 className="text-2xl font-bold text-center mb-6">Crea una cuenta</h2>
        <div className="flex flex-col space-y-4">
          <TextField label="Nombre de usuario" variant="filled" />
          <TextField label="Nombre completo" variant="filled" />
          <TextField
            id="filled-password-input"
            label="Contraseña"
            type="password"
            autoComplete="current-password"
            variant="filled"
          />
          <TextField
            id="filled-password-input"
            label="Confirmar contraseña"
            type="password"
            autoComplete="current-password"
            variant="filled"
          />
          <TextField label="Correo electronico" variant="filled" />
          <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-filled-label">Rol</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={rol}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em></em>
              </MenuItem>
              <MenuItem value={"Teacher"}>Profesor</MenuItem>
              <MenuItem value={"Student"}>Alumno</MenuItem>
            </Select>
          </FormControl>
          <TextField label="Escuela de procedencia" variant="filled" />
          <div className="flex space-x-4">
            <Button className="flex-1" variant="outlined">
              Registrarse
            </Button>
            <Button className="flex-1" variant="outlined">
              Regresar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
