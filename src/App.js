import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Header } from './Header/Header';
import { Home } from './pages/Home/Home';


function App() {
  return (
    <div>
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
