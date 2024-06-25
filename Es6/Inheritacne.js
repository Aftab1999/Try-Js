class employee{
    constructor(name){
        console.log("Constructor : Employee" + name);

    }
}
class manager extends employee{

}
let a = new manager("Yahoo Baba");