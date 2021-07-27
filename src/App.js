import InfiniteScrollList from './components/InfiniteScrollList';
import styled from 'styled-components';

const Container = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`
function App() {
  return (
    <Container>
      <InfiniteScrollList />
    </Container>
  );
}

export default App;
