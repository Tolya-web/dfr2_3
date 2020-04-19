class Book {
    constructor(name,year,pageCount,numberCopies,publisher) {
        this.name = name;
        this.year = year;
        this.pageCount = pageCount;
        this.numberCopies = numberCopies;
        this.publisher = publisher;
    }   
    getCount(){
        return this.pageCount;
    }  
} 


var book = new Book("Вий",1890,34,4,"pix");
  
alert(book.name+", "+book.year+","+book.getCount()+", "+book.numberCopies+", "+book.publisher);


class Juornal {
    constructor(name,year,pageCount,numberCopies,publisher) {
    this.name = name;
    this.year = year;
    this.pageCount = pageCount;
    this.numberCopies = numberCopies;
    this.publisher = publisher;
    }   
    getInform(){
        return this.pageCount;
    }
    getInfo(){
        return this.year;
    }
}
   var juornal = new Juornal("coll",2010,32,1,"Дом печати");

alert(juornal.name+","+juornal.getInform()+","+juornal.getInfo()+","+juornal.numberCopies+","+juornal.publisher);