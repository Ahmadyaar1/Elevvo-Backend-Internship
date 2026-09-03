import { performance } from "perf_hooks";


interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}



async function fetchDataEngine() {
  console.log("Starting Fault-Tolerant Async Data Engine...\n");

  const start = performance.now();


  const endpoints = [
    "https://jsonplaceholder.typicode.com/posts?_limit=5",
    "https://jsonplaceholder.typicode.com/users?_limit=5",
    "https://jsonplaceholder.typicode.com/todos?_limit=5",
    "https://jsonplaceholder.typicode.com/invalid-endpoint" // This will fail on purpose
  ];

  const results = await Promise.allSettled(
    endpoints.map(async (url) => {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status} - ${url}`);
      }

      return response.json();
    })
  );

  const posts: Post[] = [];
  const users: User[] = [];
  const todos: Todo[] = [];
  const errors: string[] = [];

  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      const data = result.value;

      if (index === 0) {
        posts.push(...(data as Post[]));
      } else if (index === 1) {
        users.push(...(data as User[]));
      } else if (index === 2) {
        todos.push(...(data as Todo[]));
      }
    } else {
      const errorMsg = `Failed to fetch → ${endpoints[index]} | Reason: ${result.reason}`;
      console.error(errorMsg);
      errors.push(errorMsg);
    }
  });

  const end = performance.now();
  const duration = (end - start).toFixed(2);

  console.log("\n========== RESULTS ==========");
  console.log(`Posts fetched   : ${posts.length}`);
  console.log(`Users fetched   : ${users.length}`);
  console.log(`Todos fetched   : ${todos.length}`);
  console.log(`Errors occurred : ${errors.length}`);
  console.log(`Total time      : ${duration} ms`);
  console.log("=============================\n");

  return {
    posts,
    users,
    todos,
    errors,
    duration: `${duration} ms`
  };
}


fetchDataEngine()
  .then((data) => {
    console.log("Final Summary:");
    console.log(JSON.stringify({
      postsCount: data.posts.length,
      usersCount: data.users.length,
      todosCount: data.todos.length,
      errorsCount: data.errors.length,
      duration: data.duration
    }, null, 2));
  })
  .catch((err) => {
    console.error("Unexpected error:", err);
  });