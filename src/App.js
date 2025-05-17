import { Routes, Route } from 'react-router-dom';
import Login from './Screens/Login';
import Signup from './Screens/SignUp';
import CreateNewPassword from './Screens/CreateNewPassword';
import ResetPassword from './Screens/ResetPassword';
import VerifyYourCode from './Screens/VerifyYourCode';
import Dashboard from './Screens/Dashboard';
import Error from './Screens/Error';

const App = () => {
   return (
      <>
         <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/create-new-password" element={<CreateNewPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/verify" element={<VerifyYourCode />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Error />} />
         </Routes>
      </>
   );
};

export default App;
