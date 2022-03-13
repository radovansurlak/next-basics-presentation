import Link from 'next/link';

export default function Blog({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Link href={`3-todo-ssg/${todo.id}`}>
            <a>{todo.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const todoResponse = await fetch(
    'https://jsonplaceholder.typicode.com/todos'
  );

  const todos = await todoResponse.json();

  return {
    props: {
      todos,
    },
  };
}
