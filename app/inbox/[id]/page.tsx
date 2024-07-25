import ConversationDetail from "@/app/components/inbox/ConversationDetails";
import { getAccessToken, getUserId } from "@/app/lib/actions";
import { UserType } from "../page";
import apiService from "@/app/services/apiService";

export type MessageType = {
  id: string;
  name: string;
  body: string;
  conversationId: string;
  sent_to: UserType;
  created_by: UserType;
}

export default async function ConversationPage({params}:{params: {id: string}}) {
  const userId = await getUserId()
  const token = await getAccessToken()
  if (!userId || !token){
      return(
          <main className="max-w-[1500px] max-auto px-6 py-12">
              <h1 className="my-6 text-2xl">You are not logged in</h1>
          </main>
      )
  }

  const conversation = await apiService.get(`/api/chat/${params.id}/`)
  return (
      <main className="max-w-[1500px] mx-auto px-6 pb-6">
        <ConversationDetail messages={conversation.messages} token={token} userId={userId} conversation = {conversation.conversation} />
      </main>
    )
}
