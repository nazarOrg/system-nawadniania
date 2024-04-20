import { NavBar } from './components/NavBar';
import { Content } from './components/Content';
import { PlacesToUse } from './components/PlacesToUse';
import { Footer } from './components/Footer';

function App() {

  return (
    <div className='app'>
      <NavBar />
      <Content />
      <PlacesToUse />
      <Footer />
    </div>
  )
}

export default App
