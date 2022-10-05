import requests from "../utils/requests";
import styles from "../styles/Nav.module.css";
import {useRouter} from "next/router";

export default function Nav(){
  const router= useRouter()
  return(
    <nav className={styles.navbar}>
    <div className={styles.nav}>
      {Object.entries(requests).map(([key,{title,url}])=>{
        return <p
         key={key}
          className={styles.navItem}
          onClick={()=>{router.push(`/?genres=${key}`)}}
          >{title}</p>
      })}
    </div>
    </nav>
  )
}
