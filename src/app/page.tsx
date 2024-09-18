import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Typography from '@/components/ui/typography';

const {H1} = Typography

export default function Home() {
  return (
    <div className="container h-svh flex flex-col justify-start items-start">
      <H1>FAKE CRUD</H1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Limpiado, Joshua Barcial</TableCell>
            <TableCell>
              <Badge variant="success">Enrolled</Badge>
            </TableCell>
            <TableCell className="flex gap-2 justify-end">
              <Button>EDIT</Button>
              <Button>DELETE</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Limpiado, Joshua Barcial</TableCell>
            <TableCell>
              <Badge variant="destructive">Not Enrolled</Badge>
            </TableCell>
            <TableCell className="flex gap-2 justify-end">
              <Button>EDIT</Button>
              <Button>DELETE</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
