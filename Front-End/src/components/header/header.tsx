"use client";
import Image from "next/image";
import Link from "next/link";



export function HeaderPrincipal() {
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
                                <Link href="#promocoes">Promoções</Link>
                            </li>
                            <li>
                                <Link href="/login" className="btn-login">
                                    Entrar
                                </Link>
                            </li>
                            <li>
                                <Link href="/cart" className="cart-icon">
                                    <i className="fas fa-shopping-cart"></i>
                                    <span className="cart-counter" id="cartCounter">
                                        0
                                    </span>
                                </Link>
                            </li>
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
                    <li>
                        <Link href="/login">Entrar</Link>
                    </li>
                    <li>
                        <Link href="/register">Cadastrar</Link>
                    </li>
                    <li>
                        <Link href="/cart">
                            Carrinho <span id="mobileCartCounter">0</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};