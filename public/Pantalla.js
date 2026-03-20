class Pantalla {
    constructor(wid, hei, centro, zoom) {
        this.wid = wid
        this.hei = hei
        this.centro = centro // centro es 0,0
        this.zoom = zoom
        this.names = true
        this.fixRadiusAt = 10
    }

    eje() {
        stroke(0, 200, 0)
        line(this.wid / 2 + this.centro.x * this.zoom, 0, this.wid / 2 + this.centro.x * this.zoom, this.hei)
        line(0, this.hei / 2 - this.centro.y * this.zoom, this.wid, this.hei / 2 - this.centro.y * this.zoom)
    }

    circunferencia(_x, _y, _diametro) {
        const x = (_x + this.centro.x) * this.zoom + this.wid / 2
        const y = -(_y + this.centro.y) * this.zoom + this.hei / 2
        const d = _diametro * this.zoom

        stroke(0, 200, 0)
        noFill()
        circle(x, y, d)
        circle(x, y, this.fixRadiusAt)
    }

    texto(_x, _y, _texto) {
        if (this.names) {
            const x = (_x + this.centro.x) * this.zoom + this.wid / 2 + 10
            const y = -(_y + this.centro.y) * this.zoom + this.hei / 2 - 10

            stroke(0, 200, 0)
            text(_texto, x, y)
        }
    }
}