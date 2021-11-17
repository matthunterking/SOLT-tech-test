import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseApiURL } from './environment';

const App = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [showData, setShowData] = useState(null);

  useEffect(() => {
    axios
      .get(`${baseApiURL}/shows/all-open`)
      .then(({ data }) => {
        setShowData(data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setHasError(true);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>

  if (hasError) return <p>Oops something has gone wrong. Please try again later</p>

  return (
    <div>
      <h1>Today's deals</h1>
    </div>
  );
}

export default App;
