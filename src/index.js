import router from './routes/index';
import './styles/styles.css';

window.addEventListener('load', router);//lógica de carga por primera vez nuestra app
window.addEventListener('hashchange', router);
//para un cambio dentro de un hash

