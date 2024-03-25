import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './ui/Home';
import Login from './features/login/Login';
import Account from './features/account/Account';
import Applayout from './ui/Applayout';
import './index.css';
import ProtectedRoute from './routes/ProtectedRoute';

const router = createBrowserRouter([
  {
    element: <Applayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <Login /> },
      {
        path: '/profile',
        element: (
          <ProtectedRoute>
            <Account />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
