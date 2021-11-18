import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseApiURL } from './environment';
import TodaysDeals from './components/TodaysDeals';
import Loading from './components/Loading';
import ErrorMessage from './components/ErrorMessage';

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

  if (isLoading) return <Loading />

  if (true) return <ErrorMessage />

  return <TodaysDeals showData={showData} />;
}

export default App;
