export default function serviceCard({imgURL, lable, subtext}) {
    return (
        <div className="flex flex-col flex-1 shadow-md max-w-[280px] py-5 px-8
        bg-amber-50 max-h-[280px] rounded-xl">
            <div className="bg-red-500 w-7 h-7 rounded-full flex justify-center items-center">
                <img src={imgURL} alt={lable} width={20}/>
            </div>
            <p className="font-montserrat font-bold text-[16px] text-slate-800 mt-2">{lable}</p>
            <p className="font-montserrat font-light text-[12px] text-slate-500 mt-2">{subtext}</p>
        </div>
    )
}