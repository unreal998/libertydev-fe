import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './modules/header';
import MainPage from './modules/mainPage';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
