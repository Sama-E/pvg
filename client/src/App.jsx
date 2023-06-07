import "/src/assets/css/app.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";


function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        // {
        //   path:"/strategies",
        //   element: <InvStrategies />
        // },
        // {
        //   path:"/wealthmgt",
        //   element: <WealthMgt />
        // },
        // {
        //   path:"/team",
        //   element: <Team />
        // },
        // {
        //   path:"/media",
        //   element: <Media />
        // },
        // {
        //   path:"/contact",
        //   element: <Contact />
        // }
      ]
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
