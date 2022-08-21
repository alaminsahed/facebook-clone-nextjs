import Head from 'next/head'
import Header from '../components/Header'
import { useSession } from "next-auth/react"
import Login from '../components/Login'

export default function Home() {
  const { data: session, status } = useSession()
  if (!session) return <Login />

  return (
    <div>
      <Head>
        Facebook
      </Head>
      <Header />
    </div>
  )
}


