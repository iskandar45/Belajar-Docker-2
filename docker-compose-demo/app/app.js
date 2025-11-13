import { createClient } from "redis";

const client = createClient({ url: "redis://redis:6379" });
await client.connect();

await client.set("msg", "Hello from Docker Compose! 💫");
const msg = await client.get("msg");

console.log("✅ Pesan dari Redis:", msg);
await client.quit();
