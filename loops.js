
   // For loop  Use Inline variable
   for (let i = 1; i <= 5; i++){
   document.getElementById("loop").innerHTML=("Numbers#"+i+"<br>");
   console.log("Number#"+i);
   }
//For loop 
   /*let fruits=["apple","orrange","mango","grapes"];

   for (let i = 0;i<fruits.length;i++){
    console.log (i,fruits[i]);
   }*/
   //while loop
   let days=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
   let a=0;
   while ( a<days.length){
   
    console.log(a,days[a]);
    a++;
   }
   //for in loop( use object and arrays)
// for in loop use object
   let object = {
    name:"Tamil",
    gender:"female",
    id:3,
    rang:5,
};
for (let instance in object){
    console.log(instance+":"+object[instance]);
}
//for in loop use arrays
let languages = ["Tamil","Hindi","Malayalam","Telungu"];
for (let lang in languages){
    console.log(lang,languages[lang]);
}
