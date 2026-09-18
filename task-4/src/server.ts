import app from "./app";

const PORT = 4000;

app.listen(PORT, () => {
  console.log("Server running on http://localhost:" + PORT);
  console.log("Default Admin → email: admin@elevvo.tech | password: admin123");
});