import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseApiURL } from './environment';

const App = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [showData, setShowData] = useState(null);

  useEffect(() => {
    axios
      .get(`${baseApiURL}/shows/all-open`)
      .then(({ data }) => {
        setShowData(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>

  return (
    <div>
      <h1>Today's deals</h1>
    </div>
  );
}

export default App;
