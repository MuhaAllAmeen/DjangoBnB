import { create } from "zustand";

interface LoginModalStore{
    isOPen: boolean;
    open: ()=> void;
    close: ()=>void;
}

const useLoginModal = create<LoginModalStore>((set)=>({
    isOPen: false, 
    open: ()=> set({isOPen: true}),
    close: ()=> set({isOPen:false})
}));

export default useLoginModal;