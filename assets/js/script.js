import Reproductor from "./clases/Reproductor.js";

let objMusica = new Reproductor("https://www.youtube.com/embed/53rCWqRXbnA?si=mT-MR8G7_PiWauFO", "musica");
let objPelicula = new Reproductor("https://www.youtube.com/embed/GEa2GtCNolU?si=9Cy3GIBUHuu3ibUH", "pelicula");
let objSerie = new Reproductor("https://www.youtube.com/embed/mXd1zTwcQ18?si=7RO-jx7eqOhA1JPe", "serie");

objMusica.setInicio(30);

objMusica.playMultimedia();
objPelicula.playMultimedia();
objSerie.playMultimedia();