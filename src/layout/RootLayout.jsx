import Nav from '../components/Nav';
import Footer from '../sections/Footer';
import { Outlet } from "react-router";

function RootLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <header>
                <Nav />
            </header>

            <main className='flex-grow'>
                <Outlet />
            </main>

            <section className="bg-black">
                <Footer />
            </section>
        </div>
    )
}

export default RootLayout