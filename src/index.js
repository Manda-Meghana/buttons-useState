import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const Show = () => {
  return (
    <div>
      <h1>Welcome</h1>
    </div>
  )
}

const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)
export default Show
