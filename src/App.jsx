import { Header } from './components/Header'
import { Post } from './Post'
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Julio Novais" text="Testando 1" />
          <Post author="Catharina Mattavelli" text="Testando 2 1 3 4" />
        </main>
      </div>
    </>
  )
}
