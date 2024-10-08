import { useRouteError } from 'react-router-dom';

const ErrorElement = () => {
  const error = useRouteError();
  
  return (
    <div>
      <h1>Oops! hey Something went wrong.</h1>
      <p>{error?.statusText || error?.message}</p>
    </div>
  );
};

export default ErrorElement;
