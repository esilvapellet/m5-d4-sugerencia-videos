import Multimedia from "./Multimedia.js";
import modulo from "../modulo.js";

export default class Reproductor extends Multimedia {
    #id;
    constructor(url, id) {
        super(url)
        this.#id = id;
    }

    get id() {
        return this.#id;
    }

    set id(nuevaID) {
        this.#id = nuevaID;
    }

    playMultimedia() {
        modulo.publica(this.url, this.id);
    }

    setInicio(tiempo) {
        let url = this.url;
        if (url.includes("?")) {
            url += `&start=${tiempo}`
        } else {
            url += `?start=${tiempo}`
        }

        this.url = url;

    }

}