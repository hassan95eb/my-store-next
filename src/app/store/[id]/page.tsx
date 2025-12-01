import React from "react";
import NotFoundProduct from "./not-found";
import { Metadata } from "next";
interface IProdutsParams {
    params: Promise<{ id: string }>;
    searchParams: Promise<object>;
}
export const metadata: Metadata = {
    title: "store page 1",
    description: "this is  description",
};
async function Products(props: IProdutsParams) {
    const { id } = await props.params;
    if (parseInt(id) > 100) {
        return <NotFoundProduct />;
    }
    return <div>products {id}</div>;
}

export default Products;
