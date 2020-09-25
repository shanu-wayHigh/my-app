import styled from 'styled-components'

export const NewTaskPanel = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`
export const NewTaskInput = styled.input`
  width: 200px;
  height: 30px;
  background: #ffffff;
  padding: 0 0.5rem;
  border-radius: 0 0.25rem 0.25rem 0;
  border: 0;
`

export const NoTaskMessage = styled.h4`
  color: red;
  font-weight: normal;
  margin-top: 0;
`
export const ListWrapper = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const SvgWrapper = styled.div`
  border-radius: 0.25rem 0 0 0.25rem;
  background-color: tomato;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.25rem;
  svg {
    fill: #ffffff;
  }
`
