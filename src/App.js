import "./App.css";
import Profile from "./components/Profile";
import pic from './components/me.jpg'



function App() {
  
  const fullName = "Fadhila Tlili";
  
  
  const bio = `25 years old,from Sidi Bouzid Sfax`;
  
  
  
  const profession = " PhD Student";


const show = (name) => {
  alert(name)
}
  return (
    <div className="App">
      <Profile name={fullName} bio={bio} profession={profession} show={show}>
      <img className="str" src={pic} alt='Bellatrix'/> 
      </Profile>
      
    </div>
  );
}

export default App;
