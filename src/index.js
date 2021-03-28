import router from './routes/index';

window.addEventListener('load', router);//lógica de carga por primera vez nuestra app
window.addEventListener('hashchange', router);
//para un cambio dentro de un hash

