import Layout from "@/components/layout";
import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";

const Experiencias: NextPageWithLayout = () => {
    return (
        <>
            Experiencias
        </>
    )
}

Experiencias.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}


export default Experiencias