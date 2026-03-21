class Pantalla {
    constructor(wid, hei, centro, zoom) {
        this.wid = wid
        this.hei = hei
        this.centro = centro // centro es 0,0
        this.zoom = zoom
        this.names = true
        this.fixRadiusAt = 10
    }

    centrarEn(_x, _y) {
        // Invertimos las coordenadas para que el punto objetivo 
        // quede anclado en el centro del lienzo (wid/2, hei/2)
        this.centro.x = -_x;
        this.centro.y = -_y;
        //console.log({_x, _y})
    }

    eje() {
        stroke(0, 200, 0)
        line(this.wid / 2 + this.centro.x * this.zoom, 0, this.wid / 2 + this.centro.x * this.zoom, this.hei)
        line(0, this.hei / 2 - this.centro.y * this.zoom, this.wid, this.hei / 2 - this.centro.y * this.zoom)
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

    linea(_x, _y, x_, y_) {
        const x0 = (_x + this.centro.x) * this.zoom + this.wid / 2
        const y0 = -(_y + this.centro.y) * this.zoom + this.hei / 2
        const x1 = (x_ + this.centro.x) * this.zoom + this.wid / 2
        const y1 = -(y_ + this.centro.y) * this.zoom + this.hei / 2

        stroke(0, 200, 0)
        line(x0, y0, x1, y1)
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