import './App.css';
import { useContext } from 'react';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Chat from './Components/Chat/Chat';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import { UserContext } from './Context';

function App() {

  const { state , dispatch } = useContext(UserContext);

  return (
    <div className="App">
      {
        !state.user ? <Login />
          : (
            <>
              <Router>
                <Header />
                <div className='app-body'>
                  <Sidebar />

                  <Routes>
                    <Route path='/room/:roomId' element={<Chat />} />
                    <Route path='/' element={<h2 className='welcome'>Please select a channel from sidebar or add a channel</h2>} />
                  </Routes>
                </div>
              </Router>
            </>
          )
      }

    </div>
  );
}

export default App;
