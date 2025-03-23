import {star} from '../assets/icons'

export default function ProductCard({ product}) {
    return (
        <div >
            <img src={product.imgURL} alt="product collections" width={170}
                className='active:border-transparent active:border-5 hover:cursor-pointer'
            />
            <div className='flex gap-1 mt-1'>
                <img src={star} alt="star" width={12}/>
                <p className='font-montserrat text-[12px] text-slate-800'>{product.rating}</p>
            </div>
            <p className="font-montserrat font-semibold text-[13px]">{product.name}</p>
            <p className="font-montserrat font-light text-[12px] text-red-500">{product.price}</p>
        </div>
    )
}