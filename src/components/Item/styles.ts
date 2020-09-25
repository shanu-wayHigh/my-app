import styled from 'styled-components'

export const ItemPanel = styled.section`
  width: 400px;
  background-color: #ffffff;
  box-shadow: 0px 0px 1rem rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  border-radius: 0.25rem;

  @media (min-width: 0px) and (max-width: 767px) {
    width: 100%;
  }
`
export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  .task-heading {
    margin-bottom: 0.5rem;
    font-size: 0.725rem;
  }
`
export const RightSection = styled.div`
  .edit-icon {
    margin-right: 1rem;
    fill: #3ac7f7;
  }
  .delete-icon {
    fill: #f94949;
  }
`

export const StyledInput = styled.input`
  font-size: 20px;
  border: 2px solid #ffffff;
  border-radius: 0.25rem;
  &:focus {
    border: 2px solid #cccccc;
    outline: 0;
  }
`
