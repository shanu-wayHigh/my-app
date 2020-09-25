import React from 'react'
import { TaskList } from '../src/components'
import {
  ToDoContainer,
  ToDoWrapper,
  ToDoHeading,
  GlobalStyle,
  StyledFooter,
} from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <ToDoWrapper>
          <ToDoContainer>
            <ToDoHeading>My Todos</ToDoHeading>
            <TaskList />
          </ToDoContainer>
        </ToDoWrapper>
      </div>
      <StyledFooter>shanu.wayHigh@gmail.com | 9894212868</StyledFooter>
    </>
  )
}

export default App
