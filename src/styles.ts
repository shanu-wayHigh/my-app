import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  #root {
    position: fixed;
    height: 100%;
    width: 100%;
    overflow: auto;
    background-color: #cccccc;
  }
`
export const ToDoWrapper = styled.section``
export const ToDoContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0 0 100%;
  width: 100%;
  text-align: center;
  padding: 8px;
`
export const ToDoHeading = styled.h1``
export const StyledFooter = styled.footer`
  font-size: 12px;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 0.5rem;
`
