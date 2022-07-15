// import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import store from './componentsOfProject/redux/store'
import DisplayUsers from './Components/displayUsers';
import AddUser from './Components/addUser';
import { Menu } from './componentsOfProject/menu';
import DisplayAll from './react-test/Components/gridView';
import HomePage from './react-test/Components/homePage';
import Items from './react-test/Components/items';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      {/* <Provider store={store}>  */}
      {/* <DisplayUsers></DisplayUsers> */}
      {/* <AddUser></AddUser> */}
      <Provider store={store}>
        <Menu/>
      </Provider>
      {/* <Items></Items> */}
      {/* </Provider> */}

    </div>
  ); 
}

export default App;
