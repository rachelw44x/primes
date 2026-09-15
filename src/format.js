export function formatTable(table) {
  const largestNumber = table[table.length - 1][table[0].length - 1];
  const columnWidth = String(largestNumber).length;

  return table
    .map((row) => {
      const formattedRow = row.map((cell) =>
        String(cell).padStart(columnWidth, " "),
      );

      return `| ${formattedRow.join(" | ")} |`;
    })
    .join("\n");
}
