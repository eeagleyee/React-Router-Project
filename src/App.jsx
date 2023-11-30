import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// layout imports
import RootLayer from "./layouts/RootLayer";
import HelpLayout from "./layouts/HelpLayout";
import CareersLayout from "./layouts/CareersLayout";

// page imports
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/help/Faq";
import Contact, { contactAction } from "./pages/help/Contact";
import CareersData, { careersDataLoader } from "./pages/careers/CareersData";
import NotFound from "./pages/NotFound";
import Careers, { careersFromJSON } from "./pages/careers/Careers";
import ErrorData from "./pages/careers/errorData";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayer />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} action={contactAction} />
      </Route>
      <Route
        path="careers"
        element={<CareersLayout />}
        errorElement={<ErrorData />}
      >
        <Route index element={<Careers />} loader={careersFromJSON} />
        <Route
          path=":id"
          element={<CareersData />}
          loader={careersDataLoader}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
