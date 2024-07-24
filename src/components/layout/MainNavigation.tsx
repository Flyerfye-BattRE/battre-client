import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.banner}></div>
      <nav className={classes.nav}>
        <ul>
          <li className={classes.logo}>
            Batte<b>RE</b>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className={classes.dropdown}>
            <Link to="/lab">Lab</Link>
            <div className={classes.dropdownMenu}>
              <ul>
                <li>
                  <Link className={classes.link} to="/lab">
                    Lab Plans
                  </Link>
                </li>
                <li>
                  <Link className={classes.link} to="/labBacklog">
                    Backlogs
                  </Link>
                </li>
                <li>
                  <Link className={classes.link} to="/labStns">
                    Stations
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className={classes.dropdown}>
            <Link to="/ops">Ops</Link>
            <div className={classes.dropdownMenu}>
              <ul>
                <li>
                  <Link to="/ops">Battery Inventory</Link>
                </li>
                <li>
                  <Link to="/opsCust">Customers</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link to="/spec">Specs</Link>
          </li>
          <li>
            <Link to="/storage">Storage</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
