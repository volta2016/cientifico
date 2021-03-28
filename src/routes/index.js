import Header from '../templates/header';
import Home  from '../pages/Home';
import Character from '../pages/Characters';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';


//main structure routes
const routes = {
   '/': Home,
   '/id': Character,
   '/contact': 'Contact',
}


const router = async () => {
  const header =  null || document.getElementById('header');
  const content =  null || document.getElementById('content');

  header.innerHTML = await Header();
  let hash = getHash();
  let route =  await resolveRoutes(hash);

  let render = routes[route] ? routes[route] : Error404;
  content.innerHTML = await render();
  //routes es la estructura y route es la que obtenemos de hash luego de resolve

}


export default router;

