import logo from './assets/todo-logo.svg'

import styles from './app.module.css'

export function App() {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <img src={logo} className="logo" alt="Vite logo" />

        <form>
          <input type='text' name='task' />
          <button>Criar</button>
        </form>
      </div>
    </div>
  )
}
