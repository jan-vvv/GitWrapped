import"../styles/analysis.css";

function AnalyzingScreen({username}){
    return (
        <main className="analysis-screen crt screen">

            <div className="terminal-window">
                <div className="terminal-header">
                    <span>GITWRAPPED_ANALYZER v1.0</span>
                    <div classNAme="window-controls">
                        <span>_</span>
                         <span>□</span>
                         <span>×</span>
                    </div>
                </div>
              <div className="analysis-content">
                <p className ="system-text">
                    &gt; USER DETECTED: @{username}
                </p>
                

                <h2>ANALYZING DEVELOPER...</h2>
                <div className="analysis-lines">

                    <p>
                    &gt; GITHUB PROFILE ............... <span>OK</span>
                    </p>

                    <p>
                    &gt; REPOSITORIES ................. <span>SCANNING</span>
                    </p>

                    <p>
                    &gt; LANGUAGES .................... <span>WAITING</span>
                    </p>

                    <p>
                    &gt; COMMITS ...................... <span>WAITING</span>
                    </p>

                    <p>
                    &gt; CODING PATTERNS .............. <span>WAITING</span>
                    </p>

                </div>

               <div className="analysis-bar">
            <div className="analysis-progress"></div>
          </div>

          <p className="analysis-footer">
            &gt; PLEASE WAIT WHILE WE READ YOUR CODE...
          </p>

        
              </div>
            </div>
        </main>
    )
}

export default AnalyzingScreen;