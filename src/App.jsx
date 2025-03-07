import Nav from './components/Nav';
import Hero from './sections/Hero';
import ProductService from './sections/ProductService';
import ProductQuality from './sections/ProductQuality';
import Services from './sections/Services';
import SpecialOffer from './sections/SpecialOffer';
import CustomerReviews from './sections/CustomerReviews';
import Subscribe from './sections/Subscribe';
import Footer from './sections/Footer';

function App() {
  return (
    <main>
      <Nav />
      <section className="container mx-auto max-sm:px-8">
        <Hero />
      </section>
      <section className='w-full'>
        <ProductService />
      </section>
      <section>
        <ProductQuality />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <SpecialOffer />
      </section>
      <section>
        <CustomerReviews />
      </section>
      <section>
        <Subscribe />
      </section>
      <section className="bg-black">
        <Footer />
      </section>
    </main>
  )
}

export default App;