import RecipeList from '../../components/RecipeList'
import {projectFirestore} from  '../../firebase/config'


// styles
import './Home.css'
import { useEffect, useState } from 'react'

export default function Home() {
  const [data,setData] = useState(null)
  const [isPending,setIsPending] = useState(false)
  const [error, setError] = useState (false) 

useEffect(()=>{
 setIsPending(true)
                     // fire this when new data is added or changed
 const unsub = projectFirestore.collection('recipes').onSnapshot((snapshot)=>{ // live interaction
 //fetches data async    .get() .then((snapshot)=>{
     if (snapshot.empty){
        setError('No Recipes to Load')
        setIsPending(false)
      }
      else{
        let results = []
        snapshot.docs.forEach(doc =>{
          results.push ({id: doc.id,...doc.data() })
        })
        setData(results)
        setIsPending(false)
      }
    },(err)=>{
      setError(err.message)
      setIsPending(false)
    })
    return ()=>unsub();

},[])

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  )
}
