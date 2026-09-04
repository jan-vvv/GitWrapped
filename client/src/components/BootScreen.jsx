import "../styles/boot.css";

function BootScreen({onStart}){
    return (
        <main className="boot-screen crt-screen">
            <div className="terminal-window">

             <div className="terminal-header"> 
              <span>GITWRAPPED_OS v1.0</span>  

              <div className="window-controls">
                <span>_</span>
                <span>□</span>
                <span>×</span>
              </div>
            </div> 
            <div className="terminal-content">
            <div className="system-text">
               <p>&gt; SYSTEM READY</p>
<p>&gt; GITHUB CONNECTION REQUIRED<span className="cursor">_</span></p>
            </div> 
            <div className="logo-area">
                <h1 className="glitch" data-text="GITWRAPPED">GITWRAPPED</h1>
                <p>YOUR YEAR IN CODE</p>
            </div> 
            <button className="start-button"
            onClick={onStart}>
                [ Start Wrapping ]
            </button>

            <p className = " boot-footer"> &gt; PRESS START TO INITIALIZE</p>
            </div> 
                
            </div>
        </main>
    )
}

export default BootScreen;