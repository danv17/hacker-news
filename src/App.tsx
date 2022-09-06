import { Content } from './component/Content';
import { Header } from './component/Header';
import { AppProvider } from './context/AppContext';
import { StyledAppContainer } from './style/App';

function App() {
  return (
    <AppProvider>
      <StyledAppContainer data-testid="app-test-id">
        <Header title="hacker news" />
        <Content />
      </StyledAppContainer>
    </AppProvider>
  );
}

export default App;
