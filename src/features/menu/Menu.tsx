import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import MenuHeader from './components/MenuHeader';
import MenuList from './components/MenuList';
import { Wrap } from '../../styles/menuStyle';
import fetchMenu from './menu.thunks';
import Spinner from '../../components/Spinner';

export default function Menu() {
  const dispatch = useAppDispatch();

  const { menu: { isLoading } } = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(fetchMenu());
  }, [dispatch]);

  return (
    <Wrap>
      {isLoading && <Spinner />}
      <MenuHeader />
      <MenuList />
    </Wrap>
  );
}
