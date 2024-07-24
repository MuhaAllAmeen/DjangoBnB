import Image from "next/image"
import Conversation from "../components/inbox/Conversation"
import apiService from "../services/apiService"
import { getUserId } from "../lib/actions"

export type UserType = {
    id: string;
    name: string;
    avatar_url: string;
}

export type ConversationType={
    id: string;
    users: UserType[];
}
export default async function InboxPage() {
    const userId = await getUserId()
    if (!userId){
        return(
            <main className="max-w-[1500px] max-auto px-6 py-12">
                <h1 className="my-6 text-2xl">You are not logged in</h1>
            </main>
        )
    }
    const conversations = await apiService.get('/api/chat/')
    return (
      <main className="max-w-[1500px] mx-auto px-6 pb-6 space-y-4">
            <h1 className="my-6 text-2xl">Inbox</h1>
            {conversations.map((conversation: ConversationType)=>{
                return(
                    <Conversation key={conversation.id} userId={userId} conversation={conversation}/>
                )

            })}
        </main>
    )
}