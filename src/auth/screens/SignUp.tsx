import { useState } from "react";
import { useHistory } from "react-router-dom"; // Importamos useHistory para redirigir
import { createUserWithEmailAndPassword } from "firebase/auth"; 
import { auth, db } from "../../firebase.ts"; 
import { setDoc, doc } from "firebase/firestore"; 
import TextField from "@mui/material/TextField/TextField";
import FormControl from "@mui/material/FormControl/FormControl";
import InputLabel from "@mui/material/InputLabel/InputLabel";
import Select from "@mui/material/Select/Select";
import { Button, MenuItem } from "@mui/material";

export default function SignUp() {
  const [rol, setRol] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [escuela, setEscuela] = useState("");
  const history = useHistory(); // Añadimos history para redirigir

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Guardar datos adicionales en Firestore
      await setDoc(doc(db, "users", user.uid), {
        nombre,
        email,
        rol,
        escuela
      });

      console.log("Usuario registrado:", user);
      history.push("/"); // Redirigimos al Home después de registrarse
    } catch (error) {
      console.error("Error al registrar:", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white shadow-lg rounded-lg p-10 w-[600px] h-[670px]">
        <h2 className="text-2xl font-bold text-center mb-6">Crea una cuenta</h2>
        <div className="flex flex-col space-y-4">
          <TextField label="Nombre completo" variant="filled" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          <TextField label="Correo electronico" variant="filled" value={email} onChange={(e) => setEmail(e.target.value)} />
          <TextField
            id="filled-password-input"
            label="Contraseña"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="filled"
          />
          <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-filled-label">Rol</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={rol}
              onChange={(event) => setRol(event.target.value as string)}
            >
              <MenuItem value={"Teacher"}>Profesor</MenuItem>
              <MenuItem value={"Student"}>Alumno</MenuItem>
            </Select>
          </FormControl>
          <TextField label="Escuela de procedencia" variant="filled" value={escuela} onChange={(e) => setEscuela(e.target.value)} />
          <div className="flex space-x-4">
            <Button className="flex-1" variant="outlined" onClick={handleSignUp}>
              Registrarse
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
