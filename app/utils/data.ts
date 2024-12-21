export type TableData = {
  index: string;
  value: string;
}

export async function fetchTableData(): Promise<TableData[]> {
  const response = await fetch('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Table_Input-I9kG8VvKSuhAe7pfuWB22MkJtJxEQX.csv');
  const text = await response.text();
  
  // Skip header row and parse CSV
  const rows = text.split('\n').slice(1);
  return rows.map(row => {
    const [index, value] = row.split(',');
    return {
      index: index.trim(),
      value: value.trim()
    };
  });
}

export function calculateResults(data: TableData[]) {
  const getValue = (index: string) => {
    const row = data.find(row => row.index === index);
    return row ? parseInt(row.value) : 0;
  };

  return {
    alpha: getValue('A5') + getValue('A20'),
    beta: getValue('A15') / getValue('A7'),
    charlie: getValue('A13') * getValue('A12')
  };
}
