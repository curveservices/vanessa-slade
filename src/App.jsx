import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.scss";
import Layout from "./components/layout";
import ElevenPlus from "./components/pages/11-plus";
import NotFound from "./components/pages/404"
import Contact from "./components/pages/Contact";
import English from "./components/pages/English";
import Home from "./components/pages/Home";
import Maths from "./components/pages/Maths";
import Subjects from "./components/pages/Subjects";
import Tuition from "./components/pages/Tuition";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tuition" element={<Tuition />} />
        <Route path="subjects" element={<Subjects />} />
        <Route path=":id/english" element={<English />} />
        <Route path=":id/maths" element={<Maths />} />
        <Route path=":id/11-plus" element={<ElevenPlus />} />
        <Route path="contact-me" element={<Contact />} />
      </Route>
      <Route path="*" element={<NotFound/>}></Route>
    </>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
