export default function Home() {
  return (
    <>
      <Header />
      <Form />
    </>
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
      <div className="h-36 w-2/3 bg-green-400 mx-auto mt-6">
        <h2 className="text-center pt-2 font-bold">Create Cookie Stand</h2>

        <label className="pl-4 pr-2 w-full">
          Location
          <input type="text" className="w-5/6 m-2" />
        </label>

        <div className="flex flex-row pl-4 pr-4">
          <div className="w-1/4">
            <p className="text-center">Minimum Customers per Hour</p>
            <input type="integer" className="w-full" />
          </div>

          <div className="pl-4 w-1/4">
            <p className="text-center">Maximum Customers per Hour</p>
            <input type="integer" className="w-full" />
          </div>

          <div className="pl-4 w-1/4">
            <p className="text-center">Average Cookies per Sale</p>
            <input type="integer" className="w-full" />
          </div>

          <div className="pl-4 w-1/4">
            <button className="bg-green-600 w-full pr-6 h-14">Create</button>
          </div>
        </div>
      </div>
    </form>
  );
}
