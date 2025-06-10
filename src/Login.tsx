import type React from "react";
import { useState } from "react";
import "./Styles/login.css";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [showPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    role: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.username || !formData.password || !formData.role) {
      alert("Todos los campos son obligatorios");
      return;
    }
    // Aquí iría la lógica de autenticación real
    console.log("Formulario enviado:", formData);
    navigate("/portafolio");
    // Redirección después de login exitoso
    // window.location.href = "/portafolio";
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-content">
          <div className="login-form-container">
            <form onSubmit={handleSubmit} className="login-form">
              <div className="login-logo">
                <img
                  src="https://educalinks.tecnologicoargos.edu.ec/altair/assets/img/images/logo_argos_02.png"
                  alt="logo"
                />
              </div>

              <div className="form-group">
                <label htmlFor="username">Usuario</label>
                <input
                  className="form-input"
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="off"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input
                  className="form-input"
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="off"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="role">Perfil</label>
                <select
                  name="role"
                  id="role"
                  className="form-select"
                  value={formData.role}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled>
                    Seleccione Perfil ...
                  </option>
                  <option value="U">Administrativo</option>
                  <option value="A">Alumnos</option>
                  <option value="P">Docente</option>
                </select>
              </div>

              <div className="form-button">
                <button type="submit" className="login-button">
                  INGRESAR
                </button>
              </div>

              <div className="forgot-password">
                <a href="#" className="forgot-link">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
