import { LayoutStyled } from "./styled";
import BackgroundSidebarImage from "../../../public/images/sidebar_background.jpg";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { BsBriefcaseFill, BsCode, BsHouseDoor } from "react-icons/bs";
import { FaMediumM, FaLinkedinIn } from "react-icons/fa";
import Link from 'next/link'

export default function Layout({ children }: { children: React.ReactElement }) {
    return (
        <LayoutStyled backgroundImage={BackgroundSidebarImage}>
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
                            <a href="https://www.linkedin.com/in/pablodev95/" target={"_blank"}>
                                <i>
                                    <FaLinkedinIn />
                                </i>
                                Linkedin
                            </a>

                        </div>
                        <div className="item-list">
                            <a href="https://github.com/PabloAbreuDev" target={"_blank"}>
                                <i>
                                    <FiGithub />
                                </i>
                                Github
                            </a>
                        </div>
                        <div className="item-list">
                            <a href="https://medium.com/@pabloabreudev" target={"_blank"}>
                                <i>
                                    <FaMediumM />
                                </i>
                                Medium
                            </a>
                        </div>
                    </nav>
                </div>
            </header>
            <div className="content">{children}</div>
        </LayoutStyled>
    );
}
