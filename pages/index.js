import Head from "next/head";
import CreateForm from "../components/CreateForm";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import ReportTable from "../components/ReportTable";
import { hourly_sales } from "../data";

export default function Home() {
  function handleStandCreated(stand) {
    alert(stand);
    // need to figure out where to save the report then pass into Main as props
  }

  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>

      <body className="bg-green-50 h-screen w-screen">
        <Header />
        <CreateForm
          hourly_sales={hourly_sales}
          onStandCreated={handleStandCreated}
        />
        <Main reports={[]} />
        <Footer />
      </body>
    </div>
  );
}
