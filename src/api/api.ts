import { getJSON } from "./request";
export function toBook(raw: { volumeInfo: any; id: any; }) {
  const info = raw.volumeInfo;
  return {
    id: raw.id,
    title: info.title,
    author: info.authors?.join(", ")
      ?? "Автор неизвестен",
    description: info.description ?? "",
  };
}

export async function getBooks(page = 1, signal: any) {
  const payload = await getJSON(
    "/public/books?page=" + page + "&limit=3",
    signal
  );
  return payload.data.data.map(toBook);
}
export async function getBook(id: number, signal: any) {
  const payload = await getJSON(
    "/public/books/" + id,
    signal
  );
  return toBook(payload.data);
}