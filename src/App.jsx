import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from "./Components/ScrollToTop"
import Footer from "./Components/Footer"
import Navbar from "./Components/NavBar"
import LandingPage from "./Pages/Home/LandingPage"
import AboutBajajElectricals from "./Pages/CorporateOverview/AboutBajajElectricals"
import AboutBajajGroup from "./Pages/CorporateOverview/AboutBajajGroup"
import OurBusiness from "./Pages/CorporateOverview/OurBusiness"
import ChairmansCommunique from "./Pages/CorporateOverview/ChairmansCommunique"
import FinancialHighlights from "./Pages/CorporateOverview/FinancialHighlights"
import Awards from "./Pages/CorporateOverview/Awards"
import VCM from "./Pages/CorporateOverview/VCM"
import StakeholderEngagement from "./Pages/CorporateOverview/StakeholderEngagement"

const App = () => {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <ScrollToTop>
          <div className='mt-15'>
            <Routes>
              <Route path='/' element={<LandingPage />} />
              <Route path='/about_bajaj_group' element={<AboutBajajGroup />} />
              <Route path="/about_bajaj_electricals" element={<AboutBajajElectricals />} />
              <Route path="/our_businesses" element={<OurBusiness />} />
              <Route path="/chairmans_communique" element={<ChairmansCommunique />} />
              <Route path="/financial_highlights" element={<FinancialHighlights />} />
              <Route path="/awards_and_accolades" element={<Awards />} />
              <Route path="/value_creation_model" element={<VCM />} />
              <Route path="/stakeholder_engagement" element={<StakeholderEngagement />} />
              {/* <Route path="/technology_digital" element={<TechnologyAndDigital />} />
              <Route path="/sustainability" element={<Sustainability />} />
              <Route path="/human_capital" element={<HumanCapital />} />
              <Route path="/board_of_directors" element={<BoardOfDirectors />} />
              <Route path="/awards_achievements" element={<AwardsAndAchievements />} />
              <Route path="/corporate_information" element={<CorporateInformation />} /> */}
            </Routes>
          </div>
        </ScrollToTop>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App