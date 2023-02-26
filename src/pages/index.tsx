import CardHability, { CardHabilityProps } from "@/components/card_hability";
import Layout from "@/components/layout";
import { ReactElement } from "react";
import { HomeStyled } from "./styled";
import { NextPageWithLayout } from "./_app";
import { DiNodejsSmall, DiReact, DiMongodb } from "react-icons/di";
import { SiExpress, SiNextdotjs } from 'react-icons/si'

const habilities: CardHabilityProps[] = [
  {
    icon: <DiNodejsSmall />,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    title: "Node JS",
  },
  {
    icon: <DiReact />,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    title: "React JS",
  },
  {
    icon: <DiMongodb />,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    title: "MongoDB",
  },
  {
    icon: <SiExpress />,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    title: "Express JS",
  }, {
    icon: <SiNextdotjs />,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    title: "Next JS",
  },
];

const Home: NextPageWithLayout = () => {
  return (
    <HomeStyled>
      <div className="presentation">
        <h1>
          Olá, me chamo <span className="my-name">Pablo Abreu,</span> sou
          Desenvolvedor Fullstack
        </h1>
        <div className="resume">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            quasi deleniti libero autem, illo, totam labore sit magnam explicabo
            vel atque aliquam recusandae consectetur ipsum soluta, deserunt
            saepe veritatis architecto?
          </p>
        </div>
        <div className="curriculum-button">baixar currículo</div>
      </div>

      <div className="habilities">
        <h2>Habilidades</h2>
        <div className="hability-cards-area">
          {habilities.map((item, index) => (
            <CardHability
              key={index}
              title={item.title}
              icon={item.icon}
              description={item.description}
            />
          ))}

        </div>
      </div>
    </HomeStyled>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
