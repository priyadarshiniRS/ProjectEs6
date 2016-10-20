export default class dir1Ctrl {
  /*@ngInject;*/

  constructor($rootScope,$location,$localStorage){
    this.rs=$rootScope;
    this.loc=$location;
    this.ls=$localStorage;
  }
  logout(){
    this.ls.logout=1;
    this.loc.path("/");
  }

}
