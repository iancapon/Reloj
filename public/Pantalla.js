class Pantalla {
    constructor(wid, hei, centro, zoom) {
        this.wid = wid
        this.hei = hei
        this.centro = centro
        this.zoom = zoom
        this.names = true
        this.fixRadiusAt = 8
    }


    centrarEn(x0, y0) {
        this.centro.x = -x0;
        this.centro.y = -y0;
    }

    eje() {
        stroke(0, 200, 0)
        line(this.wid / 2 + this.centro.x * this.zoomNonLinear(), 0, this.wid / 2 + this.centro.x * this.zoomNonLinear(), this.hei)
        line(0, this.hei / 2 - this.centro.y * this.zoomNonLinear(), this.wid, this.hei / 2 - this.centro.y * this.zoomNonLinear())
    }

    regla() {
        stroke(0, 200, 0)
        noFill()
        this.linea(0, -1.5, 0.1, -1.5)
        this.linea(0.2, -1.5, 0.3, -1.5)
        this.linea(0.4, -1.5, 0.5, -1.5)
        this.linea(0.6, -1.5, 0.7, -1.5)
        this.linea(0.8, -1.5, 0.9, -1.5)
        this.linea(0, -1.6, 1, -1.6)
        this.texto(0.9, -1.6, "1 AU")
    }

    linea(_x0, _y0, _x1, _y1) {
        const x0 = (_x0 + this.centro.x) * this.zoomNonLinear() + this.wid / 2
        const y0 = -(_y0 + this.centro.y) * this.zoomNonLinear() + this.hei / 2
        const x1 = (_x1 + this.centro.x) * this.zoomNonLinear() + this.wid / 2
        const y1 = -(_y1 + this.centro.y) * this.zoomNonLinear() + this.hei / 2

        stroke(0, 200, 0)
        line(x0, y0, x1, y1)
    }

    circunferencia(x0, y0, _diametro) {
        const x = (x0 + this.centro.x) * this.zoomNonLinear() + this.wid / 2
        const y = -(y0 + this.centro.y) * this.zoomNonLinear() + this.hei / 2
        const d = _diametro * this.zoomNonLinear()

        stroke(0, 200, 0)
        noFill()
        circle(x, y, d)
        circle(x, y, this.fixRadiusAt)
    }

    texto(x0, y0, _texto) {
        if (this.names) {
            const x = (x0 + this.centro.x) * this.zoomNonLinear() + this.wid / 2 + 10
            const y = -(y0 + this.centro.y) * this.zoomNonLinear() + this.hei / 2 - 10

            stroke(0, 200, 0)
            text(_texto, x, y)
        }
    }

    zoomNonLinear() {
        return pow(this.zoom, 2) / 3
    }
}