"use client"
import "./cadastro.css"
// pages/cadastro.js
import { useState } from "react";

export default function Cadastro() {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMessage(""); // Limpa mensagens de erro anteriores
    setIsLoading(true);

    const cpf = e.target.cpf.value;
    if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf)) {
      setErrorMessage("Por favor, insira um CPF válido no formato 000.000.000-00");
      setIsLoading(false);
      return;
    } 

    const nome = e.target.nome.value;
    const email = e.target.email.value;
    const senha = e.target.senha.value;

    try {
      const response = await fetch("http://127.0.0.1:8080/cadastro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: nome,
          email: email,
          cpf: cpf,
          senha: senha,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Sucesso - código 200
        alert("Cadastro realizado com sucesso!");
        e.target.reset();
        setErrorMessage("");
      } else {
        // Erro - código 400 ou outros
        setErrorMessage(data.msg, data.code);
      }
    } catch (error) {
      // Erro de conexão ou outros erros
      setErrorMessage("Erro de conexão. Tente novamente mais tarde.");
    } finally {
      setIsLoading(false);
    }
  }

  // Função para personalizar mensagens de erro
  function getErrorMessage(msg, code) {
    const errorMessages = {
      "email_already_exists": "Este e-mail já está cadastrado. Tente fazer login ou use outro e-mail.",
      "cpf_already_exists": "Este CPF já está cadastrado no sistema.",
      "invalid_email": "Por favor, insira um e-mail válido.",
      "invalid_cpf": "CPF inválido. Verifique os dados digitados.",
      "weak_password": "A senha deve ter pelo menos 6 caracteres.",
      "missing_fields": "Todos os campos são obrigatórios.",
      "server_error": "Erro interno do servidor. Tente novamente em alguns minutos.",
      "invalid_name": "Nome deve conter apenas letras e espaços.",
    };

    // Retorna mensagem personalizada se existir, senão retorna a mensagem original do backend
    return errorMessages[msg] || msg || "Erro desconhecido. Tente novamente.";
  }

  return (
    <>
      <div className="div-principal">
        <div className="form_container">
          <div className="title_container">
            <h1 className="title">Crie sua conta</h1>
            <p className="subtitle">
              Preencha os campos abaixo para se cadastrar em nosso sistema
            </p>
          </div>

          {errorMessage && (
            <div className="error_container">
              <i className="fas fa-exclamation-triangle error_icon"></i>
              <span className="error_message">{errorMessage}</span>
            </div>
          )}

          <form id="cadastroForm" onSubmit={handleSubmit} noValidate>
            <div className="form_grid">
              <div className="input_col">
                <div className="input_container">
                  <label className="input_label" htmlFor="nome">Nome completo</label>
                  <i className="fas fa-user icon"></i>
                  <input 
                    placeholder="Digite seu nome" 
                    title="Nome completo" 
                    name="nome" 
                    type="text" 
                    className="input_field" 
                    id="nome" 
                    required 
                    disabled={isLoading}
                  />
                </div>

                <div className="input_container">
                  <label className="input_label" htmlFor="email">E-mail</label>
                  <i className="fas fa-envelope icon"></i>
                  <input 
                    placeholder="seu@email.com" 
                    title="E-mail" 
                    name="email" 
                    type="email" 
                    className="input_field" 
                    id="email" 
                    required 
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div className="input_col">
                <div className="input_container">
                  <label className="input_label" htmlFor="cpf">CPF</label>
                  <i className="fas fa-id-card icon"></i>
                  <input 
                    placeholder="000.000.000-00" 
                    title="CPF" 
                    name="cpf" 
                    type="text" 
                    className="input_field" 
                    id="cpf" 
                    required 
                    pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" 
                    onInput={handleCpfChange}
                    disabled={isLoading}
                  />
                </div>

                <div className="input_container" style={{ position: "relative" }}>
                  <label className="input_label" htmlFor="senha">Senha</label>
                  <i className="fas fa-lock icon"></i>
                  <input 
                    placeholder="Crie uma senha" 
                    title="Senha" 
                    name="senha" 
                    type={showPassword ? "text" : "password"} 
                    className="input_field" 
                    id="senha" 
                    required 
                    minLength={6}
                    disabled={isLoading}
                  />
                  <i 
                    className={`fas password-toggle ${showPassword ? "fa-eye-slash" : "fa-eye"}`} 
                    id="toggleSenha" 
                    onClick={() => setShowPassword(!showPassword)} 
                    aria-label="Toggle senha" 
                    role="button" 
                    tabIndex={0}
                    onKeyDown={(e) => { 
                      if (e.key === "Enter" || e.key === " ") setShowPassword(!showPassword); 
                    }} 
                  />
                </div>
              </div>
            </div>

            <button 
              title="Cadastrar" 
              type="submit" 
              className="sign-up_btn" 
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i>
                  <span style={{ marginLeft: '8px' }}>Cadastrando...</span>
                </>
              ) : (
                <span>Cadastrar</span>
              )}
            </button>
          </form>

          <p className="login-link">
            Já tem uma conta? <a href="login">Faça login</a>
          </p>
        </div>
      </div>
    </>
  );
}