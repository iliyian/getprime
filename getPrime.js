//function get(d){console.time("sort");for(var a=[],b=0,c=2;c<=d;c++)a.push(c);for(c=1;a[b]*a[b]<d;c++)a[b]*a[b]>a[c]||(0==a[c]%a[b]&&(a.splice(c,1),c--),c==a.length-1&&(b++,c=b));console.log(a);console.log("Total: "+sum(a));console.timeEnd("sort")}function sum(d){for(var a=0,b=0;b<d.length;b++)a+=d[b];return a};function get(d){console.time("sort");for(var a=[],b=0,c=2;c<=d;c++)a.push(c);for(c=1;a[b]*a[b]<d;c++)a[b]*a[b]>a[c]||(0==a[c]%a[b]&&(a.splice(c,1),c--),c==a.length-1&&(b++,c=b));console.log(a);console.log("Total: "+sum(a));console.timeEnd("sort")}function sum(d){for(var a=0,b=0;b<d.length;b++)a+=d[b];return a};
function get(e){
	console.time("sort");
	let res=[],n=0;
	//console.time("intoarr");
	for(let i=2;i<=e;i++){
		res.push(i);
	}
	//console.timeEnd("intoarr");
	for(let i=1;res[n]*res[n]<e;i++){
		if(res[n]*res[n]>res[i])continue;
		if(res[i]%res[n]==0){res.splice(i,1);i--;}
		if(i==res.length-1){n++;i=n;}
		//else{console.log(i)};
	}
	console.log(res);
	console.log("Total: "+sum(res));
	console.timeEnd("sort");
 }
function sum(arr){
	let s=0;
	for(let i=0;i<arr.length;i++){
		s+=arr[i];
	}
	return s;
}
get(100000);





//function prime(d){console.time("sort");var c=[],a,b;for(a=2;a<=d;a++){for(b=2;b<a&&0!=a%b;b++);a==b&&c.push(a)}console.log(c);console.timeEnd("sort")};
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
console.log(prime(100));