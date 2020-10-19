import React from 'react';
import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
function App() {
  return (
    <div className="App">
      <>
        <SignUp/>
        <GlobalStyle/>
      </>
    </div>
  );
}

export default App;
