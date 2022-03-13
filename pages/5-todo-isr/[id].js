export default function Todo({ todo }) {
  return <h1>{todo.title}</h1>;
}

export async function getStaticPaths(context) {
  const allTodosResponse = await fetch(
    'https://jsonplaceholder.typicode.com/todos'
  );
  const todos = await allTodosResponse.json();

  return {
    paths: todos.map((todo) => ({
      params: {
        id: todo.id.toString(),
      },
    })),
    fallback: 'blocking',
  };
}

export async function getStaticProps(context) {
  const todoId = context.params.id;
  const todoResponse = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`
  );

  const todo = await todoResponse.json();

  return {
    props: {
      todo,
    },
    revalidate: 10,
  };
}
