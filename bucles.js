//code1
let numeros = 20;
for (var i = 0; i < 20; i++) {
  console.log("Numero impar:" + i);
  if (i % 2 != 0) {
    i++;
  }
}

//code2

for (var  i = 100; i >= 1; i--) {
  
  if (i % 3 == 0) {
    console.log("Numero multiplo  de 3:" + i);
    i--;
  }
  
}
//code3
let cont = 4;
for (var  i = 4; i >= -1; i--) {
  console.log(cont);
  {
    cont = cont - 1.5;
  }
} 

//code4
let sum = 0;
for (var  i = 0; i <= 100; i++) 
  {
    sum = sum + i;
    console.log(i,"+");
  }
  console.log("=" ,sum);
//code 5
let product = 1;
for (var  i = 1; i <= 12; i++) 
  {
    product = product * i;
    console.log(i,"*");
  }
  console.log("=" ,product);
