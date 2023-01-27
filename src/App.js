import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Footer from './share/Footer';
import Navbar from './share/Navbar';
import { publicRouter } from './router/publicRouter';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {
          publicRouter.map(({ path, Component }, index) =>
            <Route path={path} element={<Component />} />
          )
        }

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
