import { Route, Routes } from "react-router-dom";

import MainNavigation from "./components/layout/MainNavigation";
import LabBacklogPage from "./pages/LabBacklogPage";
import LabPlansPage from "./pages/LabPlans";
import LabStationsPage from "./pages/LabStationsPage";
import OpsBatteryPage from "./pages/OpsBatteryPage";
import OpsCustomerPage from "./pages/OpsCustomerPage";
import OverviewPage from "./pages/Overview";
import SpecsPage from "./pages/Specs";
import StoragePage from "./pages/Storage";

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
