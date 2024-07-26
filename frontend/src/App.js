import logo from './logo.svg';
import './App.css';
import Banner from './Component/Banner/Banner';
import Menubar from './Component/Menubar/Menubar';
import Login from './Component/Login/Login';
import RegisterPage from './Component/Register/Register';
import CourseBanner from './Component/CourseBanner/Coursebanner';
import { Footer } from './Component/Footer/Footer';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Coursepage from './Component/Coursepage/Coursepage';
import { Coursedashboard } from './Component/Coursedashboard/Coursedashboard';
import CourseDetail from './Component/Coursedetail/Coursedetail';
import Sidebarnew from './Component/Sidebar/Sidebar';
import Demcomponent from './Component/Demcomponent/Demcomponent';
import AdminPart from './Component/Admin/Adminpart/Adminpart';
import CodeEditor from './Component/Admin/Codecompiler/Codecompiler';
import RichTextEditor from './Component/Menubar/Quilltxt';
import Activecourses from './Component/ActiveCourses/Activecourses';
import Inprogress from './Component/Inprogresscourses/Inprogress';
import Coursecompleted from './Component/Coursecompleted/Coursecompleted';
import Coursemenubar from './Component/Coursemenubar/Coursemenubar';
import Coursereading from './Component/Coursereading/Coursereading';
import Contentmodule from './Component/Contentmodule/Contentmodule';
import Loginpopup from './Component/Loginpopup/Loginpopup';
import Staffpopup from './Component/Loginpopup/Staffpopup';
import Studentattendance from './Component/Teacher/Studentattendance';
import Totalchart from './Component/Teacherpiechart/Totalchart';


function App() {
  return (
    <div>
  <BrowserRouter>
  <Routes>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<RegisterPage/>}/>
    <Route path='/' element={[<Menubar/>,<Banner/>,<Footer/>]}/>
    <Route path='/coursebanner' element={[<Menubar/>,<Banner/>,<CourseDetail/>]}/>
    <Route path='/coursepage' element={[<Menubar/>,<Coursepage/>]}/>
    <Route path='/activecourse' element={[<Menubar/>,<Coursemenubar/>,<Activecourses/>,<Footer/>]}/>
    <Route path='/progress' element={[<Menubar/>,<Coursemenubar/>,<Inprogress/>,<Footer/>]}/>
    <Route path='/dashboard' element={<Coursedashboard/>}/>
    <Route path='/coursedetail' element={<CourseDetail/>}/>
    <Route path='/sidebar' element={<Sidebarnew/>}/>
    <Route path='/demo' element={<Demcomponent/>}/>
    <Route path='/admin' element={<AdminPart/>}/>
    <Route path='/compiler' element={<CodeEditor/>}/>
    <Route path='/completed' element={[<Menubar/>,<Coursemenubar/>,<Coursecompleted/>,<Footer/>]}/>
    <Route path='/coursepart' element={<Coursereading/>}/>
    <Route path='/course' element={<Contentmodule/>}/>
    <Route path='/log' element={<Loginpopup/>}/>
    <Route path='/stf' element={<Staffpopup/>}/>
    <Route path='/studattendance' element={<Studentattendance/>}/> 
    <Route path='/barchart' element={[<Menubar/>,<Totalchart/>]} />
   
  </Routes>
  </BrowserRouter>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
  
     
 
     {/* <Footer/> */}
    </div>
  );
}

export default App;
