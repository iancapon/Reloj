class PlanetaComplejo {
    constructor(planeta, nombre, radio, Mu) {
        this.planeta = planeta
        this.nombre = nombre
        this.radio = radio
        this.Mu = 1 // Masa * G
    }

    dibujar(pantalla) {
        pantalla.circunferencia(this.planeta.x, this.planeta.y, this.radio * 2 / 149597870.7)
        pantalla.texto(this.planeta.x, this.planeta.y, this.nombre)
    }

    calcularPosicionActual(fecha) {
        this.planeta.calcularPosicionActual(fecha)
    }
}