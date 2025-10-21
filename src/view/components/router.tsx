import NotFoundPage from "../pages/404";
import HomePage from "../pages/home-page";
import PrivacyPolicy from "../pages/privacy-policy";
import ExperiencePage from "../pages/experience-page";
import SalesPage from "../pages/sales";
import MarketingPage from "../pages/marketing-page";
import TestPage from "../pages/test-page";
import { Route, Routes } from "react-router";

export default function Router() {
    return <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        <Route path="/presentation" element={<ExperiencePage />} />

        <Route path="/sales" element={<SalesPage />} />

        <Route path="/marketing" element={<MarketingPage />} />

        <Route path="/test" element={<TestPage />} />
        {/* Default route in a switch */}
        <Route path="*" element={<NotFoundPage />} />
    </Routes>
}

