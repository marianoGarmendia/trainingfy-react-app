import { useState, useEffect } from 'react';

// const url =
//   "https://exercisedb.p.rapidapi.com/exercises/bodyPart/cardio?limit=5";
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'e554205daamsh34597c597b1dee3p18c0b4jsnebf507c6e526',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};
export function useFetch(url) {
  const [data, setData] = useState(null);
  console.log('fetch');
  useEffect(() => {
    console.log('effect fetch');

    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return { data };
}
