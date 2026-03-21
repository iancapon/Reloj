const sol = new ObjetoTrackeable(
    planeta = { x: 0, y: 0, calcularPosicionActual: () => null },
    nombre = "sol",
    radio = 696000,
    mu = 132712440018 // km^3/s^2
)

const mercurio = new ObjetoTrackeable(
    planeta = new Planeta(
        a = [0.38709927, 0.00000037],
        e = [0.20563593, 0.00001906],
        i = [7.00497902, -0.00594749],
        L = [252.25032350, 149472.67411175],
        w_bar = [77.45779628, 0.16047689],
        Omega = [48.33076593, -0.12534081]
    ),
    nombre = "mercurio",
    radio = 2440,
    mu = 22032 // km^3/s^2
)

const venus = new ObjetoTrackeable(
    planeta = new Planeta(
        a = [0.72333566, 0.00000390],
        e = [0.00677672, -0.00004107],
        i = [3.39467605, -0.00078890],
        L = [181.97909950, 58517.81538600],
        w_bar = [131.60246718, 0.00268329],
        Omega = [76.67984255, -0.27769418]
    ),
    nombre = "venus",
    radio = 6052,
    mu = 324859 // km^3/s^2
)

const tierra = new ObjetoTrackeable(
    planeta = new Planeta(
        a = [1.00000011, -0.00000005],
        e = [0.01671022, -0.00003804],
        i = [0.00005, -0.01337178],
        L = [100.46435, 35999.37244981],
        w_bar = [102.94719, 0.32327364],
        Omega = [0.0, 0.0]
    ),
    nombre = "tierra",
    radio = 6371,
    mu = 398600 // km^3/s^2
)

const marte = new ObjetoTrackeable(
    planeta = new Planeta(
        a = [1.52366231, -0.00007221],
        e = [0.09341233, 0.00011902],
        i = [1.85061, -0.00813131],
        L = [-4.56061, 19140.30268499],
        w_bar = [-23.94362959, 0.44441088],
        Omega = [49.57854, -0.29257343]
    ),
    nombre = "marte",
    radio = 3389.5,
    mu = 42828 // km^3/s^2
)

const jupiter = new ObjetoTrackeable(
    planeta = new Planeta(
        a = [5.20288700, -0.00011607],
        e = [0.04838624, -0.00012050],
        i = [1.30439695, -0.00183714],
        L = [34.39644051, 3034.74612775],
        w_bar = [14.72847983, 0.21252668],
        Omega = [100.47390909, 0.20469106]
    ),
    nombre = "jupiter",
    radio = 71492,
    mu = 126686534 // km^3/s^2
)

const saturno = new ObjetoTrackeable(
    planeta = new Planeta(
        a = [9.53667594, -0.00125060],
        e = [0.05386179, -0.00050991],
        i = [2.48599187, 0.00193609],
        L = [49.95424423, 1222.49362201],
        w_bar = [92.59887831, -0.41897216],
        Omega = [113.66242448, -0.28867794]
    ),
    nombre = "saturno",
    radio = 58232,
    mu = 37931187 // km^3/s^2
)

const urano = new ObjetoTrackeable(
    planeta = new Planeta(
        a = [19.18916464, -0.00196176],
        e = [0.04725744, -0.00004397],
        i = [0.77263783, -0.00242939],
        L = [313.23810451, 428.48202785],
        w_bar = [170.95427630, 0.40805281],
        Omega = [74.01692503, 0.04240589]
    ),
    nombre = "urano",
    radio = 25362,
    mu = 5793939 // km^3/s^2
)

const neptuno = new ObjetoTrackeable(
    planeta = new Planeta(
        a = [30.06992276, 0.00026291],
        e = [0.00859048, 0.00005105],
        i = [1.77004347, 0.00035372],
        L = [-55.12002969, 218.45945325],
        w_bar = [44.96476227, -0.32241464],
        Omega = [131.78422574, -0.00508664]
    ),
    nombre = "neptuno",
    radio = 24622,
    mu = 6836529 // km^3/s^2
)

const pluton = new ObjetoTrackeable(
    planeta = new Planeta(
        a = [39.48168677, -0.00076912],
        e = [0.24880766, 0.00006465],
        i = [17.14175, 0.003075],
        L = [238.92881, 145.20775],
        w_bar = [224.06676, -0.036736],
        Omega = [110.30347, -0.010369]
    ),
    nombre = "pluton",
    radio = 1188,
    mu = 871 // km^3/s^2
)