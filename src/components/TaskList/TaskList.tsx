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
    updateList([...list, { taskName: value, uniqueKey: Date.now() }])
    setValue('')
  }

  const deleteTask = index => {
    const newTasks = [...list]
    newTasks.splice(index, 1)
    updateList(newTasks)
  }

  const handleInputChange = (task, key) => {
    list.map((item, index) => {
      const newList = [...list]
      if (item.uniqueKey === key) {
        console.log({ newList, item: newList[index] })
        newList[index].taskName = task
      }
      updateList(newList)
      return item
    })
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
          list.map((item, index) => {
            console.log({ listItem: item })
            return (
              <Item
                {...item}
                deleteTask={deleteTask}
                index={index}
                handleInputChange={handleInputChange}
              />
            )
          })
        ) : (
          <NoTaskMessage>Currently no todos! Enjoy</NoTaskMessage>
        )}
      </ListWrapper>
    </>
  )
}

export { TaskList }
export default TaskList
