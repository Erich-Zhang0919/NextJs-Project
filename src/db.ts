import { JSONFilePreset } from "lowdb/node";

const defaultData = { posts: [] }
const db = await JSONFilePreset('db.json', defaultData)

export default db;
