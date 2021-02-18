import Routes from '@/routes';

import { GlobalStorage } from '@contexts/GlobalContext';

import '@/App.scss';

function App() {
  return (
    <GlobalStorage>
      <Routes />
    </GlobalStorage>
  );
}

export default App;
