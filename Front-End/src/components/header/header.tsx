"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { FaUserCircle } from "react-icons/fa";

export function HeaderPrincipal() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = Cookies.get("tokenAuth");
        console.log("rfrf4rfefehh")
        setIsAuthenticated(!!token);
    }, []);

    return (
        <>
            <header>
                <div className="container">
                    <div className="logo">
                        <Image
                            src={"/logo_ifood2.png"}
                            alt="Logo FoodHub"
                            width={60}
                            height={10}
                        />
                        <h1>
                            <span className="brand-name">Food Hub</span>
                        </h1>
                    </div>

                    <nav className="desktop-menu">
                        <ul>
                            <li>
                                <Link href="/">Início</Link>
                            </li>
                            <li>
                                <Link href="/categorias">Categorias</Link>
                            </li>
                            <li>
                                <Link href="/promocao">Promoções</Link>
                            </li>

                            {isAuthenticated ? (
                                <li className="perfil-dropdown">
                                    <FaUserCircle size={24} />
                                    <ul className="perfil-menu">
                                        <li><Link href="/perfil">Meu Perfil</Link></li>
                                        <li><Link href="/pedidos">Meus Pedidos</Link></li>
                                        <li><button onClick={() => {
                                            Cookies.remove("tokenAuth");
                                            window.location.reload();
                                        }}>Sair</button></li>
                                    </ul>
                                </li>
                            ) : (
                                <>
                                    <li>
                                        <Link href="/login" className="btn-login">
                                            Entrar
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/cadastro" className="btn-login">
                                            Cadastro
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </nav>

                    <div className="mobile-menu-icon">
                        <i className="fas fa-bars"></i>
                    </div>
                </div>
            </header>

            <div className="mobile-menu">
                <ul>
                    <li>
                        <Link href="/">Início</Link>
                    </li>
                    <li>
                        <Link href="#categorias">Categorias</Link>
                    </li>
                    <li>
                        <Link href="#promocoes">Promoções</Link>
                    </li>
                    {isAuthenticated ? (
                        <>
                            <li><Link href="/perfil">Meu Perfil</Link></li>
                            <li><Link href="/pedidos">Meus Pedidos</Link></li>
                            <li><button onClick={() => {
                                Cookies.remove("tokenAuth");
                                window.location.reload();
                            }}>Sair</button></li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link href="/login">Entrar</Link>
                            </li>
                            <li>
                                <Link href="/register">Cadastrar</Link>
                            </li>
                        </>
                    )}
                    <li>
                        <Link href="/cart">
                            Carrinho <span id="mobileCartCounter">0</span>
                        </Link>
                    </li>
                </ul>
            </div>

            <style jsx>{`
                .perfil-dropdown {
                    position: relative;
                    cursor: pointer;
                }

                .perfil-menu {
                    display: none;
                    position: absolute;
                    top: 30px;
                    right: 0;
                    background-color: white;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                    border-radius: 8px;
                    padding: 10px;
                    z-index: 10;
                }

                .perfil-dropdown:hover .perfil-menu {
                    display: block;
                }

                .perfil-menu li {
                    margin: 5px 0;
                }

                .perfil-menu li button {
                    background: none;
                    border: none;
                    cursor: pointer;
                    color: #000;
                    padding: 0;
                }
            `}</style>
        </>
    );
}
