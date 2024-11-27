import { FormEvent, useState } from 'react'

import logo from './assets/todo-logo.svg'
import plusIcon from './assets/plus.svg'
import checkIcon from './assets/check.svg'
import uncheckIcon from './assets/uncheck.svg'
import trashIcon from './assets/trash.svg'

import styles from './app.module.css'

interface Task {
  createdAt: string
  text: string
  isFinished?: boolean
}

export function App() {

  const [taskInput, setTaskInput] = useState("")
  const [tasks, setTasks] = useState<Task[]>([])

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const date = new Date().toISOString()

    if (!taskInput) return
    
    setTasks(prevTasks => {
      const newTask: Task = {
        createdAt: date,
        text: taskInput,
        isFinished: false
      }

      return [newTask, ...prevTasks]
    })

    setTaskInput('')
  }

  function handleCheckFinished(createdAt: string) {
    setTasks(prevTasks => {
      return prevTasks.map(task => {
        if (task.createdAt === createdAt)
          task.isFinished = true
        return task
      })
    })
  }

  function handleUncheckFinished(createdAt: string) {
    setTasks(prevTasks => {
      return prevTasks.map(task => {
        if (task.createdAt === createdAt)
          task.isFinished = false
        return task
      })
    })
  }

  function handleDeleteTask(createdAt: string) {
    setTasks(prevTasks => {
      return prevTasks.filter(task => task.createdAt !== createdAt)
    })
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
            name='task-input' 
            placeholder='Adicione uma nova tarefa'
            value={taskInput}
            onChange={e => setTaskInput(e.target.value)}
          />
          <button type='submit'>
            Criar
            <img src={plusIcon} />
          </button>
        </form>

        <div className={styles.tasksHeader}>
          <div>
            <span>Tarefas criadas</span>
            <span className={styles.resultBox}>{tasks.length}</span>
          </div>
          <div>
            <span>Tarefas criadas</span>
            <span className={styles.resultBox}>{tasks.filter(task => task.isFinished == true).length} de {tasks.length}</span>
          </div>
        </div>

        <div className={styles.tasks}>
          {tasks.map(task => (
            <div key={task.createdAt} className={`${styles.task} ${task.isFinished && styles.finished}`}>
              <div>
                {task.isFinished ? (
                  <button onClick={() => handleUncheckFinished(task.createdAt)}>
                      <img src={checkIcon} style={{width: 24, height: 24}}/>
                  </button>
                ) : (
                  <button onClick={() => handleCheckFinished(task.createdAt)}>
                    <img src={uncheckIcon} style={{width: 24, height: 24}}/>
                  </button>
                )}
              </div>

              <p>
                {task.text}
              </p>

              <div>
                <button onClick={() => handleDeleteTask(task.createdAt)}>
                  <img src={trashIcon} style={{width: 24, height: 24}}/>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
