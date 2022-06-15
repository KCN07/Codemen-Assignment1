import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from '../src/Pages/Container/Container';

import CommonCard from './Pages/Card/CommonCard/CommonCard';

function App() {
  return (
    <div className="App" style={{height: '100vh',
    backgroundColor: "#e6eaf1"}}>
      <Container></Container>
      {/* <CommonCard></CommonCard> */}
    </div>
  );
}

export default App;
