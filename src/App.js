import './App.css';
import Loginform from './Components/Loginform';
import ViewMember from './Components/ViewMembers';
import UpdateData from './Components/UpdateData';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/auth/Login';
import Register from './Components/auth/Register';
import ProtectedRoute from './Components/auth/ProtectedRoute';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/' element={<ProtectedRoute><Loginform/></ProtectedRoute>} />
        <Route path='/viewmember' element={<ProtectedRoute><ViewMember/></ProtectedRoute>} />
        <Route path='/updateData/:_id' element={<ProtectedRoute><UpdateData/></ProtectedRoute>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
