import React, { useState } from "react";
import classes from "./FooterPanel.module.css";
import AboutModal from "./AboutModal";

export default function FooterPanel() {
  const [aboutModalOpen, setAboutMeModalOpen] = useState(false);

  const openAbout = () => {
    setAboutMeModalOpen(true);
  };

  const closeAbout = () => {
    setAboutMeModalOpen(false);
  };

  return (
    <div className={classes.divContainer}>
      {aboutModalOpen && <AboutModal closeFn={closeAbout} />}
      <main className={classes.footerPanel}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tbody>
            <tr>
              <td>
                {/* It is convention not to use a href tags when there is no navigation to another page
                Using a disguised button here instead */}
                <button
                  className={classes.buttonLink}
                  data-testid="application-grid-about-button"
                  onClick={openAbout}
                >
                  About
                </button>
              </td>
              <td>
                <a
                  className={classes.footerLink}
                  href="https://www.linkedin.com/in/issabeekun/"
                >
                  LinkedIn
                </a>
              </td>
              <td>
                <a
                  className={classes.footerLink}
                  href="https://github.com/Flyerfye-BattRE"
                >
                  GitHub
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}
