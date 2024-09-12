import logo from './logo.svg';
import './App.css';
import LoginPage from './Pages/LoginPage';
import AppLayout from './Layout/AppLayout';
import UseStateHook from './Components/HooksClass.jsx/UseStateHook';
import UseEffectHook from './Components/HooksClass.jsx/UseEffectHook';
import UseRef from './Components/HooksClass.jsx/UseRef';
import CombinedHooks from './Components/HooksClass.jsx/CombinedHooks';
import UserContainer from './Containers/UserContainer';


function App() {
  return (
    <div className="App">
{/* <LoginPage/>  */}
  <AppLayout/>
  {/* <UseStateHook/>/ */}
  {/* <UseEffectHook/> */}
  {/* <UseRef/> */}
  {/* <CombinedHooks/> */}

    </div>
  );
}

export default App;
