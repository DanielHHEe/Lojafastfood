//ESSA PARTE É A LOGICA DO TOAST DEPOIS QUE O CARRINHO TIVER ADICIONADO, E DO NOME E DO PREÇO DO PRODUTO NA ABA PRINCIPAL

"use client";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/Products";
import { ShoppingCart } from "lucide-react";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";
import { useCartStore } from "@/stores/cart-store";

type Props = {
    item: Product;
}

export const ProductItem = ({ item }: Props) => {
    const { toast } = useToast();
    const { upsertCartItem } = useCartStore(state => state);

    const handleAddButton = () => {
        upsertCartItem(item, 1);
        toast({
            description: (
                <span style={{ fontSize: '20px' }}>
                    {`${item.name} Adicionado ao carrinho`}
                </span>
            ),
            action: (
                <ToastAction altText="Fechar" style={{ fontSize: '18px' }}>
                    Fechar
                </ToastAction>
            )
        });
    };

    const preçoProduto = item.category === 'Sushis' || item.category === 'Temakis'
    ? `R$ ${item.price},99`
    : `R$ ${item.price},00`;


    return (
        <div>
            <div className="rounded-md overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-52 object-cover" />
            </div>
            <div className="mt-3 flex flex-col gap-2">
                <p style={{ fontSize: '18px', marginTop: '7px' }}>{item.name}</p>
                <p style={{ fontSize: '20px', opacity: '50' }}>{preçoProduto}</p>
                <Button className="flex items-center mt-4 w-full" variant='outline' onClick={handleAddButton} style={{ padding: '10px' }}>
                    <ShoppingCart className="mr-2" style={{color: '#007FFF'}} />
                    <p style={{ fontSize: '18px', fontWeight: 'bold', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                         carrinho
                    </p>
                </Button>
            </div>
        </div>
    );
};