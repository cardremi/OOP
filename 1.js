//nama, umur, gender, nationality
class Human {
    constructor(nama,umur,gender){
        this.nama =nama;
        this.umur= umur;
        this.gender=gender;

        this.getNama= function () {
            console.log ("Nama Saya :", this.nama)
        };
            
        
    }
}
const Dhedy= new Human("dhedy",10,"pria");
Dhedy.getNama()
console.log(Dhedy)