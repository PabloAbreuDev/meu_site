import ExperienceBalloon, {
    ExperienceProps,
} from "@/components/experience_balloon";
import Layout from "@/components/layout";
import { ReactElement } from "react";
import Image from "next/image";
import { NextPageWithLayout } from "../_app";
import { ExperiencesStyled } from "./styled";
import BackgroundSidebarImage from "../../../public/images/sidebar_background.jpg";

const experiences: ExperienceProps[] = [
    {
        photo: <Image src={BackgroundSidebarImage} alt={"Exemplo qualquer"} />,
        duration: "Jan 2022 - Presente",
        title: "Exemplo de Empresa",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc cursus ligula nulla, quis pretium nibh convallis quis. Pellentesque ullamcorper dolor ac porta porta. Fusce porttitor congue fringilla. Donec hendrerit lectus a eros pulvinar efficitur. Nulla facilisi. Vivamus a quam tellus. Proin dignissim porta sodales. Suspendisse tincidunt nulla ac dolor suscipit",
    },
    {
        photo: <Image src={BackgroundSidebarImage} alt={"Exemplo qualquer"} />,
        duration: "Jan 2022 - Presente",
        title: "Exemplo de Empresa",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc cursus ligula nulla, quis pretium nibh convallis quis. Pellentesque ullamcorper dolor ac porta porta. Fusce porttitor congue fringilla. Donec hendrerit lectus a eros pulvinar efficitur. Nulla facilisi. Vivamus a quam tellus. Proin dignissim porta sodales. Suspendisse tincidunt nulla ac dolor suscipit",
    },
    {
        photo: <Image src={BackgroundSidebarImage} alt={"Exemplo qualquer"} />,
        duration: "Jan 2022 - Presente",
        title: "Exemplo de Empresa",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc cursus ligula nulla, quis pretium nibh convallis quis. Pellentesque ullamcorper dolor ac porta porta. Fusce porttitor congue fringilla. Donec hendrerit lectus a eros pulvinar efficitur. Nulla facilisi. Vivamus a quam tellus. Proin dignissim porta sodales. Suspendisse tincidunt nulla ac dolor suscipit",
    },
];

const Experiencias: NextPageWithLayout = () => {
    return (
        <ExperiencesStyled>
            <h2 className="page-title">Experiencias</h2>
            <div className="experiences-balloons-area">
                {experiences.map((item, index) => (
                    <ExperienceBalloon
                        photo={item.photo}
                        duration={item.duration}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>

        </ExperiencesStyled>
    );
};

Experiencias.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};

export default Experiencias;
