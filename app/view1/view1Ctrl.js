export default class view1Ctrl {
		/*@ngInject;*/
	constructor(exampleService,$scope,$location,$localStorage,$rootScope,$interval) {
		this.inter=$interval;
		this.scope = $scope;
		this.rs=$rootScope;
		this.loc=$location;
		this.ls=$localStorage;
		this.scope.check=false;
		this.scope.arr=[];
		this.exampleService=exampleService;
		// if(this.scope.a==undefined){
		// 	console.log("Initial for a",this.scope.a);
		// 	this.scope.a=false;
		// 	console.log("Initial for a",this.scope.a);
		// }
		if(this.exampleService.checkuser()){
		exampleService.getData().success(res => {
      this.scope.value = res.body;
			this.rs.num=this.scope.value.length;
			this.scope.ar=[];
			for(let i=0;i<this.rs.num;i++){
				this.scope.ar[i]=false;
			}
	  });
	}
	else{
		this.loc.path("/");
	}
  }
checkfun(){
	this.scope.check=true;
	console.log("Check",this.scope.check);
}
	update(id){
		this.loc.path("view2/"+id);
		this.ls.flag1=1;
		window.scrollTo(0,0);
	}
	create(){
		this.loc.path("view2");
		this.ls.flag1=0;
		window.scrollTo(0,0);

	}
checked(ind){
	console.log("index is",ind,this.scope.ar[ind]);

	if(this.scope.check==false){
		this.scope.ar[ind]=true;
	}
	else	this.scope.ar[ind]=!this.scope.ar[ind];
	console.log("index is",ind,this.scope.ar[ind]);
}

deside(){
	if(!this.enablebtn()){
		for (let x=0;x<this.rs.num;x++) {
	 	this.scope.ar[x]=true;
		console.log("a value in selectall",this.scope.a);
		}
		this.scope.a=!this.scope.a;
	}
	else{

	for (let x=0;x<this.rs.num;x++) {
		this.scope.ar[x]=false;
	}
	this.scope.a=!this.scope.a;

	}
}


deletethis(id){
	if(id==undefined){
		this.interval.cancel(this.myTimer);
	}
	else{
this.exampleService.delete(id).success(res=>{
if(res.status=="200"){
	console.log("Inside deletethis Success",id);
this.loc.path("newview");
}
});
}
}


delete() {


	for (let i = this.rs.num - 1; i >= 0; i--) {
		if (this.scope.ar[i]==true) {
			this.scope.arr.push(this.scope.value[i].cid);
			delete this.scope.ar[i];
		}
	}

		var deleteUser = confirm('Are you absolutely sure you want to delete' +this.scope.arr.length +'items');
		if (deleteUser){




					console.log("outsidefor ",this.scope.arr);

				 var i=0;
				this.myTimer =this.inter(()=>{
				 var j=i++;
				 if(!this.scope.arr[j]){
					 this.inter.cancel(this.myTimer);
				 }
				 else{
					console.log("inside interval");
					this.deletethis(this.scope.arr[j]);
				 delete this.scope.arr[j];
			 }
				}, 2000)
				console.log(this.scope.arr);

		}




  }
	enable(){
		for (var i = this.rs.num - 1; i >= 0; i--) {
			if (this.scope.ar[i]==true) {
				return false;
			}
		}
		return true;
	}
	enablebtn(){
		var count=0;
		for (var i = this.rs.num - 1; i >= 0; i--) {
			if (this.scope.ar[i]==true) {
				count++;
			}
		}
		if(count<this.rs.num)		return false;
		else 	return true;
	}
	cancel(){
		this.scope.check=false;
		for(let i=0;i<this.scope.ar.length;i++){
			if(this.scope.ar[i]==true){
				this.scope.ar[i]=false;
			}
		}
	}


}
