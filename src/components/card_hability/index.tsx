import { CardHabilityStyled } from "./styled";

export type CardHabilityProps = {
    icon: any;
    title: string;
    description: string
}
export default function CardHability(props: CardHabilityProps) {
    return <CardHabilityStyled>
        <div className="icon">{props.icon}</div>
        <div className="title">{props.title}</div>
        <div className="description">{props.description}</div>
    </CardHabilityStyled>
}