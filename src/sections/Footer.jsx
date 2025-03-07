import { footerLogo } from "../assets/images"
import { socialHandles } from "../constants"
import { copyrightSign } from "../assets/icons"

export default function Footer() {
    return (
        <footer>
            <section className="container mx-auto flex flex-col justify-between md:flex-row pb-5
            border-b-1  border-slate-300">
                <div className="pt-5 px-5">
                    <img src={footerLogo} 
                    alt="footer logo"
                    width={80}
                    className="mb-2"
                    />
                    <p className="font-montserrat text-[12px] text-slate-300 max-w-[300px]">
                        Get shoe ready for new term at your nearest Nike store.
                        Find your perfect size in store and reward
                    </p>
                    <div className="flex gap-2">
                        {socialHandles.map((social, index) => (
                            <div key={index} className="bg-white mt-2 rounded-full p-1">
                                <img src={social} alt="social media"  width={20} height={20}/>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-white px-5 mt-5">
                    <h3>Get in touch</h3>
                    <p className="text-slate-300">teraboebenezer@gmail.com</p>
                    <p className="text-slate-300">+233 0554 828 065 </p>
                </div>
            </section>
            <div className="flex align-center justify-center mt-2 pb-2">
                <img src={copyrightSign} alt="copyright" width={12} height={12}/>
                <p className="ml-2 text-slate-300">Jeybenz technologies</p>
            </div>
        </footer>
    )
}