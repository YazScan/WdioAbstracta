import homePage from '../pages/home.page';
import busquedaPage from '../pages/busqueda.page';
import productPage from '../pages/product.page';

describe('Carrito', () => {  
  
    it('Debería buscar iphone', async ()=> {
        //Abrir opencart
      await homePage.abrir('/');
      let articulo = 'iPhone';
      await homePage.buscar(articulo);
      await expect(await homePage.obtenerTextoBusqueda()).to.equal(articulo);
      await expect(await busquedaPage.obtenerNombreResultado()).to.equal(articulo);
   });
    
  
      it('Debería buscar apple cinema, ingresar al artículo y seleccionar un color', async () => {
          await homePage.abrir('/');
          let articulo = 'Apple Cinema 30"'
          await homePage.buscar(articulo);
          await busquedaPage.ingresarAlResultado();
          await productPage.seleccionarColor(2);
      });
  
   });
