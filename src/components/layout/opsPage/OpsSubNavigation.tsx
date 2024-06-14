import { Link } from "react-router-dom";

import classes from "../SubNavigation.module.css";

export default function OpsSubNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <Link to="/ops">Batteries</Link>
          </li>
          <li>
            <Link to="/opsCust">Customers</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
