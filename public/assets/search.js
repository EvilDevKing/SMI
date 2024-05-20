// stale-whale-validate (SWR)

import useSWR from 'swr';

// Import useSWR from swr package

// created function to handle API request
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Swr = () => {
  const {
    data: countries,
    error,
    isValidating,
  } = useSWR('smi_form.needslink', fetcher);

  // Handles error and loading state
  if (error) return <div className='failed'>failed to load</div>;
  if (isValidating) return <div className="Loading">Loading...</div>;

  return (
    <div>
      {countries &&
        countries.map((country, index) => (
          <img key={index} src={country.flags.png} alt='flag' width={100} />
        ))}
    </div>
  );
};

export default Swr;




// fetch.jsx version

import { useState, useEffect } from 'react';
const Fetch = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPhotos(data);
      });
  }, []);
  return (
    <div>
      
      {photos.map((photo) => (
        <img key={photo.id} src={photo.url} alt={photo.title} width={100} />
      ))}
    </div>
  );
};
export default Fetch;


// react query, meh

npm i @tanstack/react-query

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
)


import { useQuery } from '@tanstack/react-query';
const Query = () => {
  const { data: comments, isLoading, error } = useQuery({
    queryFn: () =>
      fetch('https://jsonplaceholder.typicode.com/comments?_limit=10').then(
        (res) => res.json()
      ),
    queryKey: ['comments'],
  });
  
  // Show a loading message while data is fetching
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  
  // to handle error
  if (error) {
    return <div className="error">Error: error fetching</div>
  }
  
  return (
    <div>
      <h1 className='title'>Email address of users</h1>
      {comments.map((comment) => (
        <h2 key={comment.id} className="users">
          {comment.id}.  
            {comment.email}
        </h2>
      ))}
    </div>
  );
};
export default Query;




// search field with blinking cursor, NO, causes CSS errors

import React, { useState } from 'react'
import './App.css';
import { BsSearch } from 'react-icons/bs';
 
function App() {
    const productList = ["blue pant"
        , "black pant"
        , "blue shirt"
        , "black shoes"
        , "brown shoes"
        , "white pant"
        , "white shoes"
        , "red shirt"
        , "gray pant"
        , "white shirt"
        , "golden shoes"
        , "dark pant"
        , "pink shirt"
        , "yellow pant"];
    const [products, setProducts] = useState(productList);
    const [searchVal, setSearchVal] = useState("");
    function handleSearchClick() {
        if (searchVal === "") { setProducts(productList); return; }
        const filterBySearch = productList.filter((item) => {
            if (item.toLowerCase()
                .includes(searchVal.toLowerCase())) { return item; }
        })
        setProducts(filterBySearch);
    }
    const mystyle = {
        marginLeft: "600px",
        marginTop: "20px",
        fontWeight: "700"
    };
 
    return (
        <div>
            <div style={mystyle}>
                <input onChange={e => setSearchVal(e.target.value)}>
                </input>
                <BsSearch onClick={handleSearchClick} />
            </div>
            <div>
 
                {products.map((product) => {
                    return (
                        <div style={mystyle}>{product}</div>
                    )
                })
                }
 
            </div>
        </div>
    );
}
 
export default App;



