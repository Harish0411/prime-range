
let range = Number(prompt("Enter the range to find prime numbers"));

for(i=3; i<=range; i++){                                                          // 1 & 2 are not prime
isPrime = true;
for(j=2; j<i; j++){
      if(i%j == 0){
	     isPrime = false;
		 break;
	  }
}
if(isPrime){
	   console.log(i);
	 }
}