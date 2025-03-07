import {star} from '../assets/icons'

export default function ReviewCard({imgURL, customerName, rating, feedback}) {
    return (
        <div className='flex flex-col gap-4 justify-center items-center'>
            <img src={imgURL} alt="profile-pic" 
            className='w-15 h-15 rounded-full object-cover'
            />
            <p className='font-montserrat text-slate-500 text-[12px] max-w-[250px] text-center'>{feedback}</p>
            <div className='flex gap-1'>
                <img src={star} alt="star" className='w-3'/>
                <p className='font-montserrat text-slate-500 text-[12px]'>{rating}</p>
            </div>
            <p className='font-montserrat text-[15px] font-bold'>{customerName}</p>
        </div>
    )
}