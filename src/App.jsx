import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Journey from './components/Journey'
import SelfAwareness from './components/SelfAwareness'
import Values from './components/Values'
import Gaps from './components/Gaps'
import DevPlan from './components/DevPlan'
import Closing from './components/Closing'

export default function App() {
  return (
    <div className="font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <Journey />
      <SelfAwareness />
      <Values />
      <Gaps />
      <DevPlan />
      <Closing />
    </div>
  )
}
