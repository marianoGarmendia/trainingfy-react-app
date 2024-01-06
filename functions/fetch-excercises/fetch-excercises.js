// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
// const API_KEY = "23a37debadmsh89268f610a958f7p1ce41cjsnb0abdc7f3b4c"
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '23a37debadmsh89268f610a958f7p1ce41cjsnb0abdc7f3b4c',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
}

const handler = async (event) => {
  const { url } = event.queryStringParameters.name
  const data = await fetch(url, options)
    .then((res) => res.json())
    .then((response) => {
      return response
    })

  return data
}

module.exports = { handler }
