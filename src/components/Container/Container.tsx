import styled from '@emotion/styled';

interface ContainerProps {
  isDraggingOver: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  height: 500px;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: ${props => (props.isDraggingOver ? '#639ee2' : 'inherit')};
`;
