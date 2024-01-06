import { useState, useEffect } from 'react'

// const url =
//   'https://exercisedb.p.rapidapi.com/exercises/bodyPart/cardio?limit=5'

export function useFetch(url) {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(
      `/.netlify/functions/fetch-excercises?name="https://exercisedb.p.rapidapi.com/exercises/bodyPart/cardio?limit=5"`
    ).then((res) => setData(res))
  }, [])
  // useEffect(() => {
  //   fetch(url, options)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data)
  //     })
  // }, [])

  return { data }
}
