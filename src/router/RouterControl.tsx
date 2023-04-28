import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import Stacking from '../pages/Staking/Staking';
import Header from "../components/Header/Header";
import Footer from '../components/Footer/Footer';
import Description from "../components/Description/Description";
const RouterControl = () => {
  return(
    <>
      <BrowserRouter>
        <Header/>
        <Description/>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='staking' element={<Stacking/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}
export default RouterControl;