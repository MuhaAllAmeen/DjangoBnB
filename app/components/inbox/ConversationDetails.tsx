'use client';

import { ConversationType, UserType } from "@/app/inbox/page";
import CustomButton from "../forms/CustomButton"
import useWebSocket from "react-use-websocket";
import { getAccessToken } from "@/app/lib/actions";
import { useEffect, useRef, useState } from "react";
import { MessageType } from "@/app/inbox/[id]/page";

interface ConversationDetailProps {
    conversation: ConversationType
    userId:string
    token: string
    messages: MessageType[]
}

const ConversationDetail:React.FC<ConversationDetailProps> =  ({conversation, userId, token, messages}) =>{
    const otherUser = conversation.users.find((user)=> user.id!=userId)
    const me = conversation.users.find((user)=> user.id==userId)
    const [newMessage,setNewMessage] = useState('')
    const [realTimeMessages, setRealTimeMessages] = useState<MessageType[]>([])
    
    const messagesDiv = useRef<HTMLDivElement>(null)
    const {sendJsonMessage, lastJsonMessage, readyState} = useWebSocket(`ws://127.0.0.1:8000/ws/${conversation.id}/?token=${token}`,{
        share: false,
        shouldReconnect: ()=> true
    })

    useEffect(()=>{
        if (lastJsonMessage && typeof lastJsonMessage === 'object' && 'name' in lastJsonMessage && 'body' in lastJsonMessage){
            const message: MessageType = {
                id: '',
                name: lastJsonMessage.name as string,
                body: lastJsonMessage.body as string,
                conversationId: conversation.id,
                sent_to: otherUser as UserType,
                created_by: me as UserType
            }
            setRealTimeMessages((realTimeMessage)=>[...realTimeMessages, message])
        }
        scrollToBottom()
    },[lastJsonMessage])

    const scrollToBottom =()=>{
        if (messagesDiv.current){
            messagesDiv.current.scrollTop = messagesDiv.current.scrollHeight
        }
    }
    const sendMessage = async()=>{
        sendJsonMessage({
            event: 'chat_message',
            data:{
                body: newMessage,
                name: me?.name,
                sent_to_id: otherUser?.id,
                conversation_id: conversation.id
            }
        })
        setNewMessage('')

        setTimeout(()=> scrollToBottom(),50)
        
    }
    return (
        <>
            <div ref={messagesDiv} className="max-h-[400px] overflow-auto flex flex-col space-y-4">
                {messages.map((message,index)=>(
                    <div key={index} className={`w-[80%] py-4 px-6 rounded-xl ${message.created_by.name == me?.name ? 'ml-[20%] bg-blue-200': 'bg-gray-200'}`}>
                        <p className="font-bold text-gray-500">{message.created_by.name}</p>
                        <p>{message.body}</p>
                    </div>
                ))}
                {realTimeMessages.map((message,index)=>(
                    <div key={index} className={`w-[80%] py-4 px-6 rounded-xl ${message.name == me?.name ? 'ml-[20%] bg-blue-200': 'bg-gray-200'}`}>
                        <p className="font-bold text-gray-500">{message.name}</p>
                        <p>{message.body}</p>
                    </div>
                ))}
            </div>
            <div className="rounded-xl mt-4 py-4 px-6 flex border border-gray-300 space-x-4">
                <input value={newMessage} onChange={(e)=>setNewMessage(e.target.value)} type="text" placeholder="Type your message" className="w-full p-2 bg-gray-200 rounded-xl"/>
                <CustomButton 
                    label = 'Send'
                    onClick = {sendMessage}
                    className = "w-[100px]"
                />
            </div>
        </>
    )
}

export default ConversationDetail