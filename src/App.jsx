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
import MaterialityAssesment from "./Pages/CorporateOverview/MaterialityAssesment"
import RiskManagement from "./Pages/CorporateOverview/RiskManagement"
import ESGStrategy from "./Pages/CorporateOverview/ESGStrategy"
import BOD from "./Pages/CorporateOverview/BOD"
import ProductPortfolio from "./Pages/CorporateOverview/ProductPortfolio"
import LightningSolution from "./Pages/CorporateOverview/LightningSolution"
import ConsumerProducts from "./Pages/CorporateOverview/ConsumerProducts"

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
              <Route path="/materiality_assessment" element={<MaterialityAssesment />} />
              <Route path="/risk_management" element={<RiskManagement />} />
              <Route path="/esg_strategy" element={<ESGStrategy />} />
              <Route path="/board_of_directors" element={<BOD />} />
              <Route path="/product_portfolio" element={<ProductPortfolio />} />
              <Route path="/consumer_products" element={<ConsumerProducts />} />
              <Route path="/lighting_solutions" element={<LightningSolution />} />
            </Routes>
          </div>
        </ScrollToTop>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App