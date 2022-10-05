import styles from "../styles/HeaderItem.module.css";

export default function HeaderItem({title,Icon}){
  return(
    <div className={styles.headerItem}>
      <Icon className={styles.icon}/>
      <p className={styles.title}>{title}</p>
    </div>
  )
}
