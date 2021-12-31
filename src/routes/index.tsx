import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  import SignIn from '../pages/SignIn';
  import SignUp from '../pages/SignUp';
  import Dashboard from '../pages/Dashboard';
  import Error from "../pages/error";

  export const Router = () => {
    return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />}/>
          <Route path="/signin" element={<SignIn />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/error" element={<Error />}/>
          <Route path="*" element={<Error />}/>
        </Routes>
      </BrowserRouter>
    )
  }

  export default Router
  