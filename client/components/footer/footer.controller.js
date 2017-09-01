'use strict';
(function(){

class FooterComponent{
  constructor() {

  }
  formsubmit(){
    this.el
    this.error=Math.random() > 0.5;
    if(this.error){
      this.validaCol ="has-success";
      this.validaColDiv=["form-control-feedback","glyphicon","glyphicon-ok"];
      this.el="<label class='control-label' for='inputSuccess2'>registro exitoso</label>";
}else{
    this.validaCol ="has-error";
    this.validaColDiv=["form-control-feedback","glyphicon","glyphicon-remove"];
    this.el="<label class='control-label' for='inputSuccess2'>error al registrar</label>";
  }
  }
}
angular.module('bootstrapApp')
  .component('footerApp', {
    templateUrl: 'components/footer/footer.html',
    controller: FooterComponent,
    controllerAs:'vm'
  });

})();
