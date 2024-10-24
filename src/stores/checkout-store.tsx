import { create } from "zustand";

type States = {
    name: string 
    endereço: {
        Rua: string 
        Número: string
        Complemento?: string | undefined
        Bairro: string
        Estado: string
        Cidade: string

    }
}

type Actions = {
    setName: (name: States["name"]) => void
    setendereço: (endereço: States["endereço"]) => void
}

const initialState: States = {
    name: '',
    endereço: {
        Rua: '', 
        Número: '',
        Complemento: '',
        Bairro: '',
        Cidade: '',
        Estado: ''
    }
}
export const UseCheckoutStore = create<States & Actions> (set => ({
    ...initialState,
    setName: (name) => set(state => ({...state, name})),
    setendereço: (endereço) => set(state => ({...state, endereço}))
}))