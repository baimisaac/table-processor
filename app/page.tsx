import { fetchTableData, calculateResults } from './utils/data'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default async function Home() {
  const tableData = await fetchTableData();
  const results = calculateResults(tableData);
  
  return (
    <main className="container mx-auto py-8 space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Table 1: Input Data</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Index #</TableHead>
                <TableHead>Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableData.map((row, i) => (
                <TableRow key={i}>
                  <TableCell>{row.index}</TableCell>
                  <TableCell>{row.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Table 2: Calculated Results</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Category</TableHead>
                <TableHead>Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Alpha</TableCell>
                <TableCell>{results.alpha}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Beta</TableCell>
                <TableCell>{results.beta.toFixed(2)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Charlie</TableCell>
                <TableCell>{results.charlie}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </main>
  )
}
