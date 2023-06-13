export function generateGetParams(params = {}) {
  const items = Object.entries(params)
    // @ts-ignore
    .filter((item) => [undefined, null].indexOf(item[1]) === -1)
    .map((item) => {
      const key = item[0];
      const title = item[1];
      return `${key}=${typeof title === "object" ? `[${title}]` : title}`;
    });
  return `${items.length > 0 ? "?" : ""}${items.join("&")}`;
}
