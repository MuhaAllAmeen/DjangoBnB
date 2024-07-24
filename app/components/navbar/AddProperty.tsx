'use client';
import AddPropertyModalStore from "@/app/hooks/useAddPropertyModal";
import useLoginModal from "@/app/hooks/useLoginModal";

interface AddPropertyButtonProps{
    userId?: string | null; 
}
const AddProperty:React.FC<AddPropertyButtonProps> = ({userId}) => {
    const loginModal = useLoginModal()
    const addPropertyModal = AddPropertyModalStore()
    const airbbnbYourHome = ()=>{
        if (userId){
            addPropertyModal.open()
        }else{
            loginModal.open()
        }
    }
    return (
        <div onClick={airbbnbYourHome} className="p-2 cursor-pointer text-sm font-semibold rounded-full hover:bg-gray-200">
        Airbnb Your Home
        </div>
    )
}

export default AddProperty;