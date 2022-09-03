import './App.css';
import { Content } from './component/Content';
import { Header } from './component/Header';

function App() {
  return (
    <div className="App">
      <Header title="hacker news" />
      <Content />
    </div>
  );
}

export default App;
