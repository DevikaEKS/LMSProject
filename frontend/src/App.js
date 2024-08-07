import './App.css';
import Banner from './Component/Banner/Banner';
import Menubar from './Component/Menubar/Menubar';
import Login from './Component/Login/Login';
import RegisterPage from './Component/Register/Register';
import { Footer } from './Component/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Coursepage from './Component/Coursepage/Coursepage';
import Coursedashboard from './Component/Coursedashboard/Coursedashboard';
import CourseDetail from './Component/Coursedetail/Coursedetail';
import Sidebarnew from './Component/Sidebar/Sidebar';
import AdminPart from './Component/Admin/Adminpart/Adminpart';
import CodeEditor from './Component/Admin/Codecompiler/Codecompiler';
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
import Unapprovedattendance from './Component/Teacher/Unapproved';
import Approvedattendance from './Component/Teacher/Approved';
import Attendancetime from './Component/Attendancetime/Attendancetime';
import Sidebarcomp from './Component/sidebarcomp/sidebarcomp';
import DashboardLayout from './Component/DashboardLayout/DashboardLayout';

// import DashboardLayout from './Component/DashboardLayout/DashboardLayout';
// import Home from './Component/DashboardPages/Home';
// import Profile from './Component/DashboardPages/Profile';
// import Settings from './Component/DashboardPages/Settings';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/' element={[<Menubar />, <Banner />, <Footer />]} />
          <Route path='/coursebanner' element={[<Menubar />, <Banner />, <CourseDetail />, <Footer />]} />
          <Route path='/coursepage' element={[<Menubar />, <Coursepage />]} />
          <Route path='/activecourse' element={[<Menubar />, <Coursemenubar />, <Activecourses />, <Footer />]} />
          <Route path='/progress' element={[<Menubar />, <Coursemenubar />, <Inprogress />, <Footer />]} />
          <Route path='/coursedashboard' element={<Coursedashboard />} />
          <Route path='/coursedetail' element={<CourseDetail />} />
          <Route path='/sidebar' element={<Sidebarnew />} />
          <Route path='/admin' element={<AdminPart />} />
          <Route path='/compiler' element={<CodeEditor />} />
          <Route path='/completed' element={[<Menubar />, <Coursemenubar />, <Coursecompleted />, <Footer />]} />
          <Route path='/coursepart' element={<Coursereading />} />
          <Route path='/course' element={<Contentmodule />} />
          <Route path='/log' element={<Loginpopup />} />
          <Route path='/stf' element={<Staffpopup />} />
         
          <Route path='/attendancetime' element={<Attendancetime />} />
          <Route path='/Studentprogress' element={[<Menubar />, <Totalchart />, <Footer />]} />
          <Route path='/sd' element={<Sidebarcomp />} />
          <Route path='/dashboard/*' element={<DashboardLayout />}>
          <Route path='studattendance' element={<Studentattendance />} />
          <Route path='unapproved' element={<Unapprovedattendance />} />
          <Route path='approved' element={<Approvedattendance />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
