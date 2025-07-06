import ChatAdmin from '@/components/Chat/ChatAdmin'
import { ChatProvider } from '@/components/Chat/ChatProvider'

export default function ChatAdminPage() {
  return (
    <ChatProvider>
      <ChatAdmin />
    </ChatProvider>
  )
} 