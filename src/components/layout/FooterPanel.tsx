import React, { useState } from "react";
import classes from "./FooterPanel.module.css";
import AboutMeModal from "./AboutMeModal";

export default function FooterPanel(props: any) {
  const [aboutMeModalOpen, setAboutMeModalOpen] = useState(false);

  const openAboutMe = () => {
    setAboutMeModalOpen(true);
  };

  const closeAboutMe = () => {
    setAboutMeModalOpen(false);
  };

  return (
    <div className={classes.divContainer}>
      {aboutMeModalOpen && <AboutMeModal closeFn={closeAboutMe} />}
      <main className={classes.footerPanel}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <tbody>
              <tr>
                <td className="link">
                  {/* It is convention not to use a href tags when there is no navigation to another page
                Using a disguised button here instead */}
                  <button className={classes.buttonLink} data-testid="application-grid-about-me-button" onClick={openAboutMe}>
                    About Me
                  </button>
                </td>
                <td className="link">
                  <a href="https://www.linkedin.com/in/issabeekun/">LinkedIn</a>
                </td>
                <td className="link">
                  <a href="https://github.com/Flyerfye-BattRE">
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
