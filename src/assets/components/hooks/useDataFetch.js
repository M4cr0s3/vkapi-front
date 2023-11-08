// import {useState, useEffect} from "react";
// import axios from "axios";
// import {API_URL} from "../../../API_URL.js";
//
// const useDataFetch = (query) => {
//
//     const [error, setError] = useState('')
//     const [response, setResponse] = useState('')
//     const [loading, setLoading] = useState(true)
//
//     useEffect(() => {
//         const dataFetch = async () => {
//             try {
//                 const resp = await axios.get(`${API_URL}/find_city?city_name=${query}`)
//                 if (!resp.data) {
//                     throw new Error('Error')
//                 }
//                 setResponse(resp.data.cities)
//             } catch (error) {
//                 setError(error)
//                 setLoading(false)
//             } finally {
//                 setLoading(false)
//             }
//
//         }
//         dataFetch()
//     }, [])
//
//     return {error, response, loading}
// }
//
// export default useDataFetch;