import './App.css'
import { Features } from './componenst/Features'
import { Footer } from './componenst/Footer'
import { Header } from './componenst/Header'
import { Hero } from './componenst/Hero'
import { Integrations } from './componenst/Integration'
import { LabsPortfolio } from './componenst/LabsPortfolio'
import { Store } from './componenst/Store'
import { TelegramSection } from './componenst/Telegram'
import { ToolsGrid } from './componenst/ToolsGrid'
import { TopInsights } from './componenst/TopInsights'
import { WorkWithUs } from './componenst/WorkWithUs'

function App() {
 return(
  <>
  <Header/>
  <Hero/>
  <Store/>
  <Features/>
  <Integrations/>
  <TelegramSection/>
  <ToolsGrid/>
  <LabsPortfolio/>
  <TopInsights/>
  <WorkWithUs/>
  <Footer/>
  </>
 )
}

export default App
