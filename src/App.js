import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseApiURL } from './environment';
import TodaysDeals from './components/TodaysDeals';

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

  return <TodaysDeals showData={showData} />;
}

export default App;
