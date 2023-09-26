import { TransitionGroup } from 'react-transition-group';
import { Paper, Table, TableBody, TableContainer } from '@mui/material';
import UserScoreTableRow from '../../entities/ScoreUser/ui/TableRow';
import UserScoreTableHeader from '../../entities/ScoreUser/ui/TableHeader';
import { UserTableProps } from './types';

function LeaderboardTable({ removeUser, users }: UserTableProps) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="users table">
        <UserScoreTableHeader />
        <TableBody>
          <TransitionGroup component={null} exit={false}>
            {users?.map((row) => (
              <UserScoreTableRow
                timeout={500}
                classNames="item"
                key={row.userId}
                user={row}
                removeUser={() => removeUser(row)}
              />
            ))}
          </TransitionGroup>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default LeaderboardTable;
