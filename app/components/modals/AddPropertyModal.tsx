'use client';
import Image from "next/image";
import Modal from "./Modal";
import AddPropertyModalStore from "@/app/hooks/useAddPropertyModal";
import CustomButton from "../forms/CustomButton";
import { ChangeEvent, useState } from "react";
import Categories from "../addproperty/Categories";
import SelectCountry, { SelectCountryValue } from "../forms/SelectCountry";
import apiService from "@/app/services/apiService";
import { useRouter } from "next/navigation";
const AddPropertyModal = () => {
    const addPropertyModal = AddPropertyModalStore()
    const [currentStep, setCurrentStep] = useState(1)
    const [errors,setErrors] = useState<string[]>([])
    const [dataCategory, setDataCategory] = useState('')
    const [dataTitle, setDataTitle]= useState('')
    const [dataDescription, setDataDescription] = useState('')
    const [dataPrice, setDataPrice] = useState('')
    const [dataRooms, setDataRooms]= useState('')
    const [dataBathRooms, setDataBathRooms] = useState('')
    const [dataGuests,setDataGuests] = useState('')
    const [dataCountry, setDataCountry] = useState<SelectCountryValue>()
    const [dataImage, setDataImage] = useState<File | null>(null)
    const router = useRouter()
    const setCategory = (category: string) =>{
        setDataCategory(category)
    }
    const setImage=(event: ChangeEvent<HTMLInputElement>) =>{
        if(event.target.files && event.target.files.length > 0){
            const tmpImage = event.target.files[0]
            setDataImage(tmpImage)
        }
    }

    const submitForm = async()=>{
        if (dataTitle && dataCategory && dataDescription && dataPrice && dataCountry && dataImage){
            const formData = new FormData()
            formData.append('category',dataCategory)
            formData.append('title',dataTitle)
            formData.append('description',dataDescription)
            formData.append('price_per_night',dataPrice)
            formData.append('bedrooms',dataRooms)
            formData.append('bathrooms',dataBathRooms)
            formData.append('guests',dataGuests)
            formData.append('country',dataCountry.label)
            formData.append('country_code',dataCountry.value)
            formData.append('image',dataImage)

            const response = await apiService.post('/api/properties/create/',formData)
            if(response.success){
                router.push('/?added=true')
                addPropertyModal.close()
            } else{
                const tmpErrors : string[] = Object.values(response).map((error:any)=>{
                    return error
                })
                setErrors(tmpErrors)
            }

        }
    }
    const content = (
        <>
            {currentStep ==1 ? (
                <>
                <h2 className="mb-6 text-2xl">Choose Category</h2>
                <Categories dataCategory={dataCategory} setCategory={(category) => setCategory(category)} /> 

                <CustomButton label="Next" onClick={()=> setCurrentStep(2)} />
                </>
            ): currentStep==2 ? (
                <>
                    <h2 className="mb-6 text-2xl">Describe Your Place</h2>
                    <div className="pt-3 pb-6 space-y-4">
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="">Title</label>
                            <input className="w-full p-4 border border-gray-600 rounded-xl" type="text" value={dataTitle} onChange={(e)=>setDataTitle(e.target.value)} />
                            
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="">Description</label>
                            <textarea className="w-full p-4 h-[200px] border border-gray-600 rounded-xl"  value={dataDescription} onChange={(e)=>setDataDescription(e.target.value)}>

                            </textarea>
                            
                        </div>

                    </div>
                    <CustomButton className="mb-2 bg-black hover:bg-gray-800" label="Previous" onClick={()=> setCurrentStep(1)} />
                    <CustomButton label="Next" onClick={()=> setCurrentStep(3)} />

                </>
            ): currentStep==3 ?(
                <>
                    <h2 className="mb-6 text-2xl">Details</h2>
                    <div className="pt-3 pb-6 space-y-4">
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="">Price per Night</label>
                            <input className="w-full p-4 border border-gray-600 rounded-xl" type="number" value={dataPrice} onChange={(e)=>setDataPrice(e.target.value)} />
                            
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="">Bedrooms</label>
                            <input className="w-full p-4 border border-gray-600 rounded-xl" type="number" value={dataRooms} onChange={(e)=>setDataRooms(e.target.value)} />
                            
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="">Bathrooms</label>
                            <input className="w-full p-4 border border-gray-600 rounded-xl" type="number" value={dataBathRooms} onChange={(e)=>setDataBathRooms(e.target.value)} />
                            
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="">Guests</label>
                            <input className="w-full p-4 border border-gray-600 rounded-xl" type="number" value={dataGuests} onChange={(e)=>setDataGuests(e.target.value)} />
                            
                        </div>
                    </div>
                    <CustomButton className="mb-2 bg-black hover:bg-gray-800" label="Previous" onClick={()=> setCurrentStep(2)} />
                    <CustomButton label="Next" onClick={()=> setCurrentStep(4)} />

                </>
            ): currentStep==4 ?(
                <>
                    <h2 className="mb-6 text-2xl">Location</h2>
                    <div className="pt-3 pb-6 space-y-4">
                        <SelectCountry value={dataCountry} onChange={(value)=> setDataCountry(value as SelectCountryValue)}/>
                    </div>
                    <CustomButton className="mb-2 bg-black hover:bg-gray-800" label="Previous" onClick={()=> setCurrentStep(3)} />
                    <CustomButton label="Next" onClick={()=> setCurrentStep(5)} />

                </>
            ):(
                <>
                    <h2 className="mb-6 text-2xl">Image</h2>
                    <div className="pt-3 pb-6 space-y-4">
                        <div className="py-4 px-6 bg-gray-600 text-white rounded-xl">
                            <input type="file" accept="image/*" onChange={setImage} />

                        </div>
                        {dataImage && (
                            <div className="w=[200px] h-[150px] relative">
                                <Image fill alt="Uploaded Image" src={URL.createObjectURL(dataImage)} className="w-full h-full object-cover rounded-xl" />
                            </div>
                        )}
                    </div>
                    {errors.map((error,index)=>{
                        return (
                            <div key={index} className="p-5 mb-4 bg-airbnb text-white rounded-xl opacity-80">
                                {error}
                            </div>
                        )
                    })}
                    <CustomButton className="mb-2 bg-black hover:bg-gray-800" label="Previous" onClick={()=> setCurrentStep(4)} />
                    <CustomButton label="Submit" onClick={submitForm} />

                </>
            )}
            
        </>
    )
    return (
        <>
            <Modal isOpen={addPropertyModal.isOPen} close={addPropertyModal.close} title="Add Property" content={content } />
        </>
    )
}

export default AddPropertyModal