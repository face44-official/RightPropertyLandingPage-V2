import { Route, Switch } from "wouter";
import NotFoundPage from "../pages/404";
import HomePage from "../pages/home-page";
import PrivacyPolicy from "../pages/privacy-policy";
import ExperiencePage from "../pages/experience-page";
import SalesPage from "../pages/sales";
import MarketingPage from "../pages/marketing-page";
import TestPage from "../pages/test-page";

export default function Router() {
    return <Switch>
        <Route path="/" component={HomePage} />

        <Route path="/privacy-policy" component={PrivacyPolicy} />

        <Route path="/presentation" component={ExperiencePage} />

        <Route path="/sales" component={SalesPage} />

        <Route path="/marketing" component={MarketingPage} />

        <Route path="/test" component={TestPage} />
        {/* Default route in a switch */}
        <Route><NotFoundPage /></Route>
    </Switch>
}

