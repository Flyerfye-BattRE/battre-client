import FooterPanel from "./FooterPanel";
import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

export default function Layout(props: any) {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
      <FooterPanel />
    </div>
  );
}
