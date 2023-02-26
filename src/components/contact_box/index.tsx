import axios from "axios";
import { useState } from "react";
import { ContactBoxStyled } from "./styled";

export default function ContactBox() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [btnMessage, setBtnMessage] = useState("Enviar mensagem");
    const sendMail = async () => {
        setBtnMessage("Enviando...");
        try {
            await axios.post("/api/contact", {
                name,
                phone,
                email,
                message,
                loading: btnMessage,
            });
            setName("");
            setPhone("");
            setEmail("");
            setMessage("");
            setBtnMessage("Sucesso!");
        } catch (err: any) {
            setBtnMessage("Erro!");
        }

        setTimeout(() => {
            setBtnMessage("Enviar mensagem");
        }, 3000);
    };
    return (
        <ContactBoxStyled>
            <input
                type="text"
                className="contact-input"
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                className="contact-input"
                placeholder="Seu telefone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <input
                type="text"
                className="contact-input"
                placeholder="Seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
                className="contact-textarea"
                placeholder="Sua mensagem"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <div className="contact-btn-send" onClick={() => sendMail()}>
                {btnMessage}
            </div>
        </ContactBoxStyled>
    );
}
