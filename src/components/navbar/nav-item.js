import "./navbar.css";
export default function NavItem({ content }) {
  return (
    <li className="nav-item">
      <a href={"#" + content} className="nav-link active">
        {content}
      </a>
    </li>
  );
}
