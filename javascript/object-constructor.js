function person(name,age,place){
  this.name=name
  this.age=age
  this.place=place
  this.display=function(){
    console.log("name:"+this.name+"age" +this.age)
  }
}
var arun=new person("arun",20,"kochi")
var rahul=new person("rahul",28,"plakkadu")
arun.display()
rahul.display