import { createBrowserRouter, Navigate } from 'react-router-dom';
import Mainlayouts from './components/layouts/Mainlayouts';
import Home from './components/ui/pages/home';
import Family from './components/ui/pages/Family';
import ErrorElement from './components/ErrorElement';
import Taskpage from './components/ui/pages/taskpage';
import News from './components/ui/pages/News';
import YouTubeNews from './components/ui/pages/YouTubeNews';
import Airdrop from './components/ui/pages/Airdrop';
import infoPage from './components/ui/pages/infoPage';
import WebsiteNews from './components/ui/pages/WebsiteNews';
import National from './components/ui/pages/national';  // Fix the import to uppercase

const MainRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Mainlayouts />,
    errorElement: <ErrorElement />,
    children: [
      { index: true, element: <Navigate to="/Home" replace /> }, // Redirect root to Home
      { path: 'Home', element: <Home /> },                       // Home route
      { path: 'Family', element: <Family /> },
      { 
        path: 'News',
        element: <News />,
        children: [
          { path: 'YouTube', element: <YouTubeNews /> },
          { path: 'Website', element: <WebsiteNews /> },
          { path: 'national', element: <National /> },           // Fix the route for National
        ]
      },
      { path: 'Taskpage', element: <Taskpage /> },
      { path: 'Airdrop', element: <Airdrop /> },
      { path: 'infoPage', element: <infoPage /> },
    ],
  },
]);

export default MainRoutes;
