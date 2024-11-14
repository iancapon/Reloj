const Reloj = function (settings) {
    this.horaNavegador = () => new Date()

    this.displayWatch = function (tamanio, x, y) {
        this.displayText(tamanio * 0.1, x, y + tamanio * 0.3)

        for (let i = 0; i < 60; i += 5) {
            textSize(tamanio * 0.03)
            const pos = -PI / 2 + (PI * 2) * i / 60
            text(this.addZero(i), x + cos(pos) * tamanio * 0.47, y + sin(pos) * tamanio * 0.47)

        }

        const time = this.horaNavegador()
        const hora = -PI / 2 + (PI * 2) * time.getHours() / 12
        const minuto = -PI / 2 + (PI * 2) * time.getMinutes() / 60
        const segundo = -PI / 2 + (PI * 2) * time.getSeconds() / 60

        const segundero = tamanio * 0.44
        const minutero = tamanio * 0.44
        const horero = tamanio * 0.35

        strokeWeight(4)
        stroke(0)
        line(x, y, x + cos(hora) * horero, y + sin(hora) * horero)

        strokeWeight(3)
        stroke(0)
        line(x, y, x + cos(minuto) * minutero, y + sin(minuto) * minutero)

        strokeWeight(2)
        stroke(255, 0, 0)
        line(x, y, x + cos(segundo) * segundero, y + sin(segundo) * segundero)

        strokeWeight(1)
        stroke(0)
        noFill()
        circle(x, y, tamanio)
    }

    this.displayText = function (tamanio, x, y) {
        const time = this.horaNavegador()
        noStroke()
        fill(110)
        textSize(tamanio)
        text(`${this.addZero(time.getHours())}:${this.addZero(time.getMinutes())}:${this.addZero(time.getSeconds())} `, x, y)
    }

    this.addZero = function (number) {
        if (number < 10) {
            const arr = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09"]
            return arr[number]
        }
        return String(number)
    }


}
