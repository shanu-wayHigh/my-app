import React from 'react'
import { Item } from '../Item'
import { AddIcon } from '../../IconGallery'
import {
  NewTaskPanel,
  NewTaskInput,
  NoTaskMessage,
  ListWrapper,
  SvgWrapper,
} from './styles'

function TaskList() {
  const [list, updateList] = React.useState([])
  const [value, setValue] = React.useState('')
  const inputRef: any = React.createRef()
  const inputBoxRef: any = React.useRef([])

  const handleNewTask = e => {
    e.preventDefault()
    if (!value) return
    updateList([
      ...list,
      { taskName: value, uniqueKey: Date.now(), isEditMode: false },
    ])
    setValue('')
  }

  const deleteTask = index => {
    const newTasks = [...list]
    newTasks.splice(index, 1)
    updateList(newTasks)
  }

  const editTask = uniqueKey => {
    list.map((item, index) => {
      const newList = [...list]
      if (item.uniqueKey === uniqueKey) {
        newList[index].isEditMode = true
        console.log({ inputBoxRef })
        inputBoxRef.current[index].focus()
      } else {
        newList[index].isEditMode = false
      }
      updateList(newList)
    })
  }

  const handleOnEditComplete = (e, uniqueKey) => {
    if (e.keyCode === 13) {
      list.map((item, index) => {
        const newList = [...list]
        if (item.uniqueKey === uniqueKey) {
          newList[index].isEditMode = false
          inputBoxRef.current[index].blur()
        }
        updateList(newList)
      })
    }
  }

  const handleInputChange = (task, key) => {
    list.map((item, index) => {
      const newList = [...list]
      if (item.uniqueKey === key) {
        console.log({ newList, item: newList[index] })
        newList[index].taskName = task
      }
      updateList(newList)
    })
  }

  return (
    <>
      <NewTaskPanel onSubmit={handleNewTask}>
        <SvgWrapper>
          <AddIcon onClick={handleNewTask} />
        </SvgWrapper>
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
            return (
              <Item
                {...item}
                index={index}
                inputBoxRef={inputBoxRef}
                editTask={editTask}
                deleteTask={deleteTask}
                handleInputChange={handleInputChange}
                handleOnEditComplete={handleOnEditComplete}
              />
            )
          })
        ) : (
          <NoTaskMessage>Start adding todos!</NoTaskMessage>
        )}
      </ListWrapper>
    </>
  )
}

export { TaskList }
export default TaskList
