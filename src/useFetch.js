import { useState, useEffect } from 'react'

const url =
  'https://exercisedb.p.rapidapi.com/exercises/bodyPart/cardio?limit=5'

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '23a37debadmsh89268f610a958f7p1ce41cjsnb0abdc7f3b4c',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
}
export function useFetch(url) {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
  }, [])

  return { data }
}
