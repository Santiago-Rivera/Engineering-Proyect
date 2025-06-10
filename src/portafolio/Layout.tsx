import { SidebarMenu } from "./SidebarMenu";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <SidebarMenu />
      <main
        style={{
          flex: 1,
          padding: "2rem",
          margin: "25px",
          borderRadius: "10px",
          color: "#000",
          width: "calc(100vw - 320px)",
        }}
      >
        <Outlet />
      </main>
    </div>
  );
};
