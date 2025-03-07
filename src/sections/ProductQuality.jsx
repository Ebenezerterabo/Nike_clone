import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { shoe8 } from '../assets/images'
export default function ProductQuality() {
    return (
        <section className="pt-8 px-10 flex flex-col align-center gap-15 md:gap-25 md:flex-row container mx-auto">
            <div className="flex flex-col gap-2">
                <h3 className="font-montserrat text-2xl font-bold max-w-[300px]">We Provide You <span className="text-red-500">Super Quality</span> Shoes</h3>
                <p className="font-montserrat text-slate-500 text-[12px] max-w-sm">
                    Ensuring premium comfort and style, our meticlously crafted footwear is designed
                    to elevate your experience, providing you with unmatched quality, innovation and,
                    a touch of elegance
                </p >
                <p className="font-montserrat text-slate-500 text-[12px] max-w-sm">
                    Our dedication to details and excellence ensures your satisfaction
                </p>
                <Button label="View details" imgURL={arrowRight} style={`flex gap-2 text-white max-w-[150px] mt-5`}/>
            </div>

            <div className='ml-15'>
                <img src={shoe8} alt="quality shoe" width={380}/>
            </div>
        </section>
    )
}