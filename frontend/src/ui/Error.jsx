import { useRouteError, useLocation } from 'react-router-dom';

function Error() {
  const routeError = useRouteError();
  const location = useLocation();
  const error = routeError || location.state.error;
  console.log(error);

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
    </div>
  );
}

export default Error;
