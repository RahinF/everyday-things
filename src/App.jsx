import GlobalStyle  from './GlobalStyles';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Atmosphere from './components/Atmosphere/Atmosphere';
import HowTo from './components/HowTo/HowTo'
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import { Container } from './App.style';

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Main />
      <Atmosphere />
      <HowTo />
      <Navigation />
      <Footer />
    </Container>
  );
}

export default App;
