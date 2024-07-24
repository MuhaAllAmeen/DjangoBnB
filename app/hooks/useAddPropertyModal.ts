import { create } from "zustand";

interface AddPropertyModalStore{
    isOPen: boolean;
    open: ()=> void;
    close: ()=>void;
}

const AddPropertyModalStore = create<AddPropertyModalStore>((set)=>({
    isOPen: false, 
    open: ()=> set({isOPen: true}),
    close: ()=> set({isOPen:false})
}));

export default AddPropertyModalStore;