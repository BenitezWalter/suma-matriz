import React, { useState } from "react";
import MatrizResult from "./MatrizResult";

function SumaForm() {
  const [result, setResultado] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);

  const [m00, setm00] = useState(0);
  const [m01, setm01] = useState(0);
  const [m02, setm02] = useState(0);
  const [m10, setm10] = useState(0);
  const [m11, setm11] = useState(0);
  const [m12, setm12] = useState(0);
  const [m20, setm20] = useState(0);
  const [m21, setm21] = useState(0);
  const [m22, setm22] = useState(0);
  const [m100, setm100] = useState(0);
  const [m101, setm101] = useState(0);
  const [m102, setm102] = useState(0);
  const [m110, setm110] = useState(0);
  const [m111, setm111] = useState(0);
  const [m112, setm112] = useState(0);
  const [m120, setm120] = useState(0);
  const [m121, setm121] = useState(0);
  const [m122, setm122] = useState(0);

  const postSuma = async () => {
    const json = await fetch("http://localhost:3000/Suma", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        m00: parseInt(m00),
        m01: parseInt(m01),
        m02: parseInt(m02),
        m10: parseInt(m10),
        m11: parseInt(m11),
        m12: parseInt(m12),
        m20: parseInt(m20),
        m21: parseInt(m21),
        m22: parseInt(m22),
        m100: parseInt(m100),
        m101: parseInt(m101),
        m102: parseInt(m102),
        m110: parseInt(m110),
        m111: parseInt(m111),
        m112: parseInt(m112),
        m120: parseInt(m120),
        m121: parseInt(m121),
        m122: parseInt(m122),
      }),
    });

    if (!json.ok) {
      return alert("Error al hacer la peticion");
    }

    const data = await json.json();

    console.log(data);

    setResultado(data);
    console.log()
  };
  function handleSubmit(e) {
    e.preventDefault();
    postSuma();
  }
  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <h1 className="container">Matriz 1</h1>
      <div className="container me-6">
        <div className="row">
          <div className="col">
            <input
              type="number"
              id="num1"
              className="p-2 input-group-text mt-2 bg-info"
              onChange={(e) => setm00(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="number"
              id="num2"
              className="p-2 input-group-text mt-2 bg-info"
              onChange={(e) => setm01(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="number"
              id="num1"
              className="p-2 input-group-text mt-2 bg-info"
              onChange={(e) => setm02(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input
              type="number"
              id="num2"
              className="p-2 input-group-text mt-2 bg-info"
              onChange={(e) => setm10(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="number"
              id="num1"
              className="p-2 input-group-text mt-2 bg-info"
              onChange={(e) => setm11(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="number"
              id="num2"
              className="p-2 input-group-text mt-2 bg-info"
              onChange={(e) => setm12(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input
              type="number"
              id="num1"
              className="p-2 input-group-text mt-2 bg-info"
              onChange={(e) => setm20(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="number"
              id="num1"
              className="p-2 input-group-text mt-2 bg-info"
              onChange={(e) => setm21(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="number"
              id="num2"
              className="p-2 input-group-text mt-2 bg-info"
              onChange={(e) => setm22(e.target.value)}
            />
          </div>
        </div>
      </div>

      <br />
      <h1 className="container">Matriz 2</h1>
      <div className="container me-6">
        <div className="row">
          <div className="col">
            <input
              type="number"
              id="num1"
              className="p-2 input-group-text mt-2 bg-info"
              onChange={(e) => setm100(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="number"
              id="num2"
              className="p-2 input-group-text mt-2 bg-info"
              onChange={(e) => setm101(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="number"
              id="num1"
              className="p-2 input-group-text mt-2 bg-info"
              onChange={(e) => setm102(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input
              type="number"
              id="num2"
              className="p-2 input-group-text mt-2 bg-info"
              onChange={(e) => setm110(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="number"
              id="num1"
              className="p-2 input-group-text mt-2 bg-info"
              onChange={(e) => setm111(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="number"
              id="num2"
              className="p-2 input-group-text mt-2 bg-info"
              onChange={(e) => setm112(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input
              type="number"
              id="num1"
              className="p-2 input-group-text mt-2 bg-info"
              onChange={(e) => setm120(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="number"
              id="num1"
              className="p-2 input-group-text mt-2 bg-info"
              onChange={(e) => setm121(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="number"
              id="num2"
              className="p-2 input-group-text mt-2 bg-info"
              onChange={(e) => setm122(e.target.value)}
            />
          </div>
        </div>
      </div>
      <br />

      <MatrizResult result={result}></MatrizResult>

      <div className="container mt-4">
        <button className="p-2 btn btn-primary color-blue">Sumar</button>
      </div>
    </form>
  );
}

export default SumaForm;
