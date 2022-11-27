import BasePage from '../pages/base.page';

class ProductPage extends BasePage {

    //WebElements

    get dropDownColor(){ return $('select') }

    //** Seleccionar color del dropdown */

    async seleccionarColor (indice) {
        addStep('Seleccionar del dropdown')
        await this.dropDownColor.selectByIndex(indice)
        console.log(await this.dropDownColor.getValue());
    }
}

export default new ProductPage();