import React from "react"
import { navLinks } from "../constants"
import { headerLogo } from "../assets/images"
import Button from "./Button"
export default function Nav() {

    const [isOpen, setIsOpen] = React.useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    } 
    return (
        <header className="px-5 py-5 max-sm:px-8 w-full">
            <nav className="flex justify-between items-center conatiner mx-auto">
                <img 
                    src={headerLogo} 
                    alt="header logo"
                    width={80} 
                />
                
                {/* desktop and larger screens */}
                <ul className="gap-4 text-[12px] text-slate-gray font-montserrat hidden md:flex">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} className="hover:text-red-500 duration-500">{link.label}</a>
                        </li>
                    ))}
                </ul>
                <Button label="Login" style={`text-white max-md:hidden`}/>
                <div onClick={toggleMenu}>
                    <span className="md:hidden block text-3xl">
                        {
                            isOpen ? <ion-icon name="close-circle-outline"></ion-icon> :
                            <ion-icon name="menu-outline"></ion-icon>
                        }
                    </span>
                </div>
            </nav>
            {/* smaller screens */}
            {
                isOpen && (

                <ul className="md:hidden font-montserrat space-y-2
                pl-5 py-5 flex flex-col place-items-end">
                        {navLinks.map((link) => (
                            <li>
                                <a href={link.href}>{link.label}</a>
                            </li>
                        ))}
                        <Button label="Login" style={`text-white rounded-lg`}/>
                </ul>
                )
            }
        </header>
    )
}