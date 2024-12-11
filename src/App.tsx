import { FormEvent, useState } from 'react'

import logo from './assets/todo-logo.svg'
import plusIcon from './assets/plus.svg'

import styles from './app.module.css'

import { ITask, Task } from './components/task'

export function App() {

  const [taskInput, setTaskInput] = useState("")
  const [tasks, setTasks] = useState<ITask[]>([])

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const date = new Date().toISOString()

    if (!taskInput) return
    
    setTasks(prevTasks => {
      const newTask: ITask = {
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
            <span>Tarefas concluídas</span>
            <span className={styles.resultBox}>{tasks.filter(task => task.isFinished == true).length} de {tasks.length}</span>
          </div>
        </div>

        <div className={styles.tasks}>
          {tasks.map(task => (
            <Task 
              task={task}
              handleCheckFinished={handleCheckFinished}
              handleUncheckFinished={handleUncheckFinished}
              handleDeleteTask={handleDeleteTask}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
