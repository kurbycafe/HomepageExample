import {BrowserRouter, Route, Routes} from "react-router-dom";

import UserApp from "./UserComponent/UserApp";
import AdminApp from "./AdminComponent/AdminApp";





function App() {
  return (

      <BrowserRouter>


          <Routes >
              <Route path="/admin/*" element={<AdminApp/>} />
            <Route path="/*" element={<UserApp />} />


          </Routes>



      </BrowserRouter>
  );
}

export default App;
