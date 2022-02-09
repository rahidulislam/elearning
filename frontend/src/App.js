import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CoursePage from "./pages/CoursePage";
import HomePage from "./pages/HomePage";
import Page404 from "./pages/Page404";
import TeamPage from "./pages/TeamPage";
import TestimonialPage from "./pages/TestimonialPage";
import {BrowserRouter} from 'react-router-dom'
import AppRoute from "./router/AppRoute";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppRoute/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
