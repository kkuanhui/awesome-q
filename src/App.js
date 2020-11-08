import NavTabs from './NavTabs.js';
import TabPage from './TabPage';
import {Fragment} from 'react';

function App() {
  return (
  <div style={{height: "100vh", width: "100vw"}}>

    <Fragment>
        <NavTabs>

            <TabPage className="TabPage" label="Main Page" />
            <TabPage className="TabPage" label="Tableau Page" />

        </NavTabs>
    </Fragment>

  </div>
  );
}

export default App;
