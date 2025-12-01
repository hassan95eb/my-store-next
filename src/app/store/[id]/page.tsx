import React from "react";
import NotFoundProduct from "./not-found";
interface IProdutsParams {
    params: Promise<{ id: string }>;
    searchParams: Promise<object>;
}

async function Products(props: IProdutsParams) {
    const { id } = await props.params;
    if (parseInt(id) > 100) {
        return <NotFoundProduct />;
    }
    return <div>products {id}</div>;
}

export default Products;
