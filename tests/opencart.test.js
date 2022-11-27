import homePage from '../pages/home.page';
import busquedaPage from '../pages/busqueda.page';

describe('Carrito', () => {  
  
    it('Debería buscar iphone', async ()=> {
      await homePage.abrir('/');
      let articulo = 'iPhone';
      await homePage.buscar(articulo);
      await expect(await homePage.obtenerTextoBusqueda()).to.equal(articulo);
      await expect(await busquedaPage.obtenerNombreResultado()).to.equal(articulo);
   });
    
  
      it('Debería buscar apple cinema, ingresar al artículo y seleccionar un color', async () => {
          await browser.url('/')
          let barraDeBusqueda = await $('[name="search"]');
          await barraDeBusqueda.setValue('apple cinema');
          await expect(await barraDeBusqueda.getValue()).to.equal('apple cinema','Error: no se mostró el texto esperado en la barra de búsqueda');
          await barraDeBusqueda.keys('Enter');
          await expect(await $('h4').getText()).to.include.string('Apple Cinema 30"','Error: no se mostró el header esperado');
          let articulo = await $('=Apple Cinema 30"');
          await articulo.click();
          let dropDownColor = await $('select');
          await dropDownColor.selectByIndex(2);
          await browser.pause(5000);
          console.log(await dropDownColor.getValue());
      });
  
   });
