// É A PARTE ONDE FICA O PRODUTO ADICIONADO AO CARRINHO PELO CLIENTE E O PREÇO E QUANTIDADE

import { Cart } from "@/types/cart";
import { CartItemQuantity } from "./item-quantity";

type Props = {
    item: Cart;
}

export const CartItem = ({ item }: Props) => {
    const preçoProduto = item.product.category === 'Sushis' || item.product.category === 'Temakis'
        ? `R$ ${item.product.price},99`
        : `R$ ${item.product.price},00`;

    return (
        <div className="flex items-center gap-5">
            <div className="flex items-center gap-5 flex-1">
                <div className="w-16 overflow-hidden">
                    <img src={item.product.image} className="w-full h-auto object-cover" />
                </div>
                
                <div className="flex-1">
                    <p style={{ fontSize: '22px' }}>{item.product.name}</p>
                    <p style={{ fontSize: '19px', opacity: '0.5' }}>{preçoProduto}</p>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <CartItemQuantity cartItem={item} />
            </div>
        </div>
    );
}
