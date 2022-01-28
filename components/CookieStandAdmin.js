import useResource from "../hooks/useResource"
import CreateForm from "./CreateForm";
import ReportTable from "./ReportTable";
import Header from "./Header"
import Footer from "./Footer"
export default function CookieStandAdmin(){

    const {resources, deleteResource} = useResource();

return (
    <body>
    <Header />
    <CreateForm />
    <ReportTable stands={resources || []} deleteStand={deleteResource} />
    {console.log(resources)}
    <Footer resources={resources}/>
    </body>
    )
}

