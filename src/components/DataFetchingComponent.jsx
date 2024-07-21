import React, { useState } from 'react';

const DataFetchingComponent = ({ onMessageSend,url,title }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      setData(jsonData);
      onMessageSend(jsonData);
      console.log(jsonData)
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={fetchData} disabled={loading} className='btn'>
        
        {title}
      </button>
      
      {error && <p>Error: {error}</p>}
      
      {data && (
        <div>
          <h2>Data fetched successfully:</h2>
          {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        </div>
      )}
    </div>
  );
};
export default DataFetchingComponent;
