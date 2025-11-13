import { createClient } from "redis";

const client = createClient({ url: "redis://redis:6379" }); // connect ke container redis
await client.connect();

await client.set("pesan", "Hello from Docker Networking! 🚀");
const pesan = await client.get("pesan");

console.log("✅ Data dari Redis:", pesan);
await client.quit();
