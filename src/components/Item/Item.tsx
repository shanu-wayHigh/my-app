import React from 'react'
import { EditIcon, DeleteIcon } from '../../IconGallery'
import { ItemPanel, LeftSection, RightSection, StyledInput } from './styles'

function Item(props: any) {
  const {
    taskName = 'task with name',
    deleteTask = () => {},
    index,
    handleInputChange,
    uniqueKey,
  } = props

  return (
    <ItemPanel>
      <LeftSection>
        <span className="task-heading">Task</span>
        <StyledInput
          type="text"
          value={taskName}
          onChange={e => handleInputChange(e.target.value, uniqueKey)}
        />
      </LeftSection>
      <RightSection>
        <EditIcon className="edit-icon" />
        <DeleteIcon onClick={() => deleteTask(index)} />
      </RightSection>
    </ItemPanel>
  )
}

export { Item }
export default Item
