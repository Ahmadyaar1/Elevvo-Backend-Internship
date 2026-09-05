import app from "./app";

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Server running on http://localhost:" + PORT);
  console.log("API Key required: elevvo-secret-key-123");
});
