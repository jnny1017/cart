import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import { store } from './app/store';
import Cart from './features/cart/Cart';
import GlobalStyles from './styles/GlobalStyles';

const root = createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <>
    <GlobalStyles />
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </>,
);
