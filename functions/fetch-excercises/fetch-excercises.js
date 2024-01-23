// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '23a37debadmsh89268f610a958f7p1ce41cjsnb0abdc7f3b4c',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
}
const handler = async (event) => {
  const url = event.queryStringParameters.name

  try {
    const response = await fetch(url, options) // Realizar la solicitud fetch
    const data = await response.json() // Convertir la respuesta a JSON

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    }
  }
}

module.exports = { handler }

// try {
//   const subject = event.queryStringParameters.name || 'World'
//   return {
//     statusCode: 200,
//     body: JSON.stringify({ subject }),
//     // // more keys you can return:
//     // headers: { "headerName": "headerValue", ... },
//     // isBase64Encoded: true,
//   }
// } catch (error) {
//   return { statusCode: 500, body: error.toString() }
// }
