
export default class loginCtrl {
	/*@ngInject;*/
	constructor($scope,$location,$rootScope,exampleService,$localStorage) {
		this.sc=$scope;
		this.loc=$location;
		this.rs=$rootScope;
		this.fact=exampleService;
		this.ls=$localStorage;
		this.rs.flag=0;
		this.ls.flag=0;

	}
	submit(){
    this.fact.auth(this.sc.uname,this.sc.pwd).success(obj=>{


		if(obj.status==200){
			this.loc.path("view1");
			this.rs.flag=1;
			this.ls.flag=1;
			this.ls.logout=0;
		}
		else if(obj.status==404){
			alert("Please fill the required field");
		}
  else{
		alert("Invalid username or Password");
	}
	});
	}

}
