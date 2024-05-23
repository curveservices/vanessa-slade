import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.scss";
import Layout from "./components/layout";
import ElevenPlus from "./components/pages/11-plus";
import NotFound from "./components/pages/404";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import English from "./components/pages/English";
import Home from "./components/pages/Home";
import Maths from "./components/pages/Maths";
import Resources from "./components/pages/Resources/main-page";
import EnglishPapers from "./components/pages/Resources/english";
import Subjects from "./components/pages/Subjects";
import Tuition from "./components/pages/Tuition";
import MathsPapers from "./components/pages/Resources/maths";
import Verbal from "./components/pages/Resources/verbal";
import NonVerbal from "./components/pages/Resources/non-verbal";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tuition" element={<Tuition />} />
        <Route path="subjects" element={<Subjects />} />
        <Route path="resources" element={<Resources />} />
        <Route path=":id/english-papers" element={<EnglishPapers />} />
        <Route path=":id/maths-papers" element={<MathsPapers />} />
        <Route path=":id/verbal" element={<Verbal />} />
        <Route path=":id/non-verbal" element={<NonVerbal />} />
        <Route path="english" element={<English />} />
        <Route path="maths" element={<Maths />} />
        <Route path="11-plus" element={<ElevenPlus />} />
        <Route path="about-me" element={<About />} />
        <Route path="contact-me" element={<Contact />} />
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
