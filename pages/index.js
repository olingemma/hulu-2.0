import Axios from "axios";
import requests from "../utils/requests";
import Head from 'next/head';
import Image from 'next/image';
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
export default function Home({results}) {


  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
      </Head>
<Header/>
<Nav/>
<Results results={results}/>

    </div>
  )
}


export async function getServerSideProps(context){
  const genre= context.query.genres;
  console.log(genre)
  const request= await Axios.get(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`)
  const data = request.data
  return {
    props:{
      results:data.results
    }
  }
}
