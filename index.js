class Hero{

  constructor(name, side){
      this.name = name;
      this.side = side;
  }
speak(){
  return "<p> My name is " + this.name + ", and I am with the " + this.side + ".</p>";
}
}

var darkVador = new Hero("Dark Vador", "Empire");
var lukeSkywalker = new Hero("Luke Skywalker", "Rebels");
var ianSolo = new Hero("Ian Solo", "Rebels");

function makeHerosSpeak(){
  document.body.innerHTML += ianSolo.speak();
  document.body.innerHTML += lukeSkywalker.speak();
  document.body.innerHTML += darkVador.speak();

}
