import React from "react";
import { Route, Routes } from "react-router-dom";

import OverviewPage from "./pages/Overview";
import LabPlansPage from "./pages/LabPlans";
import OpsBatteryPage from "./pages/OpsBatteryPage";
import OpsCustomerPage from "./pages/OpsCustomerPage";
import SpecsPage from "./pages/Specs";
import StoragePage from "./pages/Storage";
import MainNavigation from "./components/layout/MainNavigation";
import LabBacklogPage from "./pages/LabBacklogPage";
import LabMaintPage from "./pages/LabStationsPage";
import LabStationsPage from "./pages/LabStationsPage";

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<OverviewPage />} />
        <Route path="/lab" element={<LabPlansPage />} />
        <Route path="/labBacklog" element={<LabBacklogPage />} />
        <Route path="/labStns" element={<LabStationsPage />} />
        <Route path="/ops" element={<OpsBatteryPage />} />
        <Route path="/opsCust" element={<OpsCustomerPage />} />
        <Route path="/spec" element={<SpecsPage />} />
        <Route path="/storage" element={<StoragePage />} />
      </Routes>
    </div>
  );
}

export default App;
