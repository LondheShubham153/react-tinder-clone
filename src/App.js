import './App.css';
import Header from "./Header"
import './Header.css'
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
function App() {
  return (
    // BEM class naming convention
    <div className="app">
      <Header/>
      <TinderCards/>
      {/* <SwipeButtons/> */}
      {/* swipe buttons*/}
    </div>
  );
}

export default App;
