import { createBrowserRouter } from 'react-router-dom';
import Mainlayouts from './components/layouts/Mainlayouts';
import Home from './components/ui/pages/home';
import Family from './components/ui/pages/Family';
import ErrorElement from './components/ErrorElement';
import Election from './components/ui/pages/Election';
import News from './components/ui/pages/News';
import YouTubeNews from './components/ui/pages/YouTubeNews'; // Import YouTubeNews subpage
import Airdrop from './components/ui/pages/Airdrop';
import infoPage from './components/ui/pages/infoPage';
import WebsiteNews from './components/ui/pages/WebsiteNews';

const MainRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Mainlayouts />,
    errorElement: <ErrorElement />,
    children: [
      { index: true, path: 'Home', element: <Home /> },
      { path: 'Family', element: <Family /> },
      { 
        path: 'News',
        element: <News />, 
        children: [
          { path: 'YouTube', element: <YouTubeNews /> }, 
          { path: 'Website', element: <WebsiteNews /> }, // Subpage for YouTube news
        ] 
      },
      { path: 'Election', element: <Election /> },
      { path: 'Airdrop', element: <Airdrop /> },
      { path: 'infoPage', element: <infoPage /> },
      
    ],
  },
]);

export default MainRoutes;
