import styled from 'styled-components';
import { Row, Col } from 'antd';
import { Button } from 'shared/styled';

// eslint-disable-next-line
export const StyledCategories = styled(Row).attrs({ type: 'flex' })`
  flex-wrap: wrap;
`;

const isDroppableStyles = `
  background: #47D787;
  color: white;
  `;

const isOverStyles = `
  background: orange;
  color: white;
  border: 1px solid #47D787;
  `;

const isActiveStyles = `
  background: #47D787;
  color: white;
  `;

export const StyledCategory = styled(Col)`
  &:hover {
    background: #47d787;
    color: white;
  }
  border: 2px solid orange;
  overflow: hidden;
  position: relative;
  display: flex;
  padding: 5px;
  height: 41px;
  margin-right: 5px;
  border-radius: 5px;
  ${({ canDrop }) => canDrop && isDroppableStyles}
  ${({ isOver }) => isOver && isOverStyles}
  ${({ isActive }) => isActive && isActiveStyles}
`;

export const StyledAddCategoryButton = styled(Button)`
  color: orange;
`;

export const StyledNewCategory = styled(StyledCategory)`
  background: orange;
  align-items: center;
`;

export const StyledCategoryInput = styled.input`
  background: none;
  border: 0;
  padding: 0.5em;
  height: 100%;
  font-weight: bold;
  width: 100px;
  margin: 1px 5px;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: none;
  outline: none;
  color: black;
`;
