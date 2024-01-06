import { useState, useEffect } from 'react'
// const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY

// const url =
//   'https://exercisedb.p.rapidapi.com/exercises/bodyPart/cardio?limit=5'
// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': API_KEY,
//     'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
//   },
// }

export function useFetch(url) {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(
      `http://localhost:8888/.netlify/functions/fetch-excercises?name=https://exercisedb.p.rapidapi.com/exercises/bodyPart/cardio?limit=29`
    )
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])

  return { data }
}
