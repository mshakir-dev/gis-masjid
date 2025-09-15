import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { usePageTitle } from "./hooks/usePageTitle";

import NotFoundPage from "./pages/invalid-page/NotFoundPage";
import ContactPage from "./pages/contact/ContactPage";
import HadithPage from "./pages/hadith/HadithPage";
import HomePage from "./pages/home/HomePage";
import PrayerTimesPage from "./pages/prayer/PrayerTimesPage";
import DonatePage from "./pages/donate/DonatePage";

const App: React.FC = () => {
  return (
    <Router>
      <MainRoutes />
    </Router>
  );
};

const MainRoutes: React.FC = () => {
  usePageTitle();

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/hadith" element={<HadithPage />} />
        <Route path="/prayer" element={<PrayerTimesPage />} />
        <Route path="/donate" element={<DonatePage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;