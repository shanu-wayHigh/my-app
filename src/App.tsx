import React from 'react'
import { TaskList } from '../src/components'
import { ToDoContainer, ToDoWrapper, ToDoHeading, GlobalStyle } from './styles'

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
    </>
  )
}

export default App
