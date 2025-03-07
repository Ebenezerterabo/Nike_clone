import { navLinks } from "../constants"
import { headerLogo } from "../assets/images"
import Button from "./Button"
export default function Nav() {
    return (
        <header className="px-5 py-5 max-sm:px-8 w-full">
            <nav className="flex justify-between items-center conatiner mx-auto">
                <img 
                    src={headerLogo} 
                    alt="header logo"
                    width={80} 
                />
                <ul className="gap-4 text-[12px] text-slate-gray font-montserrat hidden md:flex">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} className="hover:text-red-500">{link.label}</a>
                        </li>
                    ))}
                </ul>
                <Button label="Login" style={`text-white`}/>
                <button className="md:hidden block text-3xl">&#9776;</button>
            </nav>
        </header>
    )
}