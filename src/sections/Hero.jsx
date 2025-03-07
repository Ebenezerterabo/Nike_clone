import React from "react";
import { bigShoe1} from "../assets/images";
import Button from "../components/Button";
import {arrowRight} from "../assets/icons";
import { statistics, shoes } from "../constants";
import ShoeCard from "../components/ShoeCard";
export default function Hero() {
    const [bigShoeImg, setBigShoeImg] = React.useState(bigShoe1);

    return (
        <section className="px-10 py-5 mt-15 flex justify-center items-start flex-col md:flex-row w-full">
            <div className="flex flex-col mr-25 mb-10 container mx-auto">
                <p className="text-[13px] font-montserrat mb-8 text-red-500">Our summer collections</p>
                <h1 className="text-4xl font-bold font-montserrat leading-10 mb-2">The New Arrival <br /> <span className="text-red-500">Nike</span> Shoes</h1>
                <p className="text-[10px] max-w-[220px] font-montserrat text-slate-500">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
                <Button label="Shop now" style={"mt-6 max-w-[135px] flex text-white justify-center items-center gap-2"} imgURL={arrowRight}/>
                <div className="flex flex-wrap mt-10 gap-4">
                    {statistics.map((stat) => (
                        <div key={stat.label}>
                            <p className="text-[15px] font-montserrat text-black font-bold">{stat.value}</p>
                            <p className="text-[12px] font-montserrat text-slate-500">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full flex flex-col md:flex-row items-center justify-center relative">
                <img src={bigShoeImg} alt="shoe" height={700}/>
                <div className="flex flex-col gap-2 md:flex-row mt-5 md:mt-0 md:absolute md:-bottom-30 justify-center items-center">
                    {shoes.map((shoeImg, index) => (
                        <div key={index}>
                            <ShoeCard imgURL={shoeImg} bigShoeImg={bigShoeImg} setImg={setBigShoeImg}/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}