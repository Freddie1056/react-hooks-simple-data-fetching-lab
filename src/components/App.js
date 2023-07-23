// create your App component here
import React, { useState, useEffect } from 'react';

function App() {
  const [dogImageUrl, setDogImageUrl] = useState(null);

  useEffect(() => {
    // Fetch dog image from the API
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        // Set the dogImageUrl state with the fetched image URL
        setDogImageUrl(data.message);
      })
      .catch((error) => {
        console.error('Error fetching dog image:', error);
      });
  }, []);

  // Show "Loading..." when the dogImageUrl is null (initial state)
  if (!dogImageUrl) {
    return <p>Loading...</p>;
  }

  // Show the dog image when the API response is received
  return (
    <div>
      <img src={dogImageUrl} alt="A Random Dog" />
    </div>
  );
}

export default App;

