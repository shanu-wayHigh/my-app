import styled from 'styled-components'

export const ItemPanel = styled.section`
  width: 400px;
  height: 60px;
  background-color: #ffffff;
  box-shadow: 0px 0px 1rem rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`
export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  .task-heading {
    margin-bottom: 0.5rem;
    font-size: 0.725rem;
  }
`
export const RightSection = styled.div`
  .edit-icon {
    margin-right: 1rem;
  }
`

export const StyledInput = styled.input`
  border: 0;
  background-color: #ffffff;
`
