import GithubLogo from './Components/GithubLogo'
import Navbar from './Components/Navbar'
import Body from './Components/Body'
import Projects from './Components/Projects'

function App() {
  return (
    <div className="App">
      <div className="top">
        <Navbar />
        <Body />
      </div>
      <Projects />
    </div>
  );
}

export default App;
