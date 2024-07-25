import { create } from "zustand";

export type SearchQuery = {
    country: string | undefined
    checkIn: Date | undefined
    checkOut: Date | undefined
    guests: number
    bathrooms: number
    bedrooms: number
    category: string
}
interface SearchModalStore{
    isOPen: boolean;
    open: (step: string)=> void;
    close: ()=>void;
    query: SearchQuery
    setQuery: (query: SearchQuery)=> void
    step: string
}

const useSearchModal = create<SearchModalStore>((set)=>({
    isOPen: false, 
    open: (step)=> set({isOPen: true, step: step}),
    close: ()=> set({isOPen:false}),
    setQuery: (query: SearchQuery) => set({query:query}),
    step:'',
    query: {
        country: '',
        checkIn: undefined,
        checkOut: undefined,
        guests:1,
        bedrooms: 0,
        bathrooms: 0,
        category: ''
    }
}));

export default useSearchModal;