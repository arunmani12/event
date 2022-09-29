import Header from '../components/Head'
import Main from '../components/Main'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>

      <Header/>
      <Main/>
     
    </div>
  )
}
