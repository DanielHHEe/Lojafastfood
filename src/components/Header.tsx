import { CartSideBar } from "@/components/cart/sidebar"
import { Logo } from "./logo"
import { ThemeTogle } from "@/components/theme-togle"

export const Header = () => {
    return(
        <header className="flex justify-between items-center my-5 mx-3">
            <div className="flex items-center gap-3">
               
                <ThemeTogle/>

            </div>

            <div className="flex items-center gap-3">
                <CartSideBar/>
            </div>
        </header>
    )
}