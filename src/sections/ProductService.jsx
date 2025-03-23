import ProductCard from '../components/ProductCard'
import {products} from '../constants'
import { Link } from 'react-router'
import { useParams } from 'react-router'
export default function ProductService() {
    const {productId} = useParams();
    return (
        <section className='container mx-auto mt-10 md:mt-35 px-10 py-5'>
            <div className='max-w-[300px]'>
                <p className='font-montserrat font-bold text-2xl pb-2'>Our <span className='text-red-500'>Popular</span> Products</p>
                <p className='text-slate-500 text-[11px] pb-8'>Experience top-notch quality and style with our sought after
                    selections. Discover a world of comfort, design and value
                </p>                
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 w-fit gap-4'>
                {products.map((product, index) => (
                    <div key={index}>
                        <Link to={`products/${product.id}`}><ProductCard product={product}/></Link>
                    </div>
                ))}
            </div>
        </section>
    )
}