/**
 * @file {{name}}/index.js
 * @see https://developer.wordpress.org/rest-api/reference/pages/
 * @url http://localhost:3000/api/{{name}}
 */
import fetch from 'isomorphic-unfetch'

export default async (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  try {
    const url = `SOME URL TO FETCH`
    console.log('Fetching content from url', url)
    const results = await fetch(url)
    const content = await results.json()
    res.statusCode = 200
    res.end(JSON.stringify(content))
  } catch (error) {
    console.error(error);
    res.statusCode = error.code
    res.end(JSON.stringify(error))
  };
};
