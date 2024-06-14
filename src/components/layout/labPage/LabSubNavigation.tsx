import { Link } from "react-router-dom";

import classes from "../SubNavigation.module.css";

export default function LabSubNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <Link to="/lab">Lab Plans</Link>
          </li>
          <li>
            <Link to="/labBacklog">Backlogs</Link>
          </li>
          <li>
            <Link to="/labStns">Stations</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
