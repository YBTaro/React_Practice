import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './component/navBar/NavBar';
import AboutUs from './pages/AboutUs'
import Service from './pages/Service'
import DigitalPiano from './pages/DigitalPiano'
import LatestNews from './pages/LatestNews'
import Apple from './pages/Apple';
import Home from './pages/Home';
import ToDoList from './pages/ToDoList';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import { AuthProvider } from './component/contexts/AuthContext';
import Profile from './pages/Profile';
import UpdateProfile from './pages/UpdateProfile';
import PrivateRoute from './component/privateRoute/PrivateRoute';
import ForgetPassword from './pages/ForgetPassword';
import ExcelPage from './pages/ExcelPage';


function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <NavBar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/AboutUs' component={AboutUs} />
            <Route path='/Apple' component={Apple} />
            <Route path='/DigitalPiano' component={DigitalPiano} />
            <Route path='/LatestNews' component={LatestNews} />
            <Route path='/Service' component={Service} />
            <Route path='/ToDoList' component={ToDoList} />
            <Route path='/LoginPage' component={LoginPage} />
            <Route path='/SignUpPage' component={SignUpPage} />
            <Route path='/Forget-password' component={ForgetPassword} />
            <Route path='/Excel' component={ExcelPage} />
            <PrivateRoute path='/Profile' component={Profile} />
            <PrivateRoute path='/UpdateProfile' component={UpdateProfile} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>

  );
}


export default App;
