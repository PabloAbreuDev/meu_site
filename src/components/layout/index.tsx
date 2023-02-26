import { LayoutStyled } from "./styled";
import BackgroundSidebarImage from "../../../public/images/sidebar_background.jpg";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsBriefcaseFill, BsCode, BsHouseDoor } from "react-icons/bs";
import { FaMediumM, FaLinkedinIn } from "react-icons/fa";
import Link from 'next/link'
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactElement }) {
    const [isNavExpanded, setIsNavExpanded] = useState<boolean>(false)
    return (
        <LayoutStyled backgroundImage={BackgroundSidebarImage} expanded={isNavExpanded} >
            <header className="sidebar">
                <div className="sidebar-content">
                    <div className="photo-area">
                        <Image
                            src="/images/profile.jpg"
                            alt={"Minha foto de perfil"}
                            width="130"
                            height="130"
                        />
                        <h3>Pablo Abreu</h3>
                    </div>
                    <nav className="menu-area">
                        <div className="item-list">
                            <Link href="/">
                                <i>
                                    <BsHouseDoor />
                                </i>
                                Home
                            </Link>
                        </div>
                        <div className="item-list">
                            <Link href="/experiencias">
                                <i>
                                    <BsBriefcaseFill />
                                </i>
                                Experiências
                            </Link>
                        </div>
                        <div className="item-list">
                            <Link href="/projetos">
                                <i>
                                    <BsCode />
                                </i>
                                Projetos
                            </Link>
                        </div>
                        <div className="item-list">
                            <Link href="/contatos">
                                <i>
                                    <AiOutlineMail />
                                </i>
                                Contatos
                            </Link>
                        </div>
                        <div className="spacer"></div>
                        <div className="item-list">
                            <Link href="https://www.linkedin.com/in/pablodev95/" target={"_blank"}>
                                <i>
                                    <FaLinkedinIn />
                                </i>
                                Linkedin
                            </Link>

                        </div>
                        <div className="item-list">
                            <Link href="https://github.com/PabloAbreuDev" target={"_blank"}>
                                <i>
                                    <FiGithub />
                                </i>
                                Github
                            </Link>
                        </div>
                        <div className="item-list">
                            <Link href="https://medium.com/@pabloabreudev" target={"_blank"}>
                                <i>
                                    <FaMediumM />
                                </i>
                                Medium
                            </Link>
                        </div>
                    </nav>
                </div>
            </header>
            <div className="narbar-top">
                <Link href="/" className="brand-name">
                    Pablo<span style={{ color: "#4E4E94" }}> Abreu</span>
                </Link>
                <div className="hamburger" onClick={() => setIsNavExpanded(!isNavExpanded)}>
                    <GiHamburgerMenu />
                </div>
                <nav className="navigation-menu expanded">
                    <ul>
                        <li>
                            <Link href="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/experiencias">
                                Experiências
                            </Link>
                        </li>
                        <li>
                            <Link href="/projetos">
                                Projetos
                            </Link>
                        </li>
                        <li>
                            <Link href="/contatos">
                                Contatos
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.linkedin.com/in/pablodev95/" target={"_blank"}>
                                Linkedin
                            </Link>
                        </li>
                        <li>
                            <Link href="https://github.com/PabloAbreuDev" target={"_blank"}>
                                Github
                            </Link>
                        </li>
                        <li>
                            <Link href="https://medium.com/@pabloabreudev" target={"_blank"}>
                                Medium
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="content">{children}</div>
        </LayoutStyled >
    );
}
