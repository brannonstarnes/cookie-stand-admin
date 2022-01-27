import LoginPage from "../components/LoginPage"
import CookieStandAdmin from "../components/CookieStandAdmin";
import { useAuth } from '../contexts/auth';
import Head from "next/head";


export default function Home() {
  
  const { user, login } = useAuth();

  return (
    <div className="p-4 bg-green-200">
      <Head>
          <title>Cookie Stand Admin</title>
      </Head>
    
        {
          user ? <CookieStandAdmin /> : <LoginPage onLogin={login}/>
        }
    </div>
  )
}
