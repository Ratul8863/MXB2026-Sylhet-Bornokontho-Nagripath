import { Link } from "react-router-dom";

export default function ScrollLink({ to, children, ...props }) {
  return (
    <Link
      to={to}
      onClick={() =>
        window.scrollTo({ top: 0, left: 0, behavior: "instant" })
      }
      {...props}
    >
      {children}
    </Link>
  );
}
