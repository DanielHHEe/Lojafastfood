// É A PARTE DO SIDEBAR ONDE CLICA NO CARRINHO E ELE ABRE A ABA DE FINALIZAR A COMPRA

"use client"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "../ui/button"
import { RocketIcon, ShoppingCart } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { useCartStore } from "@/stores/cart-store"
import { CartItem } from "./item"
import { Item } from "@radix-ui/react-dropdown-menu"
import { useState } from "react"
import { CheckoutDialog } from "../Checkout/dialog"

export const  CartSideBar = () => {  
    const [checkout, setchekout] = useState(false)
    const {cart} = useCartStore(state => state)

    let subtotal = 0
    for(let item of cart) {
        subtotal+= item.quantity * item.product.price
    }
    return(
        <Sheet>
            <Sheet>
                <SheetTrigger asChild>
                    <Button className="relative">
                        <ShoppingCart className="mr-2" style={{color: '#007FFF'}}/>
                        <p style={{fontSize: '18px', fontWeight: 'bold' }}>Carrinho</p>
                        {cart.length > 0 &&
                            <div className="absolute size-4 bg-red-500 rounded-full -right-1 -top-1"></div>
                        }
                    </Button>
                </SheetTrigger>
                <SheetContent side="right">
                    <SheetHeader>
                    <SheetTitle style={{fontSize: '25px' , justifyContent: 'end'}}>Carrinho</SheetTitle>
                    </SheetHeader>

                    <div className="flex flex-col gap-5 my-3">{cart.map(item => (
                        <CartItem key={item.product.id} item={item}/>
                    ))}</div>

                    <Separator className="my-4"/>
                    
                    <div className="flex justify-between items-center text-xs">
                        <div style={{fontSize: '18px', fontWeight: 'bold' }}>Subtotal</div>
                        <div style={{fontSize: '18px'}}>R$ {subtotal.toFixed(2)}</div>
                    </div>

                    <Separator className="my-4"/>

                    <div className="text-center">
                        <Button onClick={() => setchekout(true)}
                         disabled={cart.length <= 0} 
                         style={{fontSize: '18px', fontWeight: 'bold' }}
                         >Finalizar compra</Button>
                    </div>
                    <CheckoutDialog
                    open={checkout}
                    onOpenChange={setchekout}/>

                </SheetContent>
            </Sheet>

        </Sheet>
    )
}