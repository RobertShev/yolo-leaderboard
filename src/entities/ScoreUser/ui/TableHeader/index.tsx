import { TableCell, TableHead, TableRow } from '@mui/material';

function UserScoreTableHeader() {
  return (
    <TableHead>
      <TableRow>
        <TableCell />
        <TableCell align="left">Username</TableCell>
        <TableCell align="left">Email</TableCell>
        <TableCell align="left">Score</TableCell>
        <TableCell />
      </TableRow>
    </TableHead>
  );
}

export default UserScoreTableHeader;
