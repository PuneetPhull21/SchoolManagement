import './App.css';
import NavbarPage from '../Navbar/NavbarPage';
import  { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import {Admin_Login} from '../Admin';
import {AddTeacher,AddStudent} from '../Admin/AdminPages';
import {Classes,Classmates,StudentLogin} from '../StudentPage';


function App() {
  return (
    <>
    <NavbarPage/>
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/admin/login" component={Admin_Login}/>
        <Route path="/admin/addteacher" component={AddTeacher}/>
        <Route path="/admin/addstudent" component={AddStudent}/>
        <Route path="/student/classes" component={Classes}/>
        <Route path="/student/login" component={StudentLogin}/>
        <Route path="/student/classmates" component={Classmates}/>
              </Switch>
    </Router>
    </>
  );
}

export  {App};
