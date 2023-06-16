import React from 'react';
import { Provider } from 'react-redux';
import UsersList from './store/users/UsersList';
import store from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <UsersList />
      </div>
    </Provider>
  );
};

export default App;
