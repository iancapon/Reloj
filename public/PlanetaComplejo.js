class PlanetaComplejo {
    constructor(planeta, nombre, radio, Mu) {
        this.planeta = planeta
        this.nombre = nombre
        this.radio = radio
        this.Mu = Mu // km^3/s^2 --> pasar a AU^3/s^2 o algo asi

        this.orbitaTrazada = []
    }

    dibujar(pantalla) {
        pantalla.circunferencia(this.planeta.x, this.planeta.y, this.radio * 2 / 149597870.7)
        pantalla.texto(this.planeta.x, this.planeta.y, this.nombre)

        if (this.orbitaTrazada.length > 1) {
            for (let i = 1; i < this.orbitaTrazada.length; i++) {
                const prev = this.orbitaTrazada[i - 1]
                const curr = this.orbitaTrazada[i]

                pantalla.linea(prev.x, prev.y, curr.x, curr.y)
            }
        }
    }

    calcularPosicionActual(fecha) {
        this.planeta.calcularPosicionActual(fecha)
        this.trazarOrbita(2000)
    }

    resetearOrbitasTrazadas() {
        this.orbitaTrazada.length = 0
    }

    trazarOrbita(maxArrayLength) {
        // Si el arreglo está vacío, siempre guardamos el primer punto
        if (this.orbitaTrazada.length === 0) {
            this.orbitaTrazada.push({ x: this.planeta.x, y: this.planeta.y });
            return;
        }

        // Obtener el último punto que guardamos
        const ultimoPunto = this.orbitaTrazada[this.orbitaTrazada.length - 1];

        // Calcular la distancia (en AU) desde el último punto
        const dx = this.planeta.x - ultimoPunto.x;
        const dy = this.planeta.y - ultimoPunto.y;
        const distancia = Math.sqrt(dx * dx + dy * dy);

        // Umbral: Solo guardamos un punto si se movió al menos 0.05 AU
        // (Puedes ajustar este valor. Un número más grande = órbita más poligonal pero más rendimiento)
        const umbralDistancia = 0.1;

        if (distancia > umbralDistancia) {
            this.orbitaTrazada.push({ x: this.planeta.x, y: this.planeta.y });

            if (this.orbitaTrazada.length > maxArrayLength) {
                this.orbitaTrazada.shift();
            }
        }
    }
}