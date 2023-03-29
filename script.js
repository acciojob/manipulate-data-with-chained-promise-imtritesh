//your JS code here. If required.
let arr = [1, 2, 3, 4];
setTimeout(()=>{
	setTimeout(()=>{
		document.getElementById("output").innerHTML=arr.filter(ele => ele%2===0);
		setTimeout(()=>{
		document.getElementById("output").innerHTML=arr.filter(ele => ele%2===0).map(ele => ele*2);
		},2000)
	},1000)
},3000)