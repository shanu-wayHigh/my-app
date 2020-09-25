import React from 'react'
import { EditIcon, DeleteIcon } from '../../IconGallery'
import { ItemPanel, LeftSection, RightSection, StyledInput } from './styles'

function Item(props: any) {
  const {
    index = 0,
    taskName = 'task with name',
    editTask = () => {},
    deleteTask = () => {},
    handleInputChange = () => {},
    uniqueKey,
    isEditMode,
    inputBoxRef,
    handleOnEditComplete = () => {},
  } = props

  return (
    <ItemPanel>
      <LeftSection>
        <span className="task-heading">Task</span>
        <StyledInput
          type="text"
          value={taskName}
          className={isEditMode === true ? 'enable' : 'disable'}
          // autoFocus={isEditMode}
          onChange={e => handleInputChange(e.target.value, uniqueKey)}
          onKeyDown={e => handleOnEditComplete(e, uniqueKey)}
          ref={el => (inputBoxRef.current[index] = el)}
        />
      </LeftSection>
      <RightSection>
        <EditIcon className="edit-icon" onClick={() => editTask(uniqueKey)} />
        <DeleteIcon className="delete-icon" onClick={() => deleteTask(index)} />
      </RightSection>
    </ItemPanel>
  )
}

export { Item }
export default Item
