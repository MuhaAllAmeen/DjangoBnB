'use client';

import { useState } from "react";
import useSearchModal, { SearchQuery } from "../hooks/useSearchModal";

const Categories = ()=>{
    const searchModal = useSearchModal()
    const [category, setCategory] = useState('')

    const _setCategory= (_category: string) =>{
        setCategory(_category)

        const query: SearchQuery = {
            country: searchModal.query.country,
            guests : searchModal.query.guests,
            bedrooms : searchModal.query.bedrooms,
            checkIn : searchModal.query.checkIn,
            checkOut : searchModal.query.checkOut,
            category : _category,
            bathrooms : searchModal.query.bathrooms,
        }
        searchModal.setQuery(query)
    }
    return(
        <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
            <div onClick={()=> _setCategory('')} className={`pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100 `}>
                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                <span className="text-xs">All</span>
            </div>
            <div onClick={()=> _setCategory('Beach')} className={`pb-4 flex flex-col items-center space-y-2 border-b-2 border-white ${category=='Beach' ? 'border-black' : 'border-white'}  opacity-60 hover:border-gray-200 hover:opacity-100 `}>
                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                <span className="text-xs">Beach</span>
            </div>
            <div onClick={()=> _setCategory('Villas')} className={`pb-4 flex flex-col items-center space-y-2 border-b-2 border-white ${category=='Villas' ? 'border-black' : 'border-white'}  opacity-60 hover:border-gray-200 hover:opacity-100 `}>
                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                <span className="text-xs">Villas</span>
            </div>
            <div onClick={()=> _setCategory('Cabins')} className={`pb-4 flex flex-col items-center space-y-2 border-b-2 border-white ${category=='Cabins' ? 'border-black' : 'border-white'}  opacity-60 hover:border-gray-200 hover:opacity-100 `}>
                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                <span className="text-xs">Cabins</span>
            </div>
            <div onClick={()=> _setCategory('Tiny House')} className={`pb-4 flex flex-col items-center space-y-2 border-b-2 border-white ${category=='Tiny House' ? 'border-black' : 'border-white'}  opacity-60 hover:border-gray-200 hover:opacity-100 `}>
                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                <span className="text-xs">Tiny House</span>
            </div>
        </div>
    )
}

export default Categories