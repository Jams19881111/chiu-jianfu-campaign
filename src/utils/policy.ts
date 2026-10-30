/** 政見條列重點：文字前後加 ** 可顯示粗體，例如 "**春節紅包**"。 */
export function parseHighlight(item: string) {
  const bold = item.startsWith("**") && item.endsWith("**");
  return { bold, text: bold ? item.slice(2, -2) : item };
}
