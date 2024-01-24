import './assets/css/reseter.css';
import './assets/css/main.css'

import { getData } from './modules/data';
import { renderTable } from "./modules/render";

getData().then(data => renderTable(data));