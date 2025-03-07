import Button from "../components/Button"
export default function Subscribe() {
    return (
        <section className="flex flex-col gap-4 px-10 py-10 mt-8">
            <div className="flex flex-col gap-2 text-center">
                <h3 className="font-montserrat text-2xl font-bold">Subscribe to our <span className="text-red-500">Newsletter</span></h3>
                <p className="font-montserrat text-slate-500 text-[12px]">And never miss latest Updates!</p>
            </div>
            <div className="flex md:flex-row justify-evenly items-center gap-10 flex-col">
                <div className="flex flex-col gap-2">
                    <input type="email" placeholder="Email Address" className="py-2 px-4 rounded-md border-2 border-slate-500"/>            
                    <Button label="Subscribe" style={`font-normal text-[12px] text-white`}/>
                </div>
            </div>
        </section>
    )
}