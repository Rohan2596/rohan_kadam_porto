import logo from './logo.svg';
import './App.css';
import HeaderComponent from './component/header/HeaderComponent';
import HomeComponent from './component/body/home';
import AboutComponent from './component/body/about';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <HomeComponent/>
      <AboutComponent/>
    </div>
  );
}

export default App;
