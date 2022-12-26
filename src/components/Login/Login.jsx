import React, { useState } from "react";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!login | !password) {
      setError("Preencha todos os campos");
      alert("Preencha todos os campos");
      return;
    }

    const res = signin(login, password);

    if (res) {
      setError(res);
      return;
    }
    navigate("/table");
  };

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">Bem vindo</span>
            <span className="login-form-title">
              <img
                src="https://vendemmia.com.br/wp-content/uploads/2022/03/Grupo-29.png"
                alt="vendemmia-logo"
              />
            </span>
            <div className="wrap-input">
              <input
                className={login !== "" ? "has-val input" : "input"}
                type="text"
                value={login}
                onChange={(e) => [setLogin(e.target.value), setError("")]}
              />
              <span className="focus-input" data-placeholder="Login"></span>
            </div>
            <div className="wrap-input">
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                value={password}
                onChange={(e) => [setPassword(e.target.value), setError("")]}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>
            <div className="container-login-form-btn">
              <button
                Text="login"
                className="login-form-btn"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
            <div className="text-center">
              <span className="txt1">Não consegue logar?</span>
              <Link to="/signup" className="txt2">
                <strong>Clique aqui</strong>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
