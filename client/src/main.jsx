import './index.css';
import App from './App.jsx';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from "react-redux";
import store from '../src/Components/Redux/store';
import { createRoot } from 'react-dom';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);