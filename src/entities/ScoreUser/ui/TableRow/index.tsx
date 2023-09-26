import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Avatar, IconButton, TableCell, TableRow } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import { AnimatedRowProps } from './types';

function ScoreUserTableRow({
  user,
  removeUser,
  ...transitionProps
}: AnimatedRowProps) {
  const nodeRef = useRef(null);
  const { avatar, username, email, score } = user;

  return (
    <CSSTransition nodeRef={nodeRef} {...transitionProps}>
      <TableRow
        sx={{
          '&:last-child td, &:last-child th': { border: 0 },
        }}
        ref={nodeRef}
      >
        <TableCell component="th" scope="row">
          <Avatar src={avatar} variant="square" alt={username} />
        </TableCell>
        <TableCell align="left">{username}</TableCell>
        <TableCell align="left">{email}</TableCell>
        <TableCell align="left">
          {score.toLocaleString('en', { useGrouping: true })}
        </TableCell>
        <TableCell align="center">
          <IconButton color="primary" aria-label="delete" onClick={removeUser}>
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    </CSSTransition>
  );
}

export default ScoreUserTableRow;
