// É A PARTE ONDE ELE LISTA AS TABELAS ONDE TA OS SUSHIS TEMAKIS E ETC

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProductItem } from "@/Products.ts/item"
import { Mensagem } from "@/Products.ts/mensagem"
import { getAllProducts } from "@/Services/product"
import { Product } from "@/types/Products"

type Tab = {
    title: string
    value: string
    products: Product[]
}

export const Produtos = async () => {
    const products = await getAllProducts()
    const tabs: Tab[] = [
        {
            title: 'Sushis',
            value: 'sushis',
            products: products.filter(item => item.category === 'Sushis')
        },
        {
            title: 'Temakis',
            value: 'temaki',
            products: products.filter(item => item.category === 'Temakis')
        },
        {
            title: 'Combos',
            value: 'Combos',
            products: products.filter(item => item.category === 'Combos')
        },
        {
            title: 'Bebidas',
            value: 'Bebidas',
            products: products.filter(item => item.category === 'Bebidas')
        }
    ]

    return (
        <div>
            <Tabs defaultValue="sushis" className="mt-40">
                <TabsList className="flex p-2" style={{ borderRadius: '7px', height: '45px' }}>
                    {tabs.map(item => (
                        <TabsTrigger
                            key={item.value}
                            value={item.value}
                            className="flex-1"
                            style={{ fontSize: '16px' }}
                        >
                            {item.title}
                        </TabsTrigger>
                    ))}
                </TabsList>
                {tabs.map(item => (
                    <TabsContent key={item.value} value={item.value} className="mt-6">
                        {item.products.length > 0 ? (
                            <div className="grid gap-7 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                                {item.products.map(produto => (
                                    <div className="overflow-hidden" >
                                        <ProductItem key={produto.id} item={produto} />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <Mensagem />
                        )}
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    )
}
