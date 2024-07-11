import Browse from "./Browse";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Grid} from '@mui/material'
import Tomato from "./Tomato";
import About from "./About";
import Career from "./Career";
import Team from "./Team";
import Access from "./Access";
import City from "./Cities";
import TC from "./Tc";
import FAQ from "./Faq";
import Contact from "./Contact";
import Login from "./Login";
import Signup from "./Signup";
import Reset from "./Reset";
function App() {
  return (
    <div>
      <div>
        <Grid container>
          <Grid item>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Tomato />} />
              <Route path="/home" element={<Tomato />} />
              <Route path="/restaurant" element={<Browse />} />
              <Route path="/about" element={<About />} />
              <Route path="/careers" element={<Career />} />
              <Route path="/team" element={<Team />} />
              <Route path="/accessibility" element={<Access />} />
              <Route path="/cities" element={<City />} />
              <Route path="/terms&condititons" element={<TC />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/resetpassword" element={<Reset />} />
              <Route path="*" element={<Tomato />} />
            </Routes>
          </BrowserRouter>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
export default App;
