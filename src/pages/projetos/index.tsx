import Layout from "@/components/layout";
import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";

const Projetos: NextPageWithLayout = () => {
    return (
        <>
            <h2 className="page-title">Projetos</h2>
        </>
    )
}

Projetos.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}


export default Projetos