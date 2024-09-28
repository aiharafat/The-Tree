import { createBrowserRouter } from 'react-router-dom';
import Mainlayouts from './components/layouts/Mainlayouts';  // Import Mainlayouts
import Home from './components/ui/pages/home';  // Import your Home component
import ErrorElement from './components/ErrorElement'; // Import ErrorElement

const MainRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Mainlayouts />,    // The main layout component
    errorElement: <ErrorElement />, // Error component when route fails
    children: [
      {
        index: true,
        element: <Home />,        // Your home component
      },
    ],
  },
]);

export default MainRoutes;
