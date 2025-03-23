import { aboutImg } from "../assets/images"

function AboutUs() {
    return (
        <section className="flex flex-col px-10 py-5 mt-2 justify-center items-center">
            <div className="flex flex-col gap-[2px] justify-center items-center">
                <h3 className="font-montserrat text-2xl font-bold">About us</h3>
                <div className="bg-red-500 h-[5px] w-[70px] rounded-full"></div>
            </div>
            <div className="mt-8 min-w-[100px] rounded-2xl overflow-hidden">
                <img src={aboutImg} alt="" />
            </div>
        </section>
    )
}

export default AboutUs