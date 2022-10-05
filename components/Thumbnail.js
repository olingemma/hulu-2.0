import Image from "next/image";
import {ThumbUpIcon} from "@heroicons/react/outline";
import styles from "../styles/Thumbnail.module.css";

export default function Thumbnail({result}){
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return(
    <div className={styles.group}>
      <Image
        layout="responsive"
        src={`${BASE_URL}${result.backdrop_path|| result.poster_path}`||`${BASE_URL}${result.poster_path}`}
        width={400}
        height={250}
        />
        <div className={styles.overview}>
          <p> {result.overview}</p>
          <h2>{result.title || result.original_name}</h2>
          <p className={styles.details}>
            {result.media_type&& `${result.media_type}  `}{""}

            {result.release_date|| result.first_air_date} {""}
            <ThumbUpIcon className={styles.icon} /> {result.vote_count}
          </p>
        </div>
    </div>
  )
}
