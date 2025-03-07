import clsx from "clsx"
export default function Button({label, style, imgURL}) {
    return (
        <button 
            type="button" 
            className={clsx(`bg-red-500 py-2 px-4 font-montserrat rounded-full 
            text-sm font-bold cursor-pointer`, style)}>
        {label} {imgURL && <img src={imgURL} alt="arrow right" className="w-4 h-4"/>}
        </button>
    )
}