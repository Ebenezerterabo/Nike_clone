
export default function ShoeCard({imgURL, bigShoeImg, setImg}) {
    const handleClick = () => {
        if (bigShoeImg !== imgURL.bigShoe) {
            setImg(imgURL.bigShoe);
        }
    }
    return (
        <div className={`rounded-lg p-2 bg-cover bg-bgImage
        ${bigShoeImg === imgURL.bigShoe ? "border-2 border-red-500"
            : "border-transparent"
        }`} onClick={handleClick}>
            <img src={imgURL.thumnail} 
                 alt="shoe collection" 
                 className="w-24 h-24 object-contain"
            />
        </div>
    )
}