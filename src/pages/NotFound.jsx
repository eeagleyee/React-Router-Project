import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>Page not found!</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est nihil,
        dolor similique placeat quis magnam fugit vero natus atque saepe
        voluptatem totam culpa perspiciatis ipsam exercitationem optio suscipit,
        dolorem praesentium?
      </p>
      <p>
        Go to <Link to="/">Homepage</Link>.
      </p>
    </div>
  );
}
