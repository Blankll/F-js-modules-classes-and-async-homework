import axios from 'axios'
import { get } from 'fetch-mock';

// export const getPoetry = async () => {
//     try{
//     const response = await fetch('https://v1.jinrishici.com/all.json', { method: 'GET' });
//     const {origin, author, content} = await response.json();
//     return [origin, author, content];
//     } catch (e) { 
//         console.log(e)
//         return []
//     }
// }

export const getPoetry = () => {
    return fetch('https://v1.jinrishici.com/all.json', { method: 'GET' })
      .then(data => data.json())
      .then(data => [data.origin, data.author, data.content])
      .catch ((e) => { 
        console.log(e)
        return []
    });
}