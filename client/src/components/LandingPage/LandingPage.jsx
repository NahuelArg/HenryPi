import { Link } from "react-router-dom";
export default function Form() {
  return (
    <div>
      <Link to="/home">
        {" "}
        <button>Home</button>{" "}
      </Link>
    </div>
  );
}
