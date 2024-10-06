import { getAuth, signOut } from "firebase/auth"; // Importamos signOut para cerrar sesión
import { useHistory } from "react-router-dom";

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
    <div>
      <h1>Bienvenido a la página de inicio</h1>
      {/* Botón de cerrar sesión */}
      <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
        Cerrar Sesión
      </button>
    </div>
  );
}

export default Home;
