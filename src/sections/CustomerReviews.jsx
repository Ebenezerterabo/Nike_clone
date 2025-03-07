import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";

export default function CustomerReviews() {
    return (
        <section className="flex flex-col gap-4 bg-blue-50 px-10 py-10 mt-8">
            <div className="flex flex-col gap-2 text-center">
                <h3 className="font-montserrat text-2xl font-bold">What Our <span className="text-red-500">Customers</span> Say?</h3>
                <p className="font-montserrat text-slate-500 text-[12px]">Hear genuine stories from real people about their exceptional experiences with us</p>
            </div>
            <div className="flex md:flex-row justify-evenly items-center gap-10 flex-col">
                {reviews.map((review, index) => (
                    <div key={index}>
                        <ReviewCard {...review}/>
                    </div>
                ))}
            </div>
        </section>
    )
}