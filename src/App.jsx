import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.scss";
import Layout from "./components/layout";
import NotFound from "./components/pages/404"
import Home from "./components/pages/Home";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
      </Route>
      <Route path="*" element={<NotFound/>}></Route>
    </>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
