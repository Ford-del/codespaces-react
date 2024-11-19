import Menu from './Components/Activities/Menu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Fixed typo
import NumberGuessingGame from './Pages/NumberGuessingGame';
import RockPaperScissor  from './Pages/RockPaperScissors';
import CoinFlip from './Pages/CoinFlip';

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/number-guessing" element={<NumberGuessingGame />} />
        <Route path="/rock-paper-scissors" element={<RockPaperScissor />} />
        <Route path="/coin-flip" element={<CoinFlip />} />
      </Routes>
    </Router>
  );
}

export default App;
