import { FormEvent, useState } from 'react'

import logo from './assets/todo-logo.svg'
import plusIcon from './assets/plus.svg'
import checkIcon from './assets/check.svg'
import uncheckIcon from './assets/uncheck.svg'
import trashIcon from './assets/trash.svg'

import styles from './app.module.css'

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
      </div>

      <div className={styles.tasksContainer}>
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

        <div className={styles.tasksHeader}>
          <div>
            <span>Tarefas criadas</span>
            <span className={styles.resultBox}>5</span>
          </div>
          <div>
            <span>Tarefas criadas</span>
            <span className={styles.resultBox}>2 de 5</span>
          </div>
        </div>

        <div className={styles.tasks}>
          <div className={`${styles.task}`}>
            <div>
              <button>
                <img src={uncheckIcon} style={{width: 24, height: 24}}/>
              </button>
            </div>

            <p>
              aaa aaaaaaaaaaaa aaa aaaaaaaaa aaaaaaaaaaaa aaa aaaaaaaaa aaaaaaaaaaaa aaa aaaaaaaaa aaaaaaaaaaaa aaa aaaaaaaaa aaaaaaaaaaaa aaa aaaaaaaaa aaaaaaaaaaaa aaa aaaaaa
            </p>

            <div>
              <button>
                <img src={trashIcon} style={{width: 24, height: 24}}/>
              </button>
            </div>
          </div>

          <div className={`${styles.task} ${styles.finished}`}>
            <div>
              <button>
                <img src={checkIcon} style={{width: 24, height: 24}}/>
              </button>
            </div>

            <p>
              aaa aaaaaaaaaaaa aaa aaaaaaaaa aaaaaaaaaaaa aaa aaaaaaaaa aaaaaaaaaaaa aaa aaaaaaaaa aaaaaaaaaaaa aaa aaaaaaaaa aaaaaaaaaaaa aaa aaaaaaaaa aaaaaaaaaaaa aaa aaaaaa
            </p>

            <div>
              <button>
                <img src={trashIcon} style={{width: 24, height: 24}}/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
