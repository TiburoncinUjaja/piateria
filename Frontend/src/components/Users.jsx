import React, { useState } from 'react';
import Header from './Header';
import Users from './Users';
import FormLogin from './FormLogin';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div>
      <Header user={user} setUser={setUser} />
      {user ? <Users setUser={setUser} /> : <FormLogin setUser={setUser} />}
    </div>
  );
};

export default App;
