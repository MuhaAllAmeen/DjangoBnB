import { create } from "zustand";

interface SignUpModalStore{
    isOPen: boolean;
    open: ()=> void;
    close: ()=>void;
}

const useLoginModal = create<SignUpModalStore>((set)=>({
    isOPen: false, 
    open: ()=> set({isOPen: true}),
    close: ()=> set({isOPen:false})
}));

export default useLoginModal;