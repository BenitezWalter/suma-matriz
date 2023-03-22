ctrlSuma = {};

ctrlSuma.postSuma = async (req, res) => {
  const {
    m00,
    m01,
    m02,
    m10,
    m11,
    m12,
    m20,
    m21,
    m22,
    m100,
    m101,
    m102,
    m110,
    m111,
    m112,
    m120,
    m121,
    m122,
  } = req.body;

  let matriz = [[m00,m01,m02],[m10,m11,m12],[m20,m21,m22]];

  let matriz2 = [[m100,m101,m102],[m110,m111,m112],[m120,m121,m122]];

  let matrizResultado = new Array()

  for (let i = 0; i < 3; i++) {
    matrizResultado[i] = new Array();

    for (let y = 0; y < 3; y++) {
      matrizResultado[i][y] = matriz[i][y] + matriz2[i][y];
    }
  }

  res.json(matrizResultado)
};

module.exports = ctrlSuma