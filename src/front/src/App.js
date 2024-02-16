import {BrowserRouter, Route, Routes} from "react-router-dom";

import UserApp from "./UserComponent/UserApp";





function App() {
  return (

      <BrowserRouter>


          <Routes >
            <Route path="/*" element={<UserApp />} />


          </Routes>



      </BrowserRouter>
  );
}

export default App;
