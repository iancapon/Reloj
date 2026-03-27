class ObjetoTrackeable {
    constructor(objeto, nombre, radio, Mu) {
        this.objeto = objeto
        this.nombre = nombre
        ////// deberia ser tamaño y masa pero bueno
        this.radio = radio
        this.Mu = Mu // km^3/s^2 --> pasar a AU^3/s^2 o algo asi

        this.orbitaTrazada = []
    }

    get x() {
        return this.objeto.x
    }
    get y() {
        return this.objeto.y
    }

    dibujar(pantalla) {
        pantalla.circunferencia(this.x, this.y, this.radio * 2 / 149597870.7)
        pantalla.texto(this.x, this.y, this.nombre)

        if (this.orbitaTrazada.length > 1) {
            for (let i = 1; i < this.orbitaTrazada.length; i++) {
                const prev = this.orbitaTrazada[i - 1]
                const curr = this.orbitaTrazada[i]

                pantalla.linea(prev.x, prev.y, curr.x, curr.y)
            }
        }
    }
    
    calcularPosicionActual(fechaActual) { // para planetas que usan la fecha actual
        this.objeto.calcularPosicionActual(fechaActual)
        this.trazarOrbita(2000)
    }

    resetearOrbitasTrazadas() {
        this.orbitaTrazada.length = 0
    }

    trazarOrbita(maxArrayLength) {
        // Si el arreglo está vacío, siempre guardamos el primer punto
        if (this.orbitaTrazada.length === 0) {
            this.orbitaTrazada.push({ x: this.x, y: this.y });
            return;
        }

        // Obtener el último punto que guardamos
        const ultimoPunto = this.orbitaTrazada[this.orbitaTrazada.length - 1];

        // Calcular la distancia (en AU) desde el último punto
        const dx = this.x - ultimoPunto.x;
        const dy = this.y - ultimoPunto.y;
        const distancia = Math.sqrt(dx * dx + dy * dy);

        // Umbral: Solo guardamos un punto si se movió al menos 0.05 AU
        // (Puedes ajustar este valor. Un número más grande = órbita más poligonal pero más rendimiento)
        const umbralDistancia = 0.01;

        if (distancia > umbralDistancia) {
            this.orbitaTrazada.push({ x: this.x, y: this.y });

            if (this.orbitaTrazada.length > maxArrayLength) {
                this.orbitaTrazada.shift();
            }
        }
    }
}