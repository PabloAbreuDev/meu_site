import { ExperienceBalloonStyled } from "./styled";

export type ExperienceProps = {
    photo: any;
    duration: string;
    title: string;
    description: string;

};
export default function ExperienceBalloon(props: ExperienceProps) {
    return (
        <ExperienceBalloonStyled>
            <div className="experience-photo">{props.photo}</div>
            <div className="experience-content">
                <p className="experience-duration">{props.duration}</p>
                <p className="experience-title">{props.title}</p>
                <p className="experience-description">{props.description}</p>
            </div>
        </ExperienceBalloonStyled>
    );
}
