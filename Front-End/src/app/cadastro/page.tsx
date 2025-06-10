"use client"
// pages/cadastro.js
import { useState } from "react";

export default function Cadastro() {
  const [showPassword, setShowPassword] = useState(false);

  // Máscara CPF
  function handleCpfChange(e) {
    let value = e.target.value.replace(/\D/g, "");

    if (value.length > 3) {
      value = value.substring(0, 3) + "." + value.substring(3);
    }
    if (value.length > 7) {
      value = value.substring(0, 7) + "." + value.substring(7);
    }
    if (value.length > 11) {
      value = value.substring(0, 11) + "-" + value.substring(11, 13);
    }

    e.target.value = value;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const cpf = e.target.cpf.value;
    if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf)) {
      alert("Por favor, insira um CPF válido no formato 000.000.000-00");
      return;
    }
    alert("Cadastro realizado com sucesso! (Simulação)");
    e.target.reset();
  }

  return (
    <>
      <style>{`
        .div-principal {
          margin: 0;
          min-height: calc(100vh - 120px);
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #f0f0f0;
          padding: 30px;
        }

        .form_container {
          width: fit-content;
          height: fit-content;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 30px;
          padding: 70px 60px 40px 60px;
          background-color: #ffffff;
          box-shadow: 0px 106px 42px rgba(0, 0, 0, 0.01),
            0px 59px 36px rgba(0, 0, 0, 0.05),
            0px 26px 26px rgba(0, 0, 0, 0.09),
            0px 7px 15px rgba(0, 0, 0, 0.1),
            0px 0px 0px rgba(0, 0, 0, 0.1);
          border-radius: 11px;
          font-family: "Inter", sans-serif;
          max-width: 700px;
          width: 100%;
          box-sizing: border-box;
        }

        .title_container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 20px;
          text-align: center;
        }

        .title {
          margin: 0;
          font-size: 1.4rem;
          font-weight: 700;
          color: #212121;
          letter-spacing: 0.03em;
        }

        .subtitle {
          font-size: 0.8rem;
          max-width: 80%;
          line-height: 1.4rem;
          color: #8b8e98;
          margin: 0;
        }

        .form_grid {
          display: flex;
          flex-wrap: wrap;
          gap: 30px;
          width: 100%;
          justify-content: space-between;
        }

        .input_col {
          flex: 1;
          min-width: 200px;
        }

        .input_container {
          width: 100%;
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 20px;
        }

        .icon {
          width: 20px;
          position: absolute;
          z-index: 99;
          left: 12px;
          bottom: 12px;
          color: #8b8e98;
        }

        .input_label {
          font-size: 0.85rem;
          color: #8b8e98;
          font-weight: 600;
          margin-left: 5px;
        }

        .input_field {
          width: 100%;
          height: 45px;
          padding: 0 0 0 45px;
          border-radius: 8px;
          outline: none;
          border: 1px solid #e5e5e5;
          filter: drop-shadow(0px 1px 0px #efefef)
            drop-shadow(0px 1px 0.5px rgba(239, 239, 239, 0.5));
          transition: all 0.3s cubic-bezier(0.15, 0.83, 0.66, 1);
          box-sizing: border-box;
          font-family: "Inter", sans-serif;
          font-size: 1rem;
        }

        .input_field:focus {
          border: 1px solid transparent;
          box-shadow: 0px 0px 0px 2px #242424;
          background-color: transparent;
        }

        .sign-up_btn {
          width: 100%;
          height: 45px;
          border: 0;
          background: #ee4d2d;
          border-radius: 8px;
          outline: none;
          color: #ffffff;
          cursor: pointer;
          font-family: "Inter", sans-serif;
          font-weight: 600;
          font-size: 1.05rem;
          transition: background-color 0.3s ease;
          margin-top: 10px;
        }

        .sign-up_btn:hover {
          background:rgb(173, 40, 13);
        }

        .password-toggle {
          position: absolute;
          right: 12px;
          bottom: 12px;
          cursor: pointer;
          color: #8b8e98;
          z-index: 100;
          font-size: 1.2rem;
          user-select: none;
        }

        .login-link {
          font-size: 0.9rem;
          color: #8b8e98;
          text-align: center;
          margin-top: 20px;
        }

        .login-link a {
          color: #115dfc;
          text-decoration: none;
          font-weight: 600;
        }

        .login-link a:hover {
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .form_grid {
            flex-direction: column;
          }

          .div-principal {
            padding: 20px;
            min-height: calc(100vh - 100px);
          }

          .form_container {
            padding: 50px 35px 30px 35px;
            max-width: 350px;
          }
        }

        @media (max-width: 480px) {
          .form_container {
            padding: 40px 25px 20px 25px;
            max-width: 300px;
          }

          .title {
            font-size: 1.2rem;
          }

          .subtitle {
            font-size: 0.75rem;
          }

          .input_field {
            height: 40px;
            padding-left: 40px;
            font-size: 0.95rem;
          }

          .sign-up_btn {
            height: 40px;
            font-size: 1rem;
          }
        }
      `}</style>

      <div className="div-principal">
        <div className="form_container">
          <div className="title_container">
            <h1 className="title">Crie sua conta</h1>
            <p className="subtitle">
              Preencha os campos abaixo para se cadastrar em nosso sistema
            </p>
          </div>

          <form id="cadastroForm" onSubmit={handleSubmit} noValidate>
            <div className="form_grid">
              <div className="input_col">
                <div className="input_container">
                  <label className="input_label" htmlFor="nome">Nome completo</label>
                  <i className="fas fa-user icon"></i>
                  <input placeholder="Digite seu nome" title="Nome completo" name="nome" type="text" className="input_field" id="nome" required />
                </div>

                <div className="input_container">
                  <label className="input_label" htmlFor="email">E-mail</label>
                  <i className="fas fa-envelope icon"></i>
                  <input placeholder="seu@email.com" title="E-mail" name="email" type="email" className="input_field" id="email" required />
                </div>



              </div>

              <div className="input_col">
                <div className="input_container">
                  <label className="input_label" htmlFor="cpf">CPF</label>
                  <i className="fas fa-id-card icon"></i>
                  <input placeholder="000.000.000-00" title="CPF" name="cpf" type="text" className="input_field" id="cpf" required pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" onInput={handleCpfChange} />
                </div>

                <div className="input_container" style={{ position: "relative" }}>
                  <label className="input_label" htmlFor="senha">Senha</label>
                  <i className="fas fa-lock icon"></i>
                  <input placeholder="Crie uma senha" title="Senha" name="senha" type={showPassword ? "text" : "password"} className="input_field" id="senha" required minLength={6} />
                  <i className={`fas password-toggle ${showPassword ? "fa-eye-slash" : "fa-eye"}`} id="toggleSenha" onClick={() => setShowPassword(!showPassword)} aria-label="Toggle senha" role="button" tabIndex={0}
                    onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setShowPassword(!showPassword); }} />
                </div>
              </div>
            </div>

            <button title="Cadastrar" type="submit" className="sign-up_btn">
              <span>Cadastrar</span>
            </button>
          </form>

          <p className="login-link">
            Já tem uma conta? <a href="#">Faça login</a>
          </p>
        </div>
      </div>
    </>
  );
}
