'use client';

import Modal from "./Modal";
import { useState } from "react";
import useSignUpModal from "@/app/hooks/useSignUpModal";
import CustomButton from "../forms/CustomButton";
import { useRouter } from "next/navigation";
import apiService from "@/app/services/apiService";
import { handleLogin } from "@/app/lib/actions";
const SignUpModal = ()=>{
    const router = useRouter();
    const signUpModal = useSignUpModal()
    const [email,setEmail] = useState('');
    const [password1,setPassword1] = useState('');
    const [password2,setPassword2] = useState('');
    const [error,setErrors]= useState<String[]>([])

    const submitSignup = async()=>{
        const formData = {
            email: email,
            password1: password1,
            password2: password2
        }
        const response = await apiService.postWithoutToken('/api/auth/register/',JSON.stringify(formData))
        if(response.access){
            handleLogin(response.user.pk, response.access, response.refresh)
            signUpModal.close()
            router.push('/')
        }else{
            const tmpErrors: string[] = Object.values(response).map((error: any)=>{
                return error;
            })
            setErrors(tmpErrors)
        }
    }

    const content = (
        <>
            <h2 className="mb-6 text-2xl">Welcome to Djangobnb, Please Sign Up</h2>
            <form action={submitSignup} className="space-y-4">
                <input onChange={(e)=> setEmail(e.target.value)} placeholder="Your Email" type="email" className="w-full h-[54px] px-4 border-gray-300 rounded-xl"/>
                <input onChange={(e)=> setPassword1(e.target.value)} placeholder='Your Password' type="password" className="w-full h-[54px] px-4 border-gray-300 rounded-xl"/>
                <input onChange={(e)=> setPassword2(e.target.value)} placeholder='Repeat Password' type="password" className="w-full h-[54px] px-4 border-gray-300 rounded-xl"/>
                {error.map((error,index)=>{
                    return (
                        <div key={`error_${index}`} className="p-5 bg-airbnb text-white rounded-xl opacity-80">
                            {error}
                        </div>
                    )
                })}
                
                <CustomButton label="Submit" onClick={submitSignup}/>
           </form>
        </>
    )
    return(
        <Modal isOpen = {signUpModal.isOPen} close={signUpModal.close} title="Sign Up" content={content} />

    )
}

export default SignUpModal