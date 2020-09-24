import React from 'react'
import { Item } from '../Item'
import { AddIcon } from '../../IconGallery'
import {
  NewTaskPanel,
  NewTaskInput,
  NoTaskMessage,
  ListWrapper,
} from './styles'

function TaskList() {
  const [list, updateList] = React.useState([])
  const [value, setValue] = React.useState('')
  const inputRef: any = React.createRef()

  const handleNewTask = e => {
    e.preventDefault()
    if (!value) return

    updateList([...list, { taskName: value }])
    setValue('')
  }

  const deleteTask = index => {
    const newTasks = [...list]
    console.log({ index, newTasks })
    newTasks.splice(index, 1)
    updateList(newTasks)
  }

  return (
    <>
      <NewTaskPanel onSubmit={handleNewTask}>
        <AddIcon onClick={handleNewTask} />
        <NewTaskInput
          type="text"
          className="input"
          value={value}
          placeholder="Add a new task"
          onChange={e => setValue(e.target.value)}
          ref={inputRef}
        />
      </NewTaskPanel>
      <ListWrapper>
        {list && list.length > 0 ? (
          list.map((item, index) => (
            <Item
              {...item}
              deleteTask={deleteTask}
              index={index}
              key={`${item.value}-${index}`}
            />
          ))
        ) : (
          <NoTaskMessage>Currently no todos! Enjoy</NoTaskMessage>
        )}
      </ListWrapper>
    </>
  )
}

export { TaskList }
export default TaskList
