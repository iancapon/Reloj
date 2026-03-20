class PlanetaComplejo {
    constructor(planeta, nombre, radio) {
        this.planeta = planeta
        this.nombre = nombre
        this.radio = radio
    }

    dibujar(pantalla) {
        pantalla.circunferencia(this.planeta.x, this.planeta.y, this.radio * 2 / 149597870.7)
        pantalla.texto(this.planeta.x, this.planeta.y, this.nombre)
    }

    calcularPosicionActual(fecha) {
        this.planeta.calcularPosicionActual(fecha)
    }
}