import homePage from '../pages/home.page';
import busquedaPage from '../pages/busqueda.page';
import productPage from '../pages/product.page';
import DATOS from '../datos/articulos';

 describe('Búsqueda', function () {

   DATOS.forEach(({articulo}) => {

     it(`Debería buscar ${articulo}`, async ()=> {

       await homePage.abrir('/');
       await homePage.buscar(articulo);
       await expect(await homePage.obtenerTextoBusqueda()).to.equal(articulo);
       await expect(await busquedaPage.obtenerNombreResultado()).to.equal(articulo);

     });
   });

   it('Comparación de imágenes con página de WebdriverIO', async () => {
    await browser.url('https://webdriver.io');
    await $(".navbar--fixed-top").waitForDisplayed();
    expect(
        await browser.checkElement(await $(".navbar--fixed-top"), "wdio-headerContainer", {
            /* opciones de configuración para el elemento */
        }),
        "Error: la barra de navegación de WebdriverIO no coincide con la original"
    ).equal(0);
 
    await browser.url('https://webdriver.io/blog/');
    await $('.navbar--fixed-top').waitForDisplayed();
    expect(await browser.checkElement(await $('.navbar--fixed-top'), 'wdio-headerContainer', {})).to.not.equal(0);
  });

 });
