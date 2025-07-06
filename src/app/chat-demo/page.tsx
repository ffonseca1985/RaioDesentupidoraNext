import ChatDemo from '@/components/Chat/ChatDemo'
import { ChatProvider } from '@/components/Chat/ChatProvider'

export const metadata = {
  title: 'Chat Widget Demo - Integração n8n',
  description: 'Demonstração do widget de chat com integração n8n. Veja como implementar em seu site.',
}

export default function ChatDemoPage() {
  return (
    <ChatProvider>
      <ChatDemo />
    </ChatProvider>
  )
} 