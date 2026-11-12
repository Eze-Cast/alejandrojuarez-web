const INVENTARIO = [
  {
    "id": 1,
    "model": "Saveiro Robust",
    "year": 2026,
    "version": "Robust",
    "transmission": "Manual",
    "engine": "1.6 L",
    "power": 109,
    "torque": 155,
    "category": "Pickup",
    "colors": {
      "Plata Sirius": 14,
      "Blanco Candy": 10
    },
    "image": "assets/saveiro-robust.webp",
    "imageLabel": "Saveiro Robust 2026",
    "quantity": 24
  },
  {
    "id": 2,
    "model": "Saveiro Extreme",
    "year": 2026,
    "version": "Extreme",
    "transmission": "Manual",
    "engine": "1.6 L",
    "power": 109,
    "torque": 155,
    "category": "Pickup",
    "colors": {
      "Gris Oliva": 1,
      "Plata Sirius": 1
    },
    "image": "assets/saveiro-extreme.webp",
    "imageLabel": "Saveiro Extreme 2026",
    "quantity": 2
  },
  {
    "id": 3,
    "model": "Virtus",
    "year": 2026,
    "version": "Trendline",
    "transmission": "Manual",
    "engine": "1.6 L",
    "power": 110,
    "torque": 152,
    "category": "Sedán / Hatchback",
    "colors": {
      "Blanco Candy": 2
    },
    "image": "assets/virtus.webp",
    "imageLabel": "Virtus 2026",
    "quantity": 2
  },
  {
    "id": 4,
    "model": "Virtus",
    "year": 2026,
    "version": "Trendline",
    "transmission": "Tiptronic",
    "engine": "1.6 L",
    "power": 110,
    "torque": 152,
    "category": "Sedán / Hatchback",
    "colors": {
      "Blanco Candy": 2,
      "Plata Reflex": 2,
      "Gris Carbon Steel": 1
    },
    "image": "assets/virtus.webp",
    "imageLabel": "Virtus 2026",
    "quantity": 5
  },
  {
    "id": 5,
    "model": "Virtus",
    "year": 2027,
    "version": "Trendline",
    "transmission": "Manual",
    "engine": "1.6 L",
    "power": 110,
    "torque": 152,
    "category": "Sedán / Hatchback",
    "colors": {
      "Rojo Wild Cherry": 1,
      "Gris Carbon Steel": 1,
      "Blanco Candy": 3,
      "Plata Reflex": 2
    },
    "image": "assets/virtus.webp",
    "imageLabel": "Virtus 2026",
    "quantity": 7
  },
  {
    "id": 6,
    "model": "Virtus",
    "year": 2027,
    "version": "Trendline",
    "transmission": "Tiptronic",
    "engine": "1.6 L",
    "power": 110,
    "torque": 152,
    "category": "Sedán / Hatchback",
    "colors": {
      "Plata Reflex": 2,
      "Blanco Candy": 4,
      "Gris Carbon Steel": 1
    },
    "image": "assets/virtus.webp",
    "imageLabel": "Virtus 2026",
    "quantity": 7
  },
  {
    "id": 7,
    "model": "Virtus",
    "year": 2027,
    "version": "Highline",
    "transmission": "Tiptronic",
    "engine": "1.0 L TSI",
    "power": 114,
    "torque": 178,
    "category": "Sedán / Hatchback",
    "colors": {
      "Gris Carbon Steel": 3,
      "Plata Reflex": 3,
      "Rojo Wild Cherry": 1,
      "Blanco Candy": 1
    },
    "image": "assets/virtus.webp",
    "imageLabel": "Virtus 2026",
    "quantity": 8
  },
  {
    "id": 8,
    "model": "GTI",
    "year": 2026,
    "version": "GTI",
    "transmission": "DSG",
    "engine": "2.0 L TSI",
    "power": 261,
    "torque": 370,
    "category": "Deportivo",
    "colors": {
      "Blanco Puro": 1
    },
    "image": "assets/gti.webp",
    "imageLabel": "GTI 2026",
    "quantity": 1
  },
  {
    "id": 9,
    "model": "Jetta",
    "year": 2027,
    "version": "Trendline",
    "transmission": "Tiptronic",
    "engine": "1.4 L TSI",
    "power": 150,
    "torque": 250,
    "category": "Sedán / Hatchback",
    "colors": {
      "Rojo Kings": 1,
      "Negro Profundo": 1,
      "Azul Monterey": 1
    },
    "image": "assets/jetta.webp",
    "imageLabel": "Jetta 2027",
    "quantity": 3
  },
  {
    "id": 10,
    "model": "Jetta",
    "year": 2027,
    "version": "Comfortline",
    "transmission": "Tiptronic",
    "engine": "1.4 L TSI",
    "power": 150,
    "torque": 250,
    "category": "Sedán / Hatchback",
    "colors": {
      "Blanco Puro": 2,
      "Azul Monterey": 1
    },
    "image": "assets/jetta.webp",
    "imageLabel": "Jetta 2027",
    "quantity": 3
  },
  {
    "id": 11,
    "model": "Jetta",
    "year": 2027,
    "version": "Sportline",
    "transmission": "Tiptronic",
    "engine": "1.4 L TSI",
    "power": 150,
    "torque": 250,
    "category": "Sedán / Hatchback",
    "colors": {
      "Plata Pirita": 2,
      "Blanco Puro": 2,
      "Negro Profundo": 1,
      "Rojo Kings": 1
    },
    "image": "assets/jetta.webp",
    "imageLabel": "Jetta 2027",
    "quantity": 6
  },
  {
    "id": 12,
    "model": "Tera",
    "year": 2026,
    "version": "Trendline",
    "transmission": "Manual",
    "engine": "1.6 L",
    "power": 109,
    "torque": 155,
    "category": "SUV",
    "colors": {
      "Blanco Candy": 1,
      "Gris Platino": 2,
      "Negro Ninja": 1
    },
    "image": "assets/tera.webp",
    "imageLabel": "Volkswagen Tera 2026",
    "quantity": 4
  },
  {
    "id": 13,
    "model": "Tera",
    "year": 2026,
    "version": "Comfortline",
    "transmission": "Tiptronic",
    "engine": "1.0 L TSI",
    "power": 99,
    "torque": 165,
    "category": "SUV",
    "colors": {
      "Blanco Candy": 3
    },
    "image": "assets/tera.webp",
    "imageLabel": "Volkswagen Tera 2026",
    "quantity": 3
  },
  {
    "id": 14,
    "model": "Tera",
    "year": 2026,
    "version": "Highline",
    "transmission": "Tiptronic",
    "engine": "1.0 L TSI",
    "power": 99,
    "torque": 165,
    "category": "SUV",
    "colors": {
      "Gris Platino": 1,
      "Blanco Candy": 1
    },
    "image": "assets/tera.webp",
    "imageLabel": "Volkswagen Tera 2026",
    "quantity": 2
  },
  {
    "id": 15,
    "model": "Nivus",
    "year": 2027,
    "version": "Highline",
    "transmission": "Tiptronic",
    "engine": "1.0 L TSI",
    "power": 114,
    "torque": 200,
    "category": "SUV",
    "colors": {
      "Blanco Candy": 1,
      "Gris Moonstone": 1
    },
    "image": "assets/nivus.webp",
    "imageLabel": "Nivus 2027",
    "quantity": 2
  },
  {
    "id": 16,
    "model": "Taigun",
    "year": 2026,
    "version": "Comfortline",
    "transmission": "Por confirmar",
    "engine": "1.0 L TSI",
    "power": 114,
    "torque": 178,
    "category": "SUV",
    "colors": {
      "Rojo Wild Cherry": 1,
      "Plata Reflex": 3,
      "Blanco Candy": 4,
      "Gris Carbon Steel": 3,
      "Verde Avocado": 1
    },
    "image": "assets/taigun.webp",
    "imageLabel": "Nuevo Taigun 2026",
    "quantity": 12
  },
  {
    "id": 17,
    "model": "Taigun",
    "year": 2026,
    "version": "GT TSI",
    "transmission": "Por confirmar",
    "engine": "1.0 L TSI",
    "power": 114,
    "torque": 178,
    "category": "SUV",
    "colors": {
      "Plata Reflex / Negro Profundo": 1,
      "Blanco Candy / Negro Profundo": 1
    },
    "image": "assets/taigun.webp",
    "imageLabel": "Nuevo Taigun 2026",
    "quantity": 2
  },
  {
    "id": 18,
    "model": "Taos",
    "year": 2027,
    "version": "Trendline Plus",
    "transmission": "Tiptronic",
    "engine": "1.4 L TSI",
    "power": 150,
    "torque": 250,
    "category": "SUV",
    "colors": {
      "Plata Pirita": 1,
      "Azul Monterey": 1
    },
    "image": "assets/taos.webp",
    "imageLabel": "Taos 2027",
    "quantity": 2
  },
  {
    "id": 19,
    "model": "Taos",
    "year": 2027,
    "version": "Highline",
    "transmission": "Tiptronic",
    "engine": "1.4 L TSI",
    "power": 150,
    "torque": 250,
    "category": "SUV",
    "colors": {
      "Gris Platino / Negro Profundo": 2,
      "Plata Pirita / Negro Profundo": 1,
      "Blanco Puro / Negro Profundo": 1
    },
    "image": "assets/taos.webp",
    "imageLabel": "Taos 2027",
    "quantity": 4
  },
  {
    "id": 20,
    "model": "Tiguan",
    "year": 2026,
    "version": "GOAL",
    "transmission": "DSG",
    "engine": "1.4 L TSI",
    "power": 150,
    "torque": 250,
    "category": "SUV",
    "colors": {
      "Plata Pirita": 2,
      "Blanco Puro": 4,
      "Gris Platino": 1
    },
    "image": "assets/tiguan.webp",
    "imageLabel": "Tiguan 2026",
    "quantity": 7
  },
  {
    "id": 21,
    "model": "Tiguan",
    "year": 2026,
    "version": "Trendline",
    "transmission": "DSG",
    "engine": "1.4 L TSI",
    "power": 150,
    "torque": 250,
    "category": "SUV",
    "colors": {
      "Verde Avocado": 1
    },
    "image": "assets/tiguan.webp",
    "imageLabel": "Tiguan 2026",
    "quantity": 1
  },
  {
    "id": 22,
    "model": "Tiguan",
    "year": 2026,
    "version": "Comfortline",
    "transmission": "DSG",
    "engine": "1.4 L TSI",
    "power": 150,
    "torque": 250,
    "category": "SUV",
    "colors": {
      "Blanco Puro": 1
    },
    "image": "assets/tiguan.webp",
    "imageLabel": "Tiguan 2026",
    "quantity": 1
  },
  {
    "id": 23,
    "model": "Tiguan",
    "year": 2026,
    "version": "R-Line",
    "transmission": "DSG",
    "engine": "1.4 L TSI",
    "power": 150,
    "torque": 250,
    "category": "SUV",
    "colors": {
      "Plata Pirita": 3
    },
    "image": "assets/tiguan.webp",
    "imageLabel": "Tiguan 2026",
    "quantity": 3
  },
  {
    "id": 24,
    "model": "Tiguan",
    "year": 2027,
    "version": "R-Line",
    "transmission": "DSG",
    "engine": "1.4 L TSI",
    "power": 150,
    "torque": 250,
    "category": "SUV",
    "colors": {
      "Blanco Puro": 4,
      "Gris Platino": 1,
      "Gris Ascot": 1,
      "Negro Profundo": 1,
      "Verde Avocado": 1
    },
    "image": "assets/tiguan.webp",
    "imageLabel": "Tiguan 2026",
    "quantity": 8
  },
  {
    "id": 25,
    "model": "Teramont",
    "year": 2026,
    "version": "Highline",
    "transmission": "Tiptronic",
    "engine": "2.0 L TSI",
    "power": 269,
    "torque": 370,
    "category": "SUV",
    "colors": {
      "Plata Bird": 1,
      "Azul Lupin": 1
    },
    "image": "assets/teramont-2026.png",
    "imageLabel": "Teramont 2026",
    "quantity": 2
  }
];
