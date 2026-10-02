import{useState} from "react";


import BootScreen from "./components/BootScreen";
import UsernameScreen from "./components/UsernameScreen";
import SharedWrappedScreen from "./components/SharedWrappedScreen";

function App() {
  const [ showUsernameScreen, setShowUsernameScreen ] = useState(false);
  const pathname = window.location.pathname;

  if (pathname.startsWith("/share/")) {
    const shareId = pathname.split("/share/")[1];

    return (
      <SharedWrappedScreen
        shareId={shareId}
      />
    );
  }
 
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