export default class view2Ctrl {
  	/*@ngInject;*/
constructor($scope,$routeParams,$location,exampleService,$localStorage,$rootScope,$timeout){
  this.scope=$scope;
  this.rp=$routeParams;
  this.loc=$location;
  this.ls=$localStorage;
  this.rs=$rootScope;
  this.timeout=$timeout;
  this.rs.alert=false;
  this.exampleService=exampleService;
  this.scope.CreateButtonText="Create";
  this.scope.UpdateButtonText="Update";
  if(this.exampleService.checkuser()){
  this.rs.flag1=this.ls.flag1;
  if(this.ls.flag1){
    this.exampleService.getDetail(this.rp.id).success(res=>{
    if(res.body.gender=="0"){
      res.body.gender="Female";
    }
    else if(res.body.gender=="1"){
      res.body.gender="Male";
    }
    this.scope.obj=res.body;
});
}
}
else{
  this.loc.path("/");
}
}
update(){
  this.scope.loading = true;
  this.scope.UpdateButtonText="Updating";
  console.log(this.scope.UpdateButtonText);;
  this.timeout(()=>{
  this.exampleService.update(this.scope.obj.cid,this.scope.obj.first_name,this.scope.obj.last_name,this.scope.obj.gender,this.scope.obj.designation,this.scope.obj.description)
  .success(res=>{
    this.scope.UpdateButtonText="Update";
    this.scope.loading=false;
    if(res.status=="200"){
      this.loc.path("view1");
      this.rs.alert=true;
    }
    else {
      alert("Details not updated Try Again");
    }
  })
  },3000);
}
create(){
  this.scope.loading = true;
      this.scope.CreateButtonText="Creating";
  this.timeout(()=>{

  this.exampleService.create(this.scope.obj.cid,this.scope.obj.first_name,this.scope.obj.last_name,this.scope.obj.gender,this.scope.obj.designation,this.scope.obj.description)
  .success(res=>{
    this.scope.CreateButtonText="Create";
    if(res.status=="200"){
      this.loc.path("view1");
      this.scope.loading=false;
      alert("Created");

    }
    else {
      alert("Details not Created Try Again");
    }
  })
  },3000);

}

}
