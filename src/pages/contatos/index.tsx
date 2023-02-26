import ContactElement, {
    ContactElementProps,
} from "@/components/contact_element";
import Layout from "@/components/layout";
import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import { ContatosStyled } from "./styled";
import { MdAlternateEmail } from "react-icons/md";
import { BsPhone } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import ContactBox from "@/components/contact_box";

const contacts: ContactElementProps[] = [
    {
        icon: <MdAlternateEmail size={35} />,
        title: "Endereço de email",
        content: "pabloabreudev@gmail.com",
        url: "mailto:pabloabreudev@gmail.com"
    },
    {
        icon: <BsPhone size={35} />,
        title: "Whatsapp e Telegram",
        content: "(+55) 98 98125-3423",
        url: "https://api.whatsapp.com/send?phone=5598981253423"
    },
    {
        icon: <FaLinkedinIn size={35} />,
        title: "Linkedin",
        content: "pabloabreudev95",
        url: "https://www.linkedin.com/in/pablodev95/"
    },
];

const Contatos: NextPageWithLayout = () => {
    return (
        <ContatosStyled>
            <h2 className="page-title">Contatos</h2>
            <div className="contatos-box">
                <div className="contatos-left">
                    <p>
                        Aqui algumas informações para você entrar em contato comigoAqui
                        algumas informações para você entrar em contato comigoAqui algumas
                        informações para você entrar{" "}
                    </p>

                    <div className="contatos-group">
                        {contacts.map((item, index) => (
                            <ContactElement
                                key={index}
                                icon={item.icon}
                                title={item.title}
                                content={item.content}
                                url={item.url}
                            />
                        ))}
                    </div>
                </div>
                <div className="contatos-right">
                    <ContactBox />
                </div>
            </div>
        </ContatosStyled>
    );
};

Contatos.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};

export default Contatos;
