import pkg from "pg";
const { Client } = pkg;

const client = new Client({
  host: "db",      // nama service PostgreSQL di docker-compose.yml
  user: "postgres",
  password: "postgres",
  database: "testdb"
});

try {
  await client.connect();
  console.log("✅ Terhubung ke PostgreSQL!");

  await client.query("CREATE TABLE IF NOT EXISTS users(id SERIAL PRIMARY KEY, name VARCHAR(50));");
  await client.query("INSERT INTO users(name) VALUES('Nur Imam Iskandar');");
  
  const res = await client.query("SELECT * FROM users;");
  console.table(res.rows);

  await client.end();
} catch (err) {
  console.error("❌ Gagal konek ke database:", err.message);
}
