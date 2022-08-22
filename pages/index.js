import Head from 'next/head'
import Header from '../components/Header'
import { useSession } from "next-auth/react"
import Login from '../components/Login'
import Sidebar from '../components/Sidebar'

export default function Home() {
  const { data: session, status } = useSession()
  if (!session) return <Login />

  return (
    <div>
      <Head>
        Facebook
      </Head>
      <Header />
      <main className='flex'>
        <Sidebar />
      </main>
    </div>
  )
}


