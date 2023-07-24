	const dark = document.getElementById("darkmode-toggle");
  const body = document.querySelector("body");
  const label = document.getElementById("label");
	const center = document.querySelectorAll("#center");
	const a = document.querySelectorAll("#a");
	const fo = document.querySelector("footer");
	const judul = document.getElementById("judul");
	// mode event malam ahay
		dark.addEventListener('click',()=>{
			if(dark.checked){
		body.style.backgroundColor = "#252525";
		body.style.transition = "0.3s"
		judul.style.color = "silver";
		fo.style.color = "silver";
		localStorage.setItem('one',"#252525");
	  localStorage.setItem('two',"silver");
	  localStorage.setItem('three',"silver");
		//loop untuk id yang sama 
		for(let warn = 0; warn < a.length;warn++){
		a[warn].style.color = "silver"
		localStorage.setItem('seven',"silver")
		}
		for(let e = 0; e < center.length;e++){
	  center[e].style.backgroundColor = "#252525";
	  center[e].style.color = "silver";
	  center[e].style.borderColor = "silver";
	  // membuat set item untuk localstorage 
	   localStorage.setItem('four',"#252525");
	   localStorage.setItem('five',"silver");
	   localStorage.setItem('six',"silver");
	   localStorage.setItem('eight',dark.checked);
		};
		//kondisi ketika checked tidak centang biru
		}else{
		judul.style.color = "#252525"
		fo.style.color = "#252525"
		body.style.backgroundColor = "white"
		body.style.transition = "0.3s"
		for(let c = 0; c < a.length;c++){
		a[c].style.color = "#252525";
		};
		for(let d = 0; d < center.length;d++){
		center[d].style.backgroundColor = "white"
		center[d].style.color = "#252525";
		center[d].style.borderColor = "#252525";
		};
		//menghapus getItem memasukan key setiap getItem
		localStorage.removeItem('one');
		localStorage.removeItem('two');
		localStorage.removeItem('three');
		localStorage.removeItem('four');
		localStorage.removeItem('five');
		localStorage.removeItem('six');
		localStorage.removeItem('seven');
		localStorage.removeItem('eight');
		}
	  })
	  //meng get item localStorage
	  const one = localStorage.getItem('one')
	  body.style.backgroundColor = one
    const two = localStorage.getItem('two')
    judul.style.color = two
    const three = localStorage.getItem('three')
	  fo.style.color = three
   const eight = localStorage.getItem('eight')
   dark.checked = eight === 'true'
//meng get localStorage di dalem loop 
for(let warn = 0; warn < a.length;warn++){
		let seven = localStorage.getItem('seven')
		a[warn].style.color = seven
		}
    for(let e = 0; e < center.length;e++){
	  const four = localStorage.getItem('four')
	  const five = localStorage.getItem('five')
	  const six = localStorage.getItem('six')
	  center[e].style.backgroundColor = four
	  center[e].style.borderColor = five
	  center[e].style.color = six
    }