import ReportTable from "./ReportTable";

export default function Main(props) {
  if (props.reports.length == 0) {
    return (
      <div className="flex items-center justify-center m-7">
        <h2 className="p-4">No Cookie Stands Available</h2>
      </div>
    );
  } else {
    return <ReportTable />;
  }
}
