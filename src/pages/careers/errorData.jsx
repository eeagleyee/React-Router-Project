import { Link, useRouteError } from "react-router-dom";

export default function ErrorData() {
  const error = useRouteError();
  return (
    <div className="error-data">
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link to="/careers">Back to Careers page</Link>
    </div>
  );
}
