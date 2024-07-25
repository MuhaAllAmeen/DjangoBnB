'use client';

import useSearchModal, { SearchQuery } from "@/app/hooks/useSearchModal"
import Modal from "./Modal"
import SelectCountry, { SelectCountryValue } from "../forms/SelectCountry";
import { useState } from "react";
import CustomButton from "../forms/CustomButton";
import { Range } from "react-date-range";
import DatePicker from "../forms/Calendar";

const intialDateRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
}

const SearchModal = () =>{
    let content = (<></>)
    const searchModal = useSearchModal()
    const [country, setCountry] = useState<SelectCountryValue>()
    const [dateRange, setDateRange] = useState<Range>(intialDateRange)
    const [numGuest,setNumGuests] = useState<string>('1')
    const [numBedroom,setNumBedrooms] = useState<string>('0')
    const [numBathrooms,setNumBathrooms] = useState<string>('0')

    const _setDateRange = (selection: Range)=>{
        if (searchModal.step == 'check-in'){
            searchModal.open('check-out')
        }else if (searchModal.step == 'check-out'){
            searchModal.open('details')
        }
        setDateRange(selection)
    }

    const closeAndSearch = () =>{
        const newSearchQuery: SearchQuery = {
            country: country?.label,
            checkIn: dateRange.startDate,
            checkOut: dateRange.endDate,
            guests: parseInt(numGuest),
            bedrooms: parseInt(numBedroom),
            bathrooms: parseInt(numBathrooms),
            category:''
        }

        searchModal.setQuery(newSearchQuery)
        searchModal.close()
    }
    const contentLocation = (
        <>
            <h2 className="mb-6 text-2xl">Where Do you Want to Go?</h2>
            <SelectCountry value={country} onChange={(value)=> setCountry(value as SelectCountryValue)} />
            <div className="mt-6 flex flex-row gap-4 ">
                <CustomButton label="Check In Date" onClick={()=>searchModal.open('check-in')}/>
            </div>
        </>
    )
    const contentCheckIn = (
        <>
            <h2 className="mb-6 text-2xl">Where Do you Want to Check In?</h2>
            <DatePicker value={dateRange} onChange={(value)=> _setDateRange(value.selection)} />
            <div className="mt-6 flex flex-row gap-4 ">
                <CustomButton label="Location" onClick={()=>searchModal.open('location')}/>
                <CustomButton label="Check Out Date" onClick={()=>searchModal.open('check-out')}/>
            </div>
        </>
    )
    const contentCheckOut = (
        <>
            <h2 className="mb-6 text-2xl">Where Do you Want to Check Out?</h2>
            <DatePicker value={dateRange} onChange={(value)=> _setDateRange(value.selection)} />
            <div className="mt-6 flex flex-row gap-4 ">
                <CustomButton label="Check In Date" onClick={()=>searchModal.open('check-in')}/>
                <CustomButton label="Details" onClick={()=>searchModal.open('details')}/>
            </div>
        </>
    )
    const contentDetails = (
        <>
            <h2 className="mb-6 text-2xl">Details</h2>
            <div className="space-y-4">
                <div className="space-y-4">
                    <label htmlFor="">Number of Guests</label>
                    <input type="number" min='1' value={numGuest} onChange={(e)=> setNumGuests(e.target.value)} className="w-full h-14 px-4 border border-gray-300 rounded-xl" placeholder="Number of Guests"/>
                </div>
                <div className="space-y-4">
                    <label htmlFor="">Number of Bedrooms</label>
                    <input type="number" min='0' value={numBedroom} onChange={(e)=> setNumBedrooms(e.target.value)} className="w-full h-14 px-4 border border-gray-300 rounded-xl" placeholder="Number of Bedrooms"/>
                </div>
                <div className="space-y-4">
                    <label htmlFor="">Number of Bathrooms</label>
                    <input type="number" min='0' value={numBathrooms} onChange={(e)=> setNumBathrooms(e.target.value)} className="w-full h-14 px-4 border border-gray-300 rounded-xl" placeholder="Number of Bathrooms"/>
                </div>
            </div>
            <div className="mt-6 flex flex-row gap-4 ">
                <CustomButton label="Check Out Date" onClick={()=>searchModal.open('check-out')}/>
                <CustomButton label="Search" onClick={closeAndSearch}/>
            </div>
        </>
    )
    if (searchModal.step == 'location'){
        content = contentLocation
    }else if(searchModal.step=='check-in'){
        content = contentCheckIn
    }else if(searchModal.step=='check-out'){
        content = contentCheckOut
    }else if(searchModal.step=='details'){
        content = contentDetails
    }
    return (
        <Modal isOpen={searchModal.isOPen} close={searchModal.close} title="Search" content={content} />
    )
}

export default SearchModal