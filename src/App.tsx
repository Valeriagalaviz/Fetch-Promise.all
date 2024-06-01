import { useState, useEffect } from 'react';

const useImageURL = () => {
  const [imagesURL, setImagesURL] = useState<string[]>([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch("https://jsonplaceholder.typicode.com/photos/1", { mode: "cors" }),
      fetch("https://jsonplaceholder.typicode.com/photos/2", { mode: "cors" })
    ])
    .then(responses => {
      
      responses.forEach(response => {
        if (response.status >= 400) {
          throw new Error("Server error!!");
        }
      });
      
      return Promise.all(responses.map(res => res.json()));
    })
    .then(images => {
      setImagesURL(images.map((img) => img.url));
    })
    .catch(error => {
      setError(error);
    })
    .finally(() => {
      setLoading(false);
    });
  }, []);

  return { imagesURL, error, loading };
};

function App() {
  const { imagesURL, error, loading } = useImageURL();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered !</p>;

  return (
    <>
      {imagesURL.map((url, index) => (
        <div key={index}>
          <h1>An image {index + 1}</h1>
          <img src={url} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </>
  );
}

export default App;
