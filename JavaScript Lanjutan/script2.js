// 2.1 Execution Context, Hoisting & Scope

// creation phase pada global Context 
// nama var = undifined
// nama function = fn()
// ini semua di sebut hoisting

// var nama = `yono`;
// var umur = 30,

// function sayHello() {
// 	console.log(`Hallo, nama saya ${nama} ${umur} tahun`)
// }

// function membuat local Execution Context
// yang di dalam ya terdapat creation dan execution phase 
// window
// arguments
// hoisting

var nama ="Yono";
var username = "@syono";

function cetakURL(username) {
	var instagramURL = 'http://instagram.com/';
	return instagramURL + username;
}

console.log(cetakURL('@yatno'));
//out put yang keluar di console ialah yatno bukan usernama di karenakan scope, begitu kita nulis argumen lalu data yah di kirimkan ke parameter maka username yah memanggil argumen yah 
//setiap function di panggil maka akan membuat execution context baru yang local dan di tambahkan tumpukan context








// function a() {
// 	console.log(`ini a`);

// 	function b() {
// 		console.log('ini b');

// 		function c() {
// 			console.log('ini c');
// 		}

// 		c();
// 	}
// 	b()
//  }
 
// a();