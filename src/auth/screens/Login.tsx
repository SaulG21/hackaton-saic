import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen"> 
      <div className="bg-white shadow-lg rounded-lg p-10 w-[600px] h-[400px]">
        <h2 className="text-2xl font-bold text-center mb-6">Iniciar Sesión</h2>
        <div className="flex flex-col space-y-4">
          <TextField label="Nombre de usuario" variant="filled" fullWidth />
          <TextField
            id="filled-password-input"
            label="Contraseña"
            type="password"
            autoComplete="current-password"
            variant="filled"
            fullWidth
          />
          <div className="flex space-x-4">
            <Button className="flex-1" variant="outlined">
              Iniciar Sesión
            </Button>
            <Button className="flex-1" variant="outlined">
              Registrarse
            </Button>
          </div>

          <Button variant="outlined" fullWidth>
            Regresar
          </Button>
        </div>
      </div>
    </div>
  );
}
