import {
  GrAdd, GrSubtract,
} from 'react-icons/gr';

import {
  StyledCounter,
} from '../styles/menuStyle';
import Button from './Button';

interface Props {
  count: number,
  onDecrementClick:() => void,
  onIncrementClick:() => void,
}

export default function Counter({ count, onDecrementClick, onIncrementClick }: Props) {
  return (
    <StyledCounter>
      <Button disabled={count <= 1} onClick={onDecrementClick}>
        감소
        <GrSubtract />
      </Button>
      <div>{count}</div>
      <Button onClick={onIncrementClick}>
        증가
        <GrAdd />
      </Button>
    </StyledCounter>
  );
}
