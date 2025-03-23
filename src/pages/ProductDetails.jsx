import { products } from "../constants";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {star } from '../assets/icons'

function ProductDetails() {
    const [details, setDetails] = useState(null);
    const {productId} = useParams();

    useEffect(() => {
        const product = products.find((product) => product.id === parseInt(productId));
        console.log(product);
        setDetails(product);
    }, [productId]);

    return (
        <div>
            {details && (
                <div className="flex flex-col justify-center items-center">
                    <img src={details.imgURL} alt="product collections" width={200}
                                    className='active:border-transparent active:border-5 hover:cursor-pointer'
                    />
                    <div className='flex gap-1 mt-1'>
                        <img src={star} alt="star" width={12}/>
                        <p className='font-montserrat text-[12px] text-slate-800'>{details.rating}</p>
                    </div>
                    <p className="font-montserrat font-semibold text-[13px]">{details.name}</p>
                    <p className="font-montserrat font-light text-[12px] text-red-500">{details.price}</p>
                    <p className="font-montserrat text-slate-500 text-[12px] max-w-md">{details.description}</p>
                </div>
            )}
        </div>
    )
}

export default ProductDetails
