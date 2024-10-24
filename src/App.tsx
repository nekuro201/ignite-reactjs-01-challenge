import logo from './assets/todo-logo.svg'
import plusIcon from './assets/plus.svg'

import styles from './app.module.css'
import { FormEvent, useState } from 'react'

export function App() {

  const [task, setTask] = useState('')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    setTask('')
  }

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <img src={logo} className="logo" alt="Vite logo" />

        <form onSubmit={handleSubmit}>
          <input 
            type='text' 
            name='task' 
            value={task} 
            onChange={(e) => setTask(e.target.value)}
            placeholder='Adicione uma nova tarefa'
          />
          <button type='submit'>
            Criar
            <img src={plusIcon} />
          </button>
        </form>
      </div>

      <div className={styles.tasksContainer}>
        <div className={styles.tasksHeader}>
          <div>
            <span>Tarefas criadas</span>
            <span className={styles.resultBox}>0</span>
          </div>
          <div>
            <span>Tarefas criadas</span>
            <span className={styles.resultBox}>0</span>
          </div>
        </div>

        <div className='tasks'>
          
        </div>
      </div>
    </div>
  )
}
