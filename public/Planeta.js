const J2000 = new Date(Date.UTC(2000, 0, 1, 12, 0, 0))

class Planeta {
    constructor(semiejeMayor, excentricidad, inclinacion, longMedia, longPerihelio, nodoAscendente) {
        this.a = semiejeMayor
        this.e = excentricidad
        this.i = inclinacion
        this.L = longMedia
        this.w_bar = longPerihelio
        this.Omega = nodoAscendente

        // (en AU)
        this.x = 0
        this.y = 0
    }

    calcularPosicionActual(fecha) {
        const d = (fecha - J2000) / 86400000 // de milisegundos a dias
        const T = d / 36525 // en siglos julianos

        // utilizo el tiempo en siglos julianos y la taza de cambio
        // para encontrar la longitud actual y el argumento del perihelio actual

        const L = (this.L[0] + T * this.L[1]) % 360             // longitud media actual
        const w_bar = (this.w_bar[0] + T * this.w_bar[1]) % 360 // longitud del perihelio actual

        const M = (L - w_bar) % 360 // anomalía media actual (en grados)
        const e = (this.e[0] + T * this.e[1]) // excentricidad Actual      (sin unidad)
        const a = (this.a[0] + T * this.a[1]) // semieje mayor Actual      (en AU)

        const E = this.anomaliaExcentrica(M, e) // (en radianes)
        const r = this.radioVerdadero(a, e, E) //  (en AU)
        const tita = this.anomaliaVerdadera(e, E, w_bar) // (en radianes)

        this.x = r * cos(tita)
        this.y = r * sin(tita)
    }

    anomaliaExcentrica(M_grados, excentricidad) {
        const M = M_grados * PI / 180
        const e = excentricidad

        let E = M
        const tolerancia = 1e-6
        const maxIteraciones = 30

        let iteracion = 0
        let E1 = E - (E - e * sin(E) - M) / (1 - e * cos(E))

        while (abs(E - E1) > tolerancia && iteracion < maxIteraciones) { // newton-raphson para f(E)=E−e*sin(E)−M=0
            E = E1
            E1 = E - (E - e * sin(E) - M) / (1 - e * cos(E))
            iteracion++
        }

        return E // anomalía Excéntrica actual (en radianes)
    }

    radioVerdadero(semiejeMayor, excentricidad, anomaliaExcentrica) {
        const a = semiejeMayor
        const e = excentricidad
        const E = anomaliaExcentrica

        const r = a * (1 - e * cos(E))

        return r
    }

    anomaliaVerdadera(e, E, w_bar) {
        const cosv = (cos(E) - e) / (1 - e * cos(E))
        const sinv = (sqrt(1 - e * e) * sin(E)) / (1 - e * cos(E))

        const v = Math.atan2(sinv, cosv)

        const tita = v + w_bar * PI / 180
        return tita
    }

}