const resolveRoutes = (route) => {
  if(route.length <= 3) {
    let validRoute = route === '/' ? route : '/:id';
    return validRoute;
  }
  return `/${route}`; // /about
}

export default resolveRoutes;

/*resolveRoutes.js elimina el template literal al momento de retornar 
route, ya que si no lo haces estarías agregando una ‘/’ de más a la ruta 
y eso ocasiona que al momento de ingresar al sitio la ruta sea 
la cual no existe y por eso te redirige al 404 page.*/