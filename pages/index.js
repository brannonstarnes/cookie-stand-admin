// import Head from "next/head";
// import Header from "../components/Header";
// import CreateForm from "../components/CreateForm";
// import Main from "../components/Main";
// import ReportTable from "../components/ReportTable";
// import Footer from "../components/Footer";
// import { hourly_sales } from "../data";
import LoginPage from "../components/LoginPage"
import CookieStandAdmin from "../components/CookieStandAdmin";
import { useAuth } from '../contexts/auth';

export default function Home() {
  
  const { user, login } = useAuth();

  return (
    <div className="p-4 bg-green-200">
      {
        user ? <CookieStandAdmin /> : <LoginPage onLogin={login}/>
      }
    </div>
  )
}
