export default function Footer(props) {
  return (
    <footer className="h-12 w-full bg-green-500 relative bottom-0 ">
      <p className="h-6 p-3 font-bold text-sm">
        {props.resources ? props.resources.length : 0} Locations World Wide
      </p>
    </footer>
  );
}
