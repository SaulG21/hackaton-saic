import { getAuth, signOut } from "firebase/auth"; // Importamos signOut para cerrar sesión
import { useHistory } from "react-router-dom";
import Layout from "../../components/shared/Layout";
import Button from "@mui/material/Button";
import Logo from "../../assets/Logo.svg";
import ods from "../../assets/ods.jpg";

function Home() {
  const history = useHistory();

  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      localStorage.removeItem("user");
      history.push("/login"); // Redirigir a la página de login tras cerrar sesión
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <Layout className="flex-col space-y-4 h-screen w-full justify-start">
      <div className="flex items-center justify-end w-full min-w-[800px]">
          <div className="flex w-full justify-center self-center">
            <img src={Logo} alt="image" className="w-[400px] h-auto mt-10" />
          </div>
          <div className="flex w-[200px] absolute justify-center items-center">
            <Button
              sx={{
                borderColor:"#2AD879",
                color:"#2AD879",
              }}
              variant="outlined"
              onClick={handleLogout} 
            >
              Cerrar sesión
            </Button>
          </div>
      </div>
        <div className="flex flex-1 items-center w-full justify-evenly">
          <div className="flex flex-col justify-center items-center bg-white space-y-4 shadow-2xl">
            <p className="text-yellow-400 text-5xl font-bold">{"Our"}</p>
            <p className="text-yellow-400 text-5xl font-bold">{"Mission"}</p>
            <img src={ods} alt="ods" className="w-[500px] h-[400px] shadow-slate-700" />
          </div>
          <div className="flex flex-col items-center w-1/2 justify-center h-auto space-y-6">
              <Button
                className="w-[300px]"
                size="large"
                sx={{
                  background:"#2AD879",
                  color:"white",
                  '&:hover':{
                    backgroundColor:"#32F752",
                    color:"white"
                  }
                }}
              >
                Create a new blog
              </Button>
              <Button
                className="w-[300px]"
                size="large"
                sx={{
                  background:"#2AD879",
                  color:"white",
                  '&:hover':{
                    backgroundColor:"#32F752",
                    color:"white"
                  }
                }}
              >
                Groups
              </Button>
          </div>
        </div>
    </Layout>
  );
}

export default Home;
