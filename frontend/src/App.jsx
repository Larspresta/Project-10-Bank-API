import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './ui/Home';
import Login from './features/login/Login';
import Account from './features/account/Account';
import Applayout from './ui/Applayout';
import './index.css';

const router = createBrowserRouter([
  {
    element: <Applayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <Login /> },
      { path: '/profile', element: <Account /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
