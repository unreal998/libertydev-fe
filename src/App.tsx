import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './modules/header';
import MainPage from './modules/mainPage';
import Footer from './modules/footer';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
