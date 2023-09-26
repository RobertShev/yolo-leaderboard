import { CSSTransitionProps } from 'react-transition-group/CSSTransition';

import { ScoreUser } from '../../model';

export type ScoreUserTableRowProps = {
  user: ScoreUser;
  removeUser: () => void;
} & CSSTransitionProps;
