import { Routes, Route } from 'react-router-dom';
import Login from './Screens/Login';
import Signup from './Screens/SignUp';
import CreateNewPassword from './Screens/CreateNewPassword';
import ResetPassword from './Screens/ResetPassword';
import VerifyYourCode from './Screens/VerifyYourCode';
import Dashboard from './Screens/Dashboard';
import Discover from './Screens/Discover';
import ComingSoon from './Screens/ComingSoon';
import Downloaded from './Screens/Downloaded';
import RecentlyAdded from './Screens/RecentlyAdded';
import Playlist from './Screens/Playlist';
import Subscription from './Screens/Subscription';
import Payment from './Screens/Payment';
import Settings from './Screens/Settings';
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
            <Route path="/discover" element={<Discover />} />
            <Route path="/coming-soon" element={<ComingSoon />} />
            <Route path="/downloaded" element={<Downloaded />} />
            <Route path="/recently-added" element={<RecentlyAdded />} />
            <Route path="/playlist" element={<Playlist />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="*" element={<Error />} />
         </Routes>
      </>
   );
};

export default App;
