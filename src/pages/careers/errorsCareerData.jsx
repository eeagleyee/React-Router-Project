import { useRouteError, Link } from "react-router-dom";

export default function ErrorsCareerData() {
  const errorcareer = useRouteError;
  return (
    <div className="error-careerdata">
      <h2>Error</h2>
      <p>{errorcareer.message}</p>
      <Link to="/">Back to Homepage</Link>
    </div>
  );
}
