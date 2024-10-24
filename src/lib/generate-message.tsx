import { useCartStore } from "@/stores/cart-store"
import { UseCheckoutStore } from "@/stores/checkout-store"

export const generateMessage = () => {
    
    const {name, endereço} = UseCheckoutStore(state => state)

    const { cart} = useCartStore(state => state);

    let orderProduct = [];
    for(let item of cart) {
        orderProduct.push(`${item.quantity} x ${item.product.name}`)
    }

    return `Dados do cliente :
Nome : ${name} 
Endereço: ${endereço.Rua}  ${endereço.Número} ${endereço.Complemento}
${endereço.Bairro} ${endereço.Cidade} ${endereço.Estado }
-------------
Pedido :
${orderProduct.join("\n")}`

}