import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function CustomNavbar() {
  const [UserName, setUserName] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);

      const payload = JSON.parse(atob(token?.split(".")[1] || "") || "{}");
      setUserName(payload.UserName);
    } else {
      setLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    router.push("/menu");
  };

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          {loggedIn ? (
            <>
              <p style={{}} className="text-white">
                {UserName}
              </p>
              <button className="text-white ml-4" onClick={handleLogout}>
                Cerrar Sesión
              </button>
            </>
          ) : (
            <button className="text-white" onClick={handleLogin}>
              Iniciar Sesión
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CustomNavbar;
