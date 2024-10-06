// src/auth/screens/SignUp.tsx
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import * as React from "react";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { createUserWithEmailAndPassword } from "firebase/auth"; // Importar desde Firebase
import { auth, db } from "../../firebase.ts"; // Importa tu configuración de Firebase
import { setDoc, doc } from "firebase/firestore"; // Si vas a usar Firestore para datos adicionales
import { useHistory } from "react-router-dom";
import Layout from "../../components/shared/Layout";

export default function SignUp() {
  const [rol, setRol] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [escuela, setEscuela] = useState("");
  const history = useHistory();

  const handleChange = (event: SelectChangeEvent) => {
    setRol(event.target.value as string);
  };

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
    } catch (error) {
      console.error("Error al registrar:", error);
    }
  };

  const goToLogin = function () {
    history.replace("/login");
  }

  return (
    <Layout>
      <div className="bg-white shadow-lg rounded-lg p-10 min-w-[600px] h-auto">
        <h2 className="text-2xl font-bold text-center mb-6">Crea una cuenta</h2>
        <div className="flex flex-col space-y-5">
          <TextField label="Nombre de usuario" variant="filled"/>
          <TextField label="Nombre completo" variant="filled" />
          <TextField
            id="filled-password-input"
            label="Contraseña"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="filled"
          />
          <TextField label="Correo electronico" variant="filled" />
          <FormControl variant="filled">
            <InputLabel id="demo-simple-select-filled-label">Rol</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={rol}
              onChange={handleChange}
            >
              <MenuItem value={"Teacher"}>Profesor</MenuItem>
              <MenuItem value={"Student"}>Alumno</MenuItem>
            </Select>
          </FormControl>
          <TextField label="Escuela de procedencia" variant="filled" />
          <div className="flex space-x-4 flex-col justify-center items-center">
            <p className="py-3">
              ¿Ya tienes una cuenta?
              <b
                className="hover:cursor-pointer"
                onClick={goToLogin}
              >{" Inicia Sesión"}</b>
            </p>
            <div className="flex items-center space-x-5">
              <Button className="flex-1" variant="contained"
              >
                Registrarse
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
