import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Logo Spot</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/lab'>Lab</Link>
          </li>
          <li>
            <Link to='/ops'>Ops</Link>
          </li>
          <li>
            <Link to='/spec'>Specs</Link>
          </li>
          <li>
            <Link to='/storage'>Storage</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
