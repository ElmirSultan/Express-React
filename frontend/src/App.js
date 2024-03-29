import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';
import './App.css';
import { Header } from './components/Header';
import AddEdit from './pages/addedit/AddEdit';
import { Home } from './pages/home/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <Router>
        <Header />
        <ToastContainer />
        <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<AddEdit />} />
          <Route path='/update/:id' element={<AddEdit />} />
        </Routes>
        </div>
    </Router>
  );
}

export default App;
