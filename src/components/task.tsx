import checkIcon from '../assets/check.svg'
import uncheckIcon from '../assets/uncheck.svg'
import trashIcon from '../assets/trash.svg'

export interface ITask {
  createdAt: string
  text: string
  isFinished?: boolean
}

interface TaskProps {
  task: ITask
  handleUncheckFinished(createdAt: string): void
  handleCheckFinished(createdAt: string): void
  handleDeleteTask(createdAt: string): void
}

import styles from '../app.module.css'

export function Task({ task, handleUncheckFinished, handleCheckFinished, handleDeleteTask }: TaskProps) {
  
  return (
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
)
}