import app from "./app";

const PORT = 7000;

app.listen(PORT, () => {
  console.log("Server running on http://localhost:" + PORT);
  console.log("Swagger Docs → http://localhost:" + PORT + "/api-docs");
});