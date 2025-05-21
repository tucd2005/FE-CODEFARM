import "./index.css";
import { Route, RouterProvider, Routes } from "react-router-dom";
import { router } from "./routes/route";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
