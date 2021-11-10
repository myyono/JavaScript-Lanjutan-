// Cara Membuat Object Pada Javascript 
// 1. Object Literal 
// problem tidak efektif untuk object yang banyak
// let mahasiswa1 = {
// 	nama : 'Yono',
// 	energy : 10,
// 	makan: function(porsi) {
// 		this.energy = this.energy + porsi;
// 		console.log(`Halo ${this.nama}, Selamat Makan!`)
// 	}
// }

// let mahasiswa2 = {
// 	nama : 'Yatno',
// 	energy : 10,
// 	makan: function(porsi) {
// 		this.energy = this.energy + porsi;
// 		console.log(`Halo ${this.nama}, Selamat Makan!`)
// 	}
// }






//Function Deklaration
 
// const methodMahasiswa = {
// 	makan: function(porsi) {
// 		this.energi += porsi;
// 		console.log(`Halo ${this.nama}, Selamat Makan!`)
// 	},
// 	main : function(jam) {
// 		this.energi -= jam;
// 		console.log(`Halo ${this.nama}, Selamat Bermain!`)
// 	},
// 	tidur : function(jam) {
// 		this.energi += jam * 2;
// 		console.log(`Halo ${this.nama}, Selamat tidur!`)
// 	}
// };

// function Mahasiswa(nama, energi) {
// let mahasiswa = Object.create(methodMahasiswa);
// mahasiswa.nama = nama;
// mahasiswa.energi = energi;
// mahasiswa.makan = methodMahasiswa.makan;
// mahasiswa.main = methodMahasiswa.main;
// mahasiswa.tidur = methodMahasiswa.tidur;

// mahasiswa.makan = function(porsi) {
// 	this.energi += porsi;
// 	console.log(`Halo ${this.nama}, Selamat Makan!`)
// }
// mahasiswa.main = function(jam) {
// 	this.energi -= jam;
// 	console.log(`Halo ${this.nama}, Selamat Bermain!`)
// }

//  return mahasiswa;
// }

// let yono = Mahasiswa('Yono', 10);
// let yatno = Mahasiswa('Yatno', 20);
// function Mahasiswa(nama, energi) {
// 	// let mahasiswa = Object.create(methodMahasiswa);
// 	this.nama = nama;
// 	this.energi = energi;

// 	// return mahasiswa;
// 	// return this;
// }
// Mahasiswa.prototype.makan = function(porsi) {
// 	this.energi += porsi;
// 	return `Halo ${this.nama}, selamat makan!`;
// }
// Mahasiswa.prototype.main = function(jam) {
// 	this.energi -= jam;
// 	return `Halo ${this.nama}, selamat bermain`;
// }
// Mahasiswa.prototype.tidur = function(jam) {
// 	this.energi += jam * 2;
// 	return `Halo ${this.nama}, selamat tidur!`;
// }

// let yono = new Mahasiswa(`Yono`, 10);


//versi class
// class Mahasiswa {
// 	constructor(nama, energi) {
// 		this.nama = nama;
// 		this.energi = energi;
// 	}
	
// 	makan(porsi) {
// 			this.energi += porsi;
// 			return `Halo ${this.nama}, selamat makan!`;
// 		}

// 		main(jam) {
// 			this.energi -= jam;
// 			return `Halo ${this.nama}, selamat bermain`;
// 		}

// 		tidur(jam) {
// 			this.energi += jam * 2;
// 			return `Halo ${this.nama}, selamat tidur!`;
// 		}
// 	}
		
// 		let yono = new Mahasiswa(`Yono`, 10);
// 		let yatno = new Mahasiswa(`Yatno`, 20)
	
// di belakang layar prototype yang terjadi di dalam yah






//Cunstructor Function(Keyword New)
// function Mahasisiwa(nama, energi) {
	
// 	this.nama = nama;
// 	this.energi = energi;
	
// 	this.makan = function(porsi) {
// 		this.energi += porsi;
// 		console.log(`Halo ${this.nama}, Selamat Makan!`)
// 	}
// 	this.main = function(jam) {
// 		this.energi -= jam;
// 		console.log(`Halo ${this.nama}, Selamat Bermain!`)
// 	}
	
// 	}

// 	let yono =  new Mahasisiwa(`Yono`, 10);






//Object.create ()