class Nave {
    constructor(x, y, u, v, planetas) {
        //en AU
        this.x = x
        this.y = y
        this.vx = u
        this.vy = v
        this.ax_prev = 0
        this.ay_prev = 0
        //en km/s^2
        this.ax = 0
        this.ay = 0

        this.planetas = planetas
    }

    resetearGravedad() {
        this.ax = 0
        this.ay = 0
    }

    sumarGravedad(planeta) {
        const AU_A_KM = 149597870.7
        const dx = (planeta.x - this.x) * AU_A_KM
        const dy = (planeta.y - this.y) * AU_A_KM

        const r2 = dx * dx + dy * dy
        const r = sqrt(r2)

        const g = planeta.Mu / r2

        this.ax += g * dx / r
        this.ay += g * dy / r
    }

    calcularPosicionActual(msAvanzados) {
        const KM_A_AU = 1 / 149597870.7;
        const segAvanzados = msAvanzados / 1000;

        // 1. Calcular la NUEVA POSICIÓN usando la velocidad y la aceleración ACTUALES
        // Fórmula: x = x + v*dt + 0.5*a*dt^2
        this.x += (this.vx * segAvanzados) + (0.5 * this.ax_prev * segAvanzados * segAvanzados * KM_A_AU);
        this.y += (this.vy * segAvanzados) + (0.5 * this.ay_prev * segAvanzados * segAvanzados * KM_A_AU);

        // 2. Calcular la NUEVA GRAVEDAD en esta nueva posición
        this.resetearGravedad();
        this.planetas.forEach(planeta => this.sumarGravedad(planeta));

        // 3. Calcular la NUEVA VELOCIDAD promediando la gravedad vieja y la nueva
        // Fórmula: v = v + 0.5*(a_vieja + a_nueva)*dt
        this.vx += 0.5 * (this.ax_prev + this.ax) * segAvanzados * KM_A_AU;
        this.vy += 0.5 * (this.ay_prev + this.ay) * segAvanzados * KM_A_AU;

        // 4. Guardar la gravedad actual para usarla en el próximo fotograma
        this.ax_prev = this.ax;
        this.ay_prev = this.ay;
    }

    

}