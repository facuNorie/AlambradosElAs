let boton = document.querySelector(".button");
let nav = document.querySelector(".Nav");
let main = document.querySelector(".main");
let header = document.querySelector(".header");



boton.addEventListener("click", navResponsive =>{
    nav.classList.toggle("active");
    header.classList.toggle("headerActive");
});







let containerCards = document.querySelector(".containerCards");

let containerDetail = document.querySelector(".containerDetail");


// CREANDO LINKS

crearElemento = (link,parrafo,imagen)=>{
    let a = document.createElement("A");
    a.setAttribute("href", "#"+link);
    a.classList.add("card");
    let img = document.createElement("IMG");
    img.setAttribute("src", imagen);
    img.classList.add("card-IMG");
    a.appendChild(img);
    let p = document.createElement("P");
    p.innerHTML = parrafo;
    p.classList.add("card-P");
    a.appendChild(p);
    containerCards.appendChild(a);
}

crearElemento("alambrados","Alambrados","img/foto_alambrados2.jpg");

crearElemento("cerramientos","Cerramientos","img/foto_cerramientos4.jpg");

crearElemento("tranqueras","Tranqueras","img/foto_tranqueras1.jpg");

crearElemento("placas","Placas","img/foto_placas2.jpg");

crearElemento("portones","Portones","img/foto_portones2.jpg");

//  CREANDO SECCIONES

crearSection = (name,img1,titulo,descripcion) =>{
    let div = document.createElement("DIV");
    div.setAttribute("id",name);
    div.classList.add("detail");

    let divChild = document.createElement("DIV");
    divChild.classList.add("mySlides");
    divChild.setAttribute("id","slide-"+name);
    div.appendChild(divChild);

    let imgA = document.createElement("IMG");
    imgA.setAttribute("src", img1);
    divChild.appendChild(imgA);

    let divP = document.createElement("DIV");
    divP.classList.add("divDetails-p");

    let title = document.createElement("P");
    title.innerHTML = titulo;
    title.classList.add("normalize");
    title.classList.add("titleEtiqueta");
    divP.appendChild(title);
    

    let desc = document.createElement("P");
    desc.innerHTML = descripcion;
    desc.classList.add("normalize");
    desc.classList.add("descEtiqueta");
    divP.appendChild(desc);

    div.appendChild(divP);
    

    
    
    
    containerDetail.appendChild(div);

}

crearSection("alambrados","img/foto_alambrados3.jpg","Alambrados y Postes","Realizados en materiales de primera calidad. Colocación con mano de obra especializada. Variedad de propuestas, formas y diseños. Soluciones rápidas, eficientes y durables.");

crearSection("cerramientos","img/foto_cerramientos4.jpg","Cerramientos","Realizados con materiales resistentes a la interperie. Ofrecen confort y tranquilidad. Con puerta de acceso con traba de seguridad para mayor comodidad. Diseñados a medida");

crearSection("tranqueras","img/foto_tranqueras3.jpg","Tranqueras","Realizadas en quebracho colorado con diseño estilo campo. En varias medidas de acuerdo a cada necesidad. Maderas resistentes a las inclemencias del tiempo, y de gran durabilidad.");

crearSection("placas","img/foto_placas2.jpg","Placas Premoldeadas","Venta y colocación de cercos premoldeados fabricados con placas de hormigón vibrado de gran durabilidad y hermetismo, Ideales para crear paredones de delimitación en fábricas, empresas, lotes y barrios cerrados. De excelente calidad.");

crearSection("portones","img/foto_portones2.jpg","Portones y Puertas","Realizados con caño estructural y alambre de primera calidad, o integramente en madera con herrajes. En todos los tamaños, estandar y a medida. Con cierre para candado y traba de seguridad.");


// CONTACTO

let containerContactos = document.querySelector(".containerContactos");

let divNosotros = document.createElement("DIV");
divNosotros.classList.add("divNosotros");
divNosotros.setAttribute("id","nosotros");
let parrafoNosotros = document.createElement("P");
parrafoNosotros.classList.add("parrafoNosotros");
parrafoNosotros.innerHTML = `<b class="tituloContacto">Alambrados  <b class="ElAsContacto"> El AS </b></b> <br> Somos una empresa con mas de 10 años en el mercado dedicada a la fabricación, venta e instalacion de alambrados perimetrales, asimismo fabricamos placas de hormigon para cercos, tranqueras y cerramientos de piletas. Contamos con un amplia variedad de puertas y portones reforzados y económicos, fabricamos portones especiales a medida. Instalamos en todo el país.`;
divNosotros.appendChild(parrafoNosotros);
containerContactos.appendChild(divNosotros);