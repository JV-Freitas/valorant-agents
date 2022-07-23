import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// fetch('https://api.github.com/users/JV-Freitas')
//   .then((resolve) => resolve.json())
//   .then((data) => fetch(data.repos_url))
//   .then((resolveRepo) => resolveRepo.json())
//   .then((repos) => console.log(repos))
//   .catch((error) => console.log(error));

ReactDOM.render(<App />, document.getElementById('root'));
