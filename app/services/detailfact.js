 export default class detailfact {

	/*
	  The below annotation will be processes by ngAnnotate, which
	  will annotate the constructor after compiling for minification.
	*/
	/*@ngInject;*/
	constructor($http,$rootScope,$localStorage) {
		this.http = $http;
    this.ls=$localStorage;
    this.rs=$rootScope;
	}
checkuser(){
  if(this.ls.logout==0){
    this.rs.flag=1;
    this.ls.flag=1;
    return true;
  }
  else return false;
}
  getData () {
    return this.http.get('http://192.168.121.232/employee.php');
  }
  getDetail (id) {
    return this.http.get('http://192.168.121.232/employee.php?cid='+id);
  }
  auth(uname,pwd){
      return this.http({method:'POST',url:'http://192.168.121.232/employee.php', headers:{'Content-Type': 'application/json'}, data:{"username":uname, "password":pwd}});
  }
  delete(id){
      return this.http({method:'DELETE',url:'http://192.168.121.232/employee.php', headers:{'Content-Type': 'application/json'}, data:{"cid":id}});
  }
  update(id,fname,lname,gen,dsg,des){
    if(gen=="Male"){
      gen="1";
    }
    else{
      gen="0";
    }
      return this.http({
         method:'PUT',
         url:'http://192.168.121.232/employee.php',
         headers:{'Content-Type': 'application/json'},
         data:{"cid":id,"first_name":fname,"last_name":lname,"gender":gen,"designation":dsg,"description":des}
       });
  }
  create(id,fname,lname,gen,dsg,des){
    if(gen=="Male"){
       gen="1";
    }
    else{
      gen="0";
    }
    
      return this.http({
         method:'POST',
         url:'http://192.168.121.232/employee.php',
         headers:{'Content-Type': 'application/json'},
         data:{"cid":id,"first_name":fname,"last_name":lname,"gender":gen,"designation":dsg,"description":des}
       });
  }
}

 // detailfact.$inject = ['$http'];
