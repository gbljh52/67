import { BASE_URL } from "./config";
export async function getJSON(path: string, signal: any) {
const response = await fetch(
BASE_URL + path, { signal }
);
if (!response.ok) {
const error = Object.assign(
new Error("HTTP " + response.status),
{ status: response.status }
);
throw error;
}
return response.json();
}