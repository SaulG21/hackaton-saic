import { useState } from "react";
import { useHistory } from "react-router-dom"; // Importamos useHistory para redirigir
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { signInWithEmailAndPassword } from "firebase/auth"; 
import { auth } from "../../firebase.ts"; 
import Layout from "../../components/shared/Layout.tsx";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory(); // Añadimos history para redirigir

  const goToRegister = function(){
    history.replace("/register");
    console.log("Cambiando pagina");
  }

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("Usuario logueado:", user);
      history.push("/"); // Redirigimos al Home después de iniciar sesión
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };


  return (
    <Layout>
      <div className="bg-white shadow-2xl rounded-lg p-10 w-[600px] h-[400px] flex flex-col justify-center space-y-2">
        <h2 className="text-2xl font-bold text-center my-3">Iniciar Sesión</h2>
        <div className="flex flex-col space-y-5 w-full">
          <TextField label="Correo electronico" variant="filled" value={email} onChange={(e) => setEmail(e.target.value)} />
          <TextField
            label="Contraseña"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="filled"
          />
        </div>
        <div className="flex flex-col justify-center border items-center space-y-3">
          <Button className="w-full" variant="contained" onClick={handleLogin}>
            Iniciar Sesión
          </Button>
          <Button className="w-full" variant="outlined" onClick={goToRegister}>
            Registrarse
          </Button>
        </div>
      </div>
    </Layout>

  );
}
