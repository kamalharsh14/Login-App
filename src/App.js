import './App.css';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import SignUp from './Components/SignUp';


function authenticaion(isSignUp,isloggedIn){
 if(isSignUp){
    if(isloggedIn){
      return <Dashboard />;
    }
    else{
      return <Login />;
    }
 }else{
  return <SignUp />;
 }
}

function App() {
  return (
    <div className="text-center">
      {authenticaion(true,true)}
    </div>
  );
}

export default App;
