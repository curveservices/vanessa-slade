import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route></Route>
    </>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
