import ProductCard from "../components/ProductCard"
import { productList } from "../constants"

function Products() {
    return (
        <section className="flex justify-center items-center flex-col gap-8">
            <div className="flex flex-col gap-[2px] justify-center items-center">
                <h3 className="font-montserrat text-2xl font-bold">Explore Our Products</h3>
                <div className="bg-red-500 h-[5px] w-[70px] rounded-full"></div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 sm:grid-cols-3 w-fit gap-4 mb-5">
                {
                    productList.map((product, index) => (
                        <div key={index}>
                            <ProductCard product={product}/>
                        </div>
                    ))
                    
                }

            </div>
        </section>
    )
}

export default Products