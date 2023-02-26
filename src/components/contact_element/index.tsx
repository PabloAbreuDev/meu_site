import Link from "next/link";
import { ContactElementStyled } from "./styled";

export type ContactElementProps = {
    icon: any;
    title: string;
    content: string;
    url: string;
}
export default function ContactElement(props: ContactElementProps) {
    return <ContactElementStyled>
        <Link href={props.url} target={"_blank"} className="clickable-contact">

            <div className="contact-icon">{props.icon}</div>
            <div className="contact-infos">
                <div className="contact-title">{props.title}</div>
                <div className="contact-content">{props.content}</div>
            </div>
        </Link>

    </ContactElementStyled>
}