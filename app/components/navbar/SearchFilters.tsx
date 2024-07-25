'use client';
import useSearchModal from "@/app/hooks/useSearchModal";

const SearchFilters = () => {
    const searchModal = useSearchModal()
  return (
  <div onClick={()=>searchModal.open('location')} className="h-[48px] lg:h-[64px] flex flex-row items-center justify-between border rounded-full">
    <div className="hidden lg:block">
        <div className="flex flex-row items-center justify-between">
            <div className="cursor-pointer w-[250px] h-[48px] lg:h-[64px] px-8 flex flex-col  justify-centerrounded-full hover:bg-gray">
                <p className="text-xs font-semibold">Where</p>
                <p className="text-sm">Wanted location</p>
            </div>
            <div className="cursor-pointer h-[48px] lg:h-[64px] px-8 flex flex-col  justify-centerrounded-full hover:bg-gray">
                <p className="text-xs font-semibold">Check In</p>
                <p className="text-sm">Add Dates</p>
            </div>
            <div className="cursor-pointer h-[48px] lg:h-[64px] px-8 flex flex-col  justify-centerrounded-full hover:bg-gray">
                <p className="text-xs font-semibold">Check Out</p>
                <p className="text-sm">Add Dates</p>
            </div>
            <div className="cursor-pointer h-[48px] lg:h-[64px] px-8 flex flex-col  justify-centerrounded-full hover:bg-gray">
                <p className="text-xs font-semibold">Who</p>
                <p className="text-sm">Add Guests</p>
            </div>
            
        </div>
    </div>
    <div className="p-2">
        <div className="cursor-pointer p-2 lg:p-4 bg-airbnb hover:bg-airbnb-dark transition rounded-full text-white">
            <p className="text-white text-sm">Search</p>
        </div>
    </div>
    </div>
);
};

export default SearchFilters;