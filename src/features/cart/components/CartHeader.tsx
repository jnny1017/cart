import { useNavigate } from 'react-router-dom';
import {
  GrPrevious,
} from 'react-icons/gr';

import {
  Header, IconButton,
} from '../../../styles/menuStyle';

export default function CartHeader() {
  const navigate = useNavigate();

  return (
    <Header>
      <IconButton onClick={() => navigate(-1)}>
        이전
        <GrPrevious />
      </IconButton>
    </Header>
  );
}
