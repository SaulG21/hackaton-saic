import { useState } from "react";
import { useHistory } from "react-router-dom"; // Importamos useHistory para redirigir
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { signInWithEmailAndPassword } from "firebase/auth"; 
import { auth } from "../../firebase.ts"; 
import Layout from "../../components/shared/Layout";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory(); // Añadimos history para redirigir

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

  const goToRegister = function(){
    history.replace("/register");
  }

  return (
    <Layout>
      <div className="bg-white shadow-lg rounded-lg p-10 w-[600px] h-[400px]">
        <h2 className="text-2xl font-bold text-center mb-6">Iniciar Sesión</h2>
        <div className="flex flex-col space-y-4">
          <TextField label="Correo electronico" variant="filled" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} />
          <TextField
            id="filled-password-input"
            label="Contraseña"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="filled"
            fullWidth
          />
          <div className="w-full border flex-col space-y-2">
            <Button className="w-full" variant="contained" onClick={handleLogin}>
              Iniciar Sesión
            </Button>
            <Button variant="outlined" className="w-full"
              onClick={goToRegister}
            >
              Registrarse
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
