import styles from "../styles/Header.module.css";
import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {HomeIcon,CollectionIcon,BadgeCheckIcon,UserIcon,SearchIcon,LightningBoltIcon} from '@heroicons/react/outline';

export default function Header(){
  return(
    <header className={styles.header}>
      <div className={styles.icons}>
        <HeaderItem title='Home' Icon={HomeIcon}/>
        <HeaderItem title='Trending' Icon={LightningBoltIcon}/>
        <HeaderItem title='Verified' Icon={BadgeCheckIcon}/>
        <HeaderItem title='Collection' Icon={CollectionIcon}/>
        <HeaderItem title='Search' Icon={SearchIcon}/>
        <HeaderItem title='Account' Icon={UserIcon}/>
      </div>

      <Image
          className={styles.headerImage}
          src= "https://links.papareact.com/ua6"
          width={200}
          height={100}
      />
    </header>
  )
}
