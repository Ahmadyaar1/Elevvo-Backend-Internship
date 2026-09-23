import app from "./app";

const PORT = 6000;

app.listen(PORT, () => {
  console.log("Server running on http://localhost:" + PORT);
  console.log("Database: SQLite with Prisma ORM");
});