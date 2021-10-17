var person= {name:"aarun",age:18,place:"kochi",display:function(){
  console.log(this.name)
}}
console.log(person)
console.log(person.name)
console.log(person.age)
console.log(person.place)
console.log(person['age'])
person.dob="20-08-21"
//etc
for(x in person){
  console.log(person[x])
}
person.name="rahul"
console.log(person.name)
console.log(person.dob)
console.log(person.display())