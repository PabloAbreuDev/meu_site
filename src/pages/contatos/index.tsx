import Layout from "@/components/layout";
import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";

const Contatos: NextPageWithLayout = () => {
    return (
        <>
            Contatos
        </>
    )
}

Contatos.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}


export default Contatos