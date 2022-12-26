import "../Signup/styles.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Signup = () => {
  const [login, setLogin] = useState("");
  const [loginConf, setLoginConf] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const regexSpecialSymbols = /^(\d|\w)+$/;

  const { signup } = useAuth();

  const handleSignup = () => {
    if (!login | !loginConf | !password) {
      setError("Preencha todos os campos");
      return;
    } else if (login !== loginConf) {
      setError("Os usuários não são iguais");
      return;
    } else if (!regexSpecialSymbols.test(login)) {
      setError("Seu login não pode conter (.-_) ou espaços em branco");
      return;
    } else if (!regexSpecialSymbols.test(password)) {
      setError("Sua senha não pode conter (.-_) ou espaços em branco");
      return;
    }

    const res = signup(login, password);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadatrado com sucesso!");
    navigate("/");
  };

  return (
    <div className="container">
      <div className="container-signup">
        <div className="wrap-signup">
          <div className="signup-form">
            <span className="signup-form-title">Sign up</span>
            <span className="signup-form-title">
              <img
                src="https://vendemmia.com.br/wp-content/uploads/2022/03/Grupo-29.png"
                alt="vendemmia-logo"
              />
            </span>
            <div className="signup-wrap-input">
              <input
                className={login !== "" ? "has-val input" : "input"}
                type="text"
                value={login}
                onChange={(e) => [setLogin(e.target.value), setError("")]}
              />
              <span
                className="focus-input"
                data-placeholder="Digite seu login"
              ></span>
            </div>
            <div className="signup-wrap-input">
              <input
                className={login !== "" ? "has-val input" : "input"}
                type="text"
                value={loginConf}
                onChange={(e) => [setLoginConf(e.target.value), setError("")]}
              />
              <span
                className="focus-input"
                data-placeholder="Confirme seu login"
              ></span>
            </div>
            <div className="wrap-input">
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                value={password}
                onChange={(e) => [setPassword(e.target.value), setError("")]}
              />
              <span
                className="focus-input"
                data-placeholder="Digite sua senha"
              ></span>
            </div>
            <div className="error-text">{error}</div>
            <div className="container-signup-form-btn">
              <button className="login-form-btn" onClick={handleSignup}>
                inscreva-se
              </button>
            </div>
            <span className="txt1">
              Já tem uma conta?
              <strong>
                <Link to="/" className="txt2">
                  Entre
                </Link>
              </strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
