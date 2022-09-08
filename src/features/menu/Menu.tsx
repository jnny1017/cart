import MenuHeader from './components/MenuHeader';
import MenuList from './components/MenuList';
import Spinner from '../../components/Spinner';
import { useMenusQuery } from '../../app/services/menu';
import { Wrap } from '../../styles/menuStyle';

export default function Menu() {
  const { isError, isLoading, error } = useMenusQuery();

  if (isError) {
    return <div>{JSON.stringify(error)}</div>;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Wrap>
      <MenuHeader />
      <MenuList />
    </Wrap>
  );
}
