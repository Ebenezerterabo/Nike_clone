import { offer } from "../assets/images"
import Button from "../components/Button"

export default function SpecialOffer() {
    return (
        <section className="flex flex-col md:flex-row max-sm:px-8 items-center
        px-15 py-5 gap-8">
            <div>
                <img src={offer} alt="offer image" 
                width={350}
                className="object-contain"
                />
            </div>
            <div className="flex flex-col gap-4 max-w-[300px]">
                <h3 className="font-montserrat text-2xl font-bold"><span className="text-red-500">Special</span> Offer</h3>
                <p className="font-montserrat text-slate-500 text-[12px]">
                    Embark on a shopping journey that redefines your experience with unbeatable deals. 
                    From premier selections to incredible savings, we offer unparalleled value that sets us apart.
                </p>
                <p className="font-montserrat text-slate-500 text-[12px]">
                    Navigate a realm of possibilities designed to fulfill your unique desires, 
                    surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.
                </p>
                <div className="flex gap-4">
                    <Button label="View details" style={`font-normal text-[12px] text-white`}/>
                    <Button label="Learn more" style={`font-normal text-[12px] bg-transparent text-slate-500 border-1 border-slate-500`}/>
                </div>
            </div>
        </section>
    )
}