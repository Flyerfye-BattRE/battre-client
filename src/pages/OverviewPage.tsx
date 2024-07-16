import Card from "../components/ui/Card";
import classes from "./OverviewPage.module.css";
import { Link } from "react-router-dom";
import SpecSection from "../components/layout/overviewPage/SpecSection";
import StorageSection from "../components/layout/overviewPage/StorageSection";
import LabSection from "../components/layout/overviewPage/LabSection";
import OpsSection from "../components/layout/overviewPage/OpsSection";
import TriageSection from "../components/layout/overviewPage/TriageSection";

export default function OverviewPage() {
  return (
    <div>
      <Card>
        <section className={classes.section}>
          <h2 className={classes.sectionTitle}>New Orders</h2>
          <section className={classes.sectionContents}>
            <TriageSection />
          </section>
        </section>
      </Card>
      <div className={classes.gridContainer}>
        <Card>
          <section className={classes.section}>
            <Link className={classes.link} to="/ops">
              <h2 className={classes.sectionTitle}>Ops</h2>
            </Link>
            <section className={classes.sectionContents}>
              <OpsSection />
            </section>
          </section>
        </Card>
        <Card>
          <section className={classes.section}>
            <Link className={classes.link} to="/lab">
              <h2 className={classes.sectionTitle}>Lab</h2>
            </Link>
            <section className={classes.sectionContents}>
              <LabSection />
            </section>
          </section>
        </Card>
        <Card>
          <section className={classes.section}>
            <Link className={classes.link} to="/storage">
              <h2 className={classes.sectionTitle}>Storage</h2>
            </Link>
            <section className={classes.sectionContents}>
              <StorageSection />
            </section>
          </section>
        </Card>
        <Card>
          <section className={classes.section}>
            <Link className={classes.link} to="/spec">
              <h2 className={classes.sectionTitle}>Spec</h2>
            </Link>
            <section className={classes.sectionContents}>
              <SpecSection />
            </section>
          </section>
        </Card>
      </div>
    </div>
  );
}
