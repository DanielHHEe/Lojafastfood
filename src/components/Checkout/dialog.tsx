"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"
import { StepUser } from "@/components/Checkout/stepuser"
import { StepEndereço } from "@/components/Checkout/stependereço"
import { StepFinalizar } from "@/components/Checkout/stepfinalizar"
import { CheckoutSteps } from "@/types/checkout-steps"

type Props = {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export const CheckoutDialog = ({open, onOpenChange}: Props) => {
    const [step, setstep] = useState<CheckoutSteps>('user')
    let ProgressPct = 0
    switch(step) {
        case('user')
        : ProgressPct = 0
        break;

        case 'endereço' 
        : ProgressPct = 50
        break;


        case 'finalizar'
         : ProgressPct = 100
        break;
    }
  
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent style={{ maxWidth: '700px', height: '500px' }}>
                <DialogHeader>
                    <DialogTitle style={{ fontSize: '20px' }}>
                        {step === 'user' && 'Coloque seus dados pessoais'}
                        {step === 'endereço' && 'Coloque o endereço da entrega'}
                        {step === 'finalizar' && 'Envio para o WhatsApp'}
                    </DialogTitle>
                </DialogHeader>
                {/* Barra de progresso com fundo azul */}
                <div className="bg-red-600 h-2 rounded">
                    <div 
                        className="h-full rounded"
                        style={{ 
                            width: `${ProgressPct}%`, 
                            backgroundColor: '#12a212' // Cor da barra de progresso
                        }} 
                    />
                </div>
                <div className="flex flex-col gap-3">
                    {step === 'user' && <StepUser setStep={setstep} />}
                    {step === 'endereço' && <StepEndereço setStep={setstep} />}
                    {step === 'finalizar' && <StepFinalizar />}
                </div>
            </DialogContent>
        </Dialog>
    );
}    