import ReportTable from "./ReportTable";

export default function Main(props) {
  if (props.reports.length == 0) {
    return (
      <div className="flex items-center justify-center">
        <h2>No Cookie Stands Available</h2>
      </div>
    );
  } else {
    return <ReportTable />;
  }
}
