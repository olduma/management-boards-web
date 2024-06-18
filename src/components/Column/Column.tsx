import styled from '@emotion/styled';
import {
  Droppable,
  Draggable,
  DraggableProvided,
  DroppableProvided,
  DroppableStateSnapshot,
} from 'react-beautiful-dnd';
import Task from '../Task/Task';

interface TaskListProps {
  isDraggingOver: boolean;
}

interface TaskType {
  id: string;
  content: string;
}

interface ColumnProps {
  tasks: TaskType[];
  column: {
    id: string;
    title: string;
    taskIds: string[];
  };
  index: number;
}

// Styled components with props types
const Container = styled.div`
  margin: 8px;
  border-radius: 2px;
  border: 1px solid lightgrey;
  display: flex;
  flex-direction: column;
  width: 230px;
  background: white;
`;

const Title = styled.h3`
  padding: 8px;
`;

const TaskList = styled.div<TaskListProps>`
  padding: 8px;
  flex-grow: 1;
  min-height: 100px;
  transition: background-color ease 0.2s;
  background-color: ${props =>
    props.isDraggingOver ? 'palevioletred' : 'white'};
`;

const Column: React.FC<ColumnProps> = ({ tasks, column, index }) => {
  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided: DraggableProvided) => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Title>{column.title}</Title>
          <Droppable droppableId={column.id} type="task">
            {(p: DroppableProvided, snapshot: DroppableStateSnapshot) => (
              <TaskList
                isDraggingOver={snapshot.isDraggingOver}
                ref={p.innerRef}
                {...p.droppableProps}
              >
                {tasks.map((task, i) => (
                  <Task key={task.id} task={task} index={i} />
                ))}
                {p.placeholder}
              </TaskList>
            )}
          </Droppable>
        </Container>
      )}
    </Draggable>
  );
};

export default Column;
