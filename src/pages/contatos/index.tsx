import Layout from "@/components/layout";
import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";

const Contatos: NextPageWithLayout = () => {
    return (
        <>
            <h2 className="page-title">Contatos</h2>
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