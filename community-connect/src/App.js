import WelcomePage from "./pages/WelcomePage"
import EventsPage from "./pages/EventsPage";
import NoPage from "./pages/NoPage";
import {BrowserRouter , Routes , Route} from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element = {<WelcomePage />} path=""></Route>
        <Route element={<EventsPage/>} path="/events"></Route>
        <Route path="*" element ={<NoPage/>}></Route> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
