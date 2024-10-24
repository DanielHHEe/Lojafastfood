import { useCartStore } from "@/stores/cart-store"
import { Cart } from "@/types/cart"
import { Button } from "../ui/button"
import { MinusIcon, PlusIcon } from "lucide-react"
import { useState } from "react"

type Props = {
    cartItem: Cart
}

export const CartItemQuantity = ({ cartItem }: Props) => {
    const { upsertCartItem } = useCartStore(state => state)

    const handlePlusButton = () => {
        upsertCartItem(cartItem.product, +1)
    }

    const handleMinusButton = () => {
        if (cartItem.quantity > 1) { // Evita que a quantidade fique negativa
            upsertCartItem(cartItem.product, -1)
        }
    }

    return (
        <div className="flex items-center gap-3">
            <Button onClick={handlePlusButton} variant='ghost' size='icon' className="size-2">
                <PlusIcon className="size-2" />
            </Button>
            <div style={{ fontSize: '20px' }}>{cartItem.quantity}</div>
            <Button onClick={handleMinusButton} variant='ghost' size='icon' className="size-2">
                <MinusIcon className="size-2" />
            </Button>
        </div>
    )
}
