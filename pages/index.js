import Head from "next/head";
import Header from "../components/Header";
import CreateForm from "../components/CreateForm";
import Main from "../components/Main";
import ReportTable from "../components/ReportTable";
import Footer from "../components/Footer";
import { hourly_sales } from "../data";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>

      <body className="bg-green-50 h-screen w-screen">
        <Header />

        <Main />
       
      </body>
    </div>
  );
}
