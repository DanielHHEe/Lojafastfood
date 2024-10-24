import { UseCheckoutStore } from "@/stores/checkout-store"
import { Button } from "../ui/button"
import Link from "next/link"
import { generateMessage } from "@/lib/generate-message"
import { WhatsAppOutlined } from "@ant-design/icons";

export const StepFinalizar = () => {
    const { name } = UseCheckoutStore(state => state)
    const message = generateMessage()
    const linkZap = `https://wa.me//${process.env.NEXT_PUBLIC_ZAP}?text=${encodeURI(message)}`
    return(
        <div className="text-center flex flex-col gap-8">
            <p style={{fontSize: '22px'}}>Perfeito <strong>{name}</strong>!</p>
            <p style={{fontSize: '20px'}}>Agora envie seu pedido ao nosso WhatsApp para concluir. 
                Nosso atendente irá te guiar sobre o andamento do pedido</p>
            <Button style={{ backgroundColor: '#007FFF', color: 'white'}} className="mt-7">
                <Link style={{fontSize: '18px'}} target="_blank" href={linkZap}>Enviar para WhatsApp <WhatsAppOutlined  
                style={{fontSize: '20px', marginLeft: '8px'}} /></Link>
            </Button>
        </div>
    )
}