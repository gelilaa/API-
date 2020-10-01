'use strict';

import {getRepos} from '../src/index.js'; 

const btnRepos = document.getElementById('btnRepos');
btnRepos.addEventListener('click', getRepos);
