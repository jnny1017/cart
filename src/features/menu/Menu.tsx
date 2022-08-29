import MenuHeader from './components/MenuHeader';
import MenuList from './components/MenuList';
import { Wrap } from './menuStyle';

export default function Menu() {
  return (
    <Wrap>
      <MenuHeader />
      <MenuList />
    </Wrap>
  );
}
