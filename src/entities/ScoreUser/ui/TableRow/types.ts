import { CSSTransitionProps } from 'react-transition-group/CSSTransition';

import { ScoreUser } from '../../model';

export type AnimatedRowProps = {
  user: ScoreUser;
  removeUser: () => void;
} & CSSTransitionProps;
