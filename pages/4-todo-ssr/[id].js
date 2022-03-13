export default function Todo({ todo }) {
  return <h1>{todo.title}</h1>;
}

export async function getServerSideProps(context) {
  const todoId = context.query.id;
  const todoResponse = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`
  );

  const todo = await todoResponse.json();

  return {
    props: {
      todo,
    },
  };
}
