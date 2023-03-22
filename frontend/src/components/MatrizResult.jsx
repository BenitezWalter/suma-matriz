import React from "react";

function MatrizResult({ result }) {
  return (
    <div className="container mt-4">
      <h1>Matriz 3</h1>
      <div className="row">
        <div className="col">
          <input
            disabled
            type="number"
            id="num1"
            className="p-2 input-group-text mt-2 bg-secondary"
            value={result[0][0]}
          />
        </div>
        <div className="col">
          <input
            disabled
            type="number"
            id="num1"
            className="p-2 input-group-text mt-2 bg-secondary"
            value={result[0][1]}
          />
        </div>
        <div className="col">
          <input
            disabled
            type="number"
            id="num1"
            className="p-2 input-group-text mt-2 bg-secondary"
            value={result[0][2]}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <input
            disabled
            type="number"
            id="num1"
            className="p-2 input-group-text mt-2 bg-secondary"
            value={result[1][0]}
          />
        </div>
        <div className="col">
          <input
            disabled
            type="number"
            id="num1"
            className="p-2 input-group-text mt-2 bg-secondary"
            value={result[1][1]}
          />
        </div>
        <div className="col">
          <input
            disabled
            type="number"
            id="num1"
            className="p-2 input-group-text mt-2 bg-secondary"
            value={result[1][2]}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <input
            disabled
            type="number"
            id="num1"
            className="p-2 input-group-text mt-2 bg-secondary"
            value={result[2][0]}
          />
        </div>
        <div className="col">
          <input
            disabled
            type="number"
            id="num1"
            className="p-2 input-group-text mt-2 bg-secondary"
            value={result[2][1]}
          />
        </div>
        <div className="col">
          <input
            disabled
            type="number"
            id="num1"
            className="p-2 input-group-text mt-2 bg-secondary"
            value={result[2][2]}
          />
        </div>
      </div>
    </div>
  );
}

export default MatrizResult;
