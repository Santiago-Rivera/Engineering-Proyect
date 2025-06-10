import { useNavigate } from "react-router-dom";

const sidebarBtnStyle: React.CSSProperties = {
  background: "transparent",
  border: "none",
  color: "#000",
  fontSize: "1rem",
  cursor: "pointer",
  padding: "0.75rem 1rem",
  borderRadius: "4px",
  margin: "0.5rem 0",
  width: "100%",
  textAlign: "left",
  transition: "background 0.2s",
};

export const SidebarMenu = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/login");
  };
  return (
    <aside
      style={{
        width: "250px",
        background: "#fff",
        color: "#000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem 1rem",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          fontWeight: "bold",
          fontSize: "1.3rem",
          marginBottom: "2rem",
          width: "100%",
        }}
      >
        <img
          style={{ width: "100%" }}
          src="https://educalinks.tecnologicoargos.edu.ec/altair/assets/img/images/logo_argos_02.png"
          alt=""
        />
      </div>
      <hr style={{ width: "100%", color: "#000" }} />
      <button style={sidebarBtnStyle} onClick={() => navigate("/portafolio")}>
        Inicio
      </button>
      <button style={sidebarBtnStyle} onClick={() => navigate("/perfil")}>
        Mi Perfil
      </button>
      <button style={sidebarBtnStyle} onClick={handleLogout}>
        Cerrar sesión
      </button>
    </aside>
  );
};
