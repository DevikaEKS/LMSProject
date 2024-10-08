import "./App.css";
import Banner from "./Component/Landingpage/Banner/Banner";
import Menubar from "./Component/Landingpage/Menubar/Menubar";
import Login from "./Component/Landingpage/Login/Login";
import RegisterPage from "./Component/Landingpage/Register/Register";
import { Footer } from "./Component/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseDetail from "./Component/Admin/Coursedetail/Coursedetail";
import CodeEditor from './Component/Admin/Codecompiler/Codecompiler';
import Activecourses from './Component/Student/ActiveCourses/Activecourses';
import Inprogress from './Component/Student/Inprogresscourses/Inprogress';
import Coursecompleted from './Component/Student/Coursecompleted/Coursecompleted';
import Coursemenubar from './Component/Student/Coursemenubar/Coursemenubar';
// import Coursereading from './Component/Coursereading/Coursereading';
import Contentmodule from './Component/Instructor/Contentmodule/Contentmodule';
import Loginpopup from './Component/Landingpage/Loginpopup/Loginpopup';
import Staffpopup from './Component/Landingpage/Loginpopup/Staffpopup';
import Studentattendance from './Component/Teacher/Studentattendance';
import Totalchart from './Component/Teacher/Teacherpiechart/Totalchart';
import Unapprovedattendance from './Component/Teacher/Unapproved';
import Approvedattendance from './Component/Teacher/Approved';
import Attendancetime from './Component/Teacher/Attendancetime/Attendancetime';
import Sidebarcomp from './Component/sidebarcomp/sidebarcomp';
import DashboardLayout from './Component/DashboardLayout/DashboardLayout';
import Admindashboard from './Component/Admin/Admindashboard/Admindashboard';
import Courseupdation from './Component/Admin/Courseupdation/Courseupdation';
import Coursecontent from './Component/Admin/Coursecontent/Coursecontent';
import Modulepage from './Component/Admin/Modulepage/Modulepage';
import Dashboardinstructor from './Component/Instructor/Dashboardinstructor/Dashboardinstructor';
import Sidebarinstructor from './Component/Instructor/Sidebarinstructor/Sidebarinstructor';
import Ongoingclass from './Component/Student/OngoingClass/Ongoingclass';
import RichTextEditorql from './Component/RichTextEditor/RichTextEditor';
import AdminCredential from './Component/Admin/Admincredential/Admincredential';
import Categorycreation from './Component/Admin/Categorycreation/Categorycreation';
import CategoryDropdown from './Component/Instructor/Categorytree/CategoryDropdown';
import EditorComponent from './Component/Instructor/Rcheditor/Rcheditor';
import Question from './Component/Instructor/Question/Question';
import DisplayContent from "./Component/Admin/Coursecontent/DisplayContent";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={[<Menubar />, <Banner />, <Footer />]} />
          <Route path="/coursebanner" element={[<Menubar />, <Banner />, <CourseDetail />, <Footer />]}/>
          <Route path="/activecourse" element={[ <Menubar />,<Coursemenubar />,<Activecourses />,<Footer />]}/>
          <Route path="/progress" element={[<Menubar />,<Coursemenubar />,<Inprogress />,<Footer />]}/>
          <Route path="/compiler" element={<CodeEditor />} />
          <Route path="/completed" element={[<Menubar />,<Coursemenubar />,<Coursecompleted />,<Footer />]}/>
          <Route path="/course" element={<Contentmodule />} />
          <Route path="/log" element={<Loginpopup />} />
          <Route path="/stf" element={<Staffpopup />} />
          <Route
            path="/ongoing"
            element={[<Menubar />, <Coursemenubar />, <Ongoingclass />]}
          />
          {/* <Route path='/rch' element={<RichTextEditorql/>}/> */}
          <Route path="/attendancetime" element={<Attendancetime />} />
          <Route
            path="/Studentprogress"
            element={[<Menubar />, <Totalchart />, <Footer />]}/>
          <Route path="/sd" element={<Sidebarcomp />} />
          <Route path="/dashboard/*" element={<DashboardLayout />}>
            <Route path="studattendance" element={<Studentattendance />} />
            <Route path="unapproved" element={<Unapprovedattendance />} />
            <Route path="approved" element={<Approvedattendance />} />
          </Route>

          <Route path="/admindashboard/:id*" element={<Admindashboard />}>
            <Route path="coursedetail" element={<CourseDetail />} />
            <Route path="courseupdate" element={<Courseupdation />} />
            <Route path="admincredential" element={<AdminCredential />} />
            <Route path="category" element={<Categorycreation />} />
          </Route>

          <Route path="/instructordashboard/:id*" element={<Dashboardinstructor />} >
            <Route path="courselist" element={<Courselist/>} />
            <Route path="coursecontent" element={<Coursecontent />} />
            <Route path="displaycontent" element={<DisplayContent />} />
            <Route path="coursemodule" element={<Modulepage />} />
            <Route path="quilltxt" element={<Quilltxt />} />
            <Route path="pages" element={<Coursepages />} />
          </Route>
          <Route path='/instructorsidebar' element={<Sidebarinstructor />} />
          <Route path='/teacherdashboard/*' element={<Dashboardinstructor />}></Route>
          <Route path='/dropdowncategory' element={<CategoryDropdown />} />
          <Route path='/editor' element={<EditorComponent />} />
          <Route path='/questioncreation' element={<Question />} />
{/* //DrKen */}
<Route path="/Drhome" element={[<Drmenubar/>,<Drkenhome/>]}/>
<Route path="/courseview" element={<Courseview/>}/>
<Route path="/dr" element={<Drkendashboard/>}> 

</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
