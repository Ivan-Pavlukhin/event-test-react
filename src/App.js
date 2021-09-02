import { Suspense } from 'react';
// import { useDispatch } from 'react-redux'
import{Switch} from 'react-router-dom'
import SiteHeader from './components/SiteHeader';

import Admin from './views/Admin'
// import style from './App.module.style.css'

function App() {
  return (
    <div>
      <SiteHeader />
      <Suspense fallback={<p1>LOADING...</p1>}>
        <Switch>
          <Admin path="/admin" />
        </Switch>
      </Suspense>
    </div>

  );
}

export default App;
