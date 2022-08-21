import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  background-color: #3179ba;
  height: 100%;
  width: 100%;
  color: #bbb;
  align-items: flex-start;
`

export const ColumnContainer = styled.div`
  background-color: #ebecf0;
  width: 300px;
  min-height: 40px;
  border-radius: 5px;
  margin: 20px;
  padding: 10px;
`

export const ColumnTitle = styled.div`
  font-weight: bold;
  padding: 5px 10px;
`

export const CardContainer = styled.div`
  background-color: #fff;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  max-width: 280px;
  border-radius: 5px;
  cursor: pointer;
`