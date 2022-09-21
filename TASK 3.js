var person=[{
    "first_name":"siva",
    "gender":"male",
    "age":"27",
    "phone":"9876543210",
    "area":"cbe",
   
},
{
    "first_name":"sankar",
    "gender":"Male",
    "age":"30",
    "phone":"7471724730",
    "area":"chennai",
    
}
];

//Using For loop
for(var i=0;i<person.length;i++){
   
    console.log("Name:"+(person[i].first_name)+"."+" age:"+(person[i].age)+" from:"+(person[i].area));
}

// Using For in loop

for(var a in person){
   
    console.log(a+") "+("Name: ")+(person[a].first_name)+"."+" from "+(person[a].area));
}