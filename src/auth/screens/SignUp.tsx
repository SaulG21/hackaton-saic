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
import Layout from "../../components/shared/Layout.tsx";

export default function SignUp() {
  const [rol, setRol] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [escuela, setEscuela] = useState("");
  const history = useHistory(); // Añadimos history para redirigir

  const goToLogin = function(){
    history.replace("/login");
    console.log("Cambiando pagina");
  }

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
    <Layout>
        <div className="bg-white shadow-lg rounded-lg p-10 min-w-[600px] items-center justify-center h-auto space-y-6">
          <h2 className="text-2xl font-bold text-center mb-6">Crea una cuenta</h2>
          <div className="flex flex-col space-y-6 w-full justify-center">
            <TextField label="Nombre completo" variant="standard" value={nombre} onChange={(e) => setNombre(e.target.value)} 
              sx={{
                '& label.Mui-focused': {
                  color: "#2AD879"
              },
                '& .MuiInput-underline:after': {
                    borderBottomColor: "#2AD879"
                }
            }}/>
            <TextField label="Correo electronico" variant="standard" value={email} onChange={(e) => setEmail(e.target.value)} 
              sx={{
                '& label.Mui-focused': {
                  color: "#2AD879"
              },
                '& .MuiInput-underline:after': {
                    borderBottomColor: "#2AD879"
                }
            }}/>
            <TextField
              id="filled-password-input"
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
            <FormControl variant="standard">
              <InputLabel id="demo-simple-select-filled-label"
                sx={{
                  '& label.Mui-focused': {
                    color: "#2AD879"
                },
                  '& .MuiInput-underline:after': {
                      borderBottomColor: "#2AD879"
                  }
              }}
              >Rol</InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={rol}
                sx={{
                  '& label.Mui-focused': {
                    color: "#2AD879"
                },
                  '& .MuiInput-underline:after': {
                      borderBottomColor: "#2AD879"
                  }
              }}
                onChange={(event) => setRol(event.target.value as string)}
              >
                <MenuItem value={"Teacher"} >Profesor</MenuItem>
                <MenuItem value={"Student"}>Alumno</MenuItem>
              </Select>
            </FormControl>
            <TextField label="Escuela de procedencia" variant="standard" value={escuela} onChange={(e) => setEscuela(e.target.value)} 
              sx={{
                '& label.Mui-focused': {
                  color: "#2AD879"
              },
                '& .MuiInput-underline:after': {
                    borderBottomColor: "#2AD879"
                }
            }}/>
            <div className="flex space-x-4 flex-col justify-center items-center">
            <p className="py-3 ">
                ¿Ya tienes una cuenta?
                <b
                  className="hover:cursor-pointer text-secondary"
                  onClick={goToLogin}
                >{" Inicia Sesión"}</b>
              </p>
              <Button className="w-full" variant="contained" onClick={handleSignUp} sx={{background:"#2AD879"}}>
                Registrarse
              </Button>
            </div>
          </div>
        </div>
    </Layout>

  );
}
