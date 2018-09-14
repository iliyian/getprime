function get(e,num){
	console.time("sort");
	let res=[],n=0;
	//console.time("intoarr");
	for(let i=2;i<=e;i++){
		res.push(i);
	}
	//console.timeEnd("intoarr");
	for(let i=1;res[n]*res[n]<e;i++){
		//if(res[n]*res[n]>res[i])continue;
		if(res[i]%res[n]==0){res.splice(i,1);i--;}
		if(i==res.length-1){n++;i=n;}
		//else{console.log(i)};
	}
	for(let i=0;i<res.length;i++){
		console.log(res[i]);
	}
	let total=0;
	for(let i=0;i<res.length;i++){
		total+=res[i];
	}
	console.log("Amount: "+res.length);
	console.log("Total: "+total);
	
	if (num){
		console.log("\nOthers:");
		if(!isNaN(num)&&num<res.length&&num>1&&Math.round(num)==num){
			console.log("The "+num+"th prime number is: "+res[num-1]);
			let order=res.indexOf(num);
			if(order==-1){
				console.log(num+" is not a prime number in the range.\n");
			}else{
				console.log("and "+num+" is the "+(order+1)+"th prime number.\n");
			}
		}
		else{console.log("The parameter is invalid.\n");}
	}
	console.timeEnd("sort");
 }
 
function prime(d) {
	console.time("sort");
	var c = [], a, b;
	for (a = 2; a <= d; a++) {
		for (b = 2; b < a && 0 != a % b; b++) {
	}
    a == b && c.push(a);
	}
	console.log(c);
	console.timeEnd("sort");
}
//console.log(prime(100));
