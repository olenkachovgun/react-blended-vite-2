import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = ({ todos, deleteTodo, editTodo }) => {
  return (
    <Grid>
      {todos.map((todo, i) => (
        <GridItem key={todo.id}>
          <TodoListItem
            todo={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            count={i + 1}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default TodoList;
