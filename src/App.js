import logo from './logo.svg';
import './App.css';
import HeaderComponent from './component/header/HeaderComponent';
import HomeComponent from './component/body/home';

function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <HomeComponent/>
    </div>
  );
}

export default App;
