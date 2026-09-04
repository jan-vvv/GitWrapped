import{useState} from "react";


import BootScreen from "./components/BootScreen";
import UsernameScreen from "./components/UsernameScreen";

function App() {
  const [ showUsernameScreen, setShowUsernameScreen ] = useState(false);
  return(
    <>
    {!showUsernameScreen ? (
      <BootScreen 
        onStart={()=> setShowUsernameScreen(true)}
      />
    ):(
      <UsernameScreen/>
    )}
    </>
  );
  
}

export default App;