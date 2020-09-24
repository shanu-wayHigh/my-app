import React from 'react'
import { EditIcon, DeleteIcon } from '../../IconGallery'
import { ItemPanel, LeftSection, RightSection } from './styles'

function Item(props: any) {
  const { taskName = 'task with name', deleteTask = () => {}, index } = props

  return (
    <ItemPanel>
      <LeftSection>
        <span className="task-heading">Task</span>
        <span>{taskName}</span>
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
