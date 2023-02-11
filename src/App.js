import './App.css';
import Loginform from './Components/Loginform';
import ViewMember from './Components/ViewMembers';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/' element={<Loginform/>} />
        <Route path='/viewmember' element={<ViewMember/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
