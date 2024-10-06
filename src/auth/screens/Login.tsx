import { useState } from "react";
import { useHistory } from "react-router-dom"; // Importamos useHistory para redirigir
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { signInWithEmailAndPassword } from "firebase/auth"; 
import { auth } from "../../firebase.ts"; 
import Layout from "../../components/shared/Layout.tsx";
// import { ReactComponent as Logo } from './logo.svg';
import Logo from "../../assets/Logo.svg";



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
      <div className="bg-white shadow-2xl rounded-lg px-10 min-w-[600px] min-h-[700px] flex flex-col items-center justify-evenly space-y-2">
        <img src={Logo} alt="image" className="w-[400px] h-auto mt-3" />
        <h2 className="text-2xl font-bold text-center my-3">Iniciar Sesión</h2>
        <div className="flex flex-col space-y-5 w-full">
          <TextField label="Correo electronico" variant="standard" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            sx={{
                '& label.Mui-focused': {
                  color: "#2AD879"
              },
                '& .MuiInput-underline:after': {
                    borderBottomColor: "#2AD879"
                }
            }}
            />
          <TextField
            label="Contraseña"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="standard"
            sx={{
              '& label.Mui-focused': {
                color: "#2AD879"
            },
              '& .MuiInput-underline:after': {
                  borderBottomColor: "#2AD879"
              }
          }}
          />
        </div>
        <div className="flex flex-col justify-center items-center space-y-3">
          <Button className="w-full" variant="contained" onClick={handleLogin} style={{backgroundColor:"#2AD879"}}>
            Iniciar Sesión
          </Button>
          <Button className="w-full" variant="outlined" onClick={goToRegister} style={{
              color:"#2AD879",
              borderBlockColor:"#2AD879"
              }}>
            Registrarse
          </Button>
        </div>
      </div>
    </Layout>

  );
}
