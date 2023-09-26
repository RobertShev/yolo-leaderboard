import { TransitionGroup } from 'react-transition-group';
import { Paper, Table, TableBody, TableContainer } from '@mui/material';

import ScoreUserTableRow from '../../entities/ScoreUser/ui/TableRow';
import ScoreUserTableHeader from '../../entities/ScoreUser/ui/TableHeader';
import { LeaderboardTableProps } from './types';
import './_style.css';

function LeaderboardTable({ removeUser, users }: LeaderboardTableProps) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="users table">
        <ScoreUserTableHeader />
        <TableBody>
          <TransitionGroup component={null} exit={false}>
            {users?.map((row) => (
              <ScoreUserTableRow
                timeout={500}
                classNames="table__row"
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
