import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './views/Login'
import Dashboard from './views/Dashboard'
import AddEvent from './views/AddEvent'
import AddGroup from './views/AddGroup'
import AddHolidayRequest from './views/AddHolidayRequest'
import AddUser from './views/AddUser'
import Admin from './views/Admin'
import Calendars from './views/Calendars'
import EditUser from './views/EditUser'
import HolidayRequestStatus from './views/HolidayRequestStatus'
import Information from './views/Information'
import SubmitFeedback from './views/SubmitFeedback'
import UserGuide from './views/UserGuide'
import ViewFeedbacks from './views/ViewFeedbacks'
import ViewHolidayRequests from './views/ViewHolidayRequests'
import useGlobalStates from './hooks/useGlobalStates'

const App = () => {
  const {isAuthenticated} = useGlobalStates();

  return (
    <BrowserRouter>
      <Routes>
        {isAuthenticated ? 
          <Route path='/' element={<Dashboard />} /> 
          :
          <Route path='/' element={<Login />}/>
        }
        <Route path='/add-event' element={<AddEvent />} />
        <Route path='/add-group' element={<AddGroup />} />
        <Route path='/add-holiday-request' element={<AddHolidayRequest />} />
        <Route path='/add-user' element={<AddUser />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/calendars' element={<Calendars />} />
        <Route path='/edit-user' element={<EditUser />} />
        <Route path='/holiday-request-status' element={<HolidayRequestStatus />} />
        <Route path='/information' element={<Information />} />
        <Route path='/submit-feedback' element={<SubmitFeedback />} />
        <Route path='/user-guide' element={<UserGuide />} />
        <Route path='/view-feedbacks' element={<ViewFeedbacks />} />
        <Route path='/view-holiday-requests' element={<ViewHolidayRequests />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
