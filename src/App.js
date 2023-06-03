import logo from './logo.svg';
import './App.css';
import Textutils from './Textutils';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Textutils />
      <ToastContainer />

    </div>
  );
}

export default App;
