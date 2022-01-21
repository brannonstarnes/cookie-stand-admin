import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>

      <body className="bg-green-50 h-screen w-screen">
        <Header />
        <Form />
        <Message />
        <Footer />
      </body>
    </div>
  );
}

function Header() {
  return (
    <header className="bg-green-500 h-12 flex">
      <h1 className="text-3xl font-medium pl-4 my-auto">Cookie Stand Admin</h1>
    </header>
  );
}

function Form() {
  return (
    <form>
      <div className=" h-36 w-5/6 bg-green-400 mx-auto mt-6 rounded">
        <h2 className="text-center pt-2 font-bold">Create Cookie Stand</h2>

        <label className="pl-4 pr-2 w-full text-xs md:text-base">
          Location
          <input type="text" className="w-5/6 m-2"></input>
        </label>

        <div className="flex flex-row pl-4 pr-4">
          <div className="w-1/4">
            <p className="text-center text-xs md:text-base">
              Minimum Customers per Hour
            </p>
            <input type="integer" className="w-full"></input>
          </div>

          <div className="pl-4 w-1/4">
            <p className="text-center text-xs md:text-base">
              Maximum Customers per Hour
            </p>
            <input type="integer" className="w-full"></input>
          </div>

          <div className="pl-4 w-1/4">
            <p className="text-center text-xs md:text-base">
              Average Cookies per Sale
            </p>
            <input type="integer" className="w-full"></input>
          </div>

          <div className="pl-4 w-1/4">
            <button className="bg-green-600 w-full pr-6 h-14 text-xs md:text-base">
              Create
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

function Message() {
  return (
    <div className="text-center m-7">
      <p className="pb-4 ">Report Table Coming Soon...</p>
      <p>
        {
          '{"location":"Barcelona", "minCustomers":2,"maxCustomers":4,"avgCookies":2.5}'
        }
      </p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="h-12 w-full bg-green-600 relative bottom-0 ">
      <p className="h-6 p-3 font-bold text-sm">@2022</p>
    </footer>
  );
}
