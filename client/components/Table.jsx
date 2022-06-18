import React, { useState, useEffect } from "react";

// components
import { Sort } from "./Sort";

const Table = ({
  name,
  data,
  setData,
  handleDelete,
  sortObjects,
  includeHeading,
  sorting,
}) => {
  const [keys, setKeys] = useState([]);

  //#region useEffect - setting keys for th from data
  useEffect(() => {
    setKeys(Object.keys(data[0]));
  }, [data]);
  //#endregion

  const table = (
    <table>
      <thead>
        <tr>
          {keys.map((key) => {
            return (
              <th key={`${name}-${key}-head`}>
                <div>
                  <span>{key}</span>
                  <Sort
                    sortObjects={sortObjects}
                    array={data}
                    attribute={key}
                    setData={setData}
                    sorting={sorting}
                  />
                </div>
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => {
          return (
            <React.Fragment key={`row-${index}`}>
              <tr>
                {keys.map((key) => {
                  return <td key={`item-${index}-${key}`}>{item[key]}</td>;
                })}
                <td>
                  <button
                    className="delete"
                    onClick={() => handleDelete(item._id)}
                  >
                    <svg viewBox="0 0 24 24">
                      <path d="M22.245,4.015c0.313,0.313,0.313,0.826,0,1.139l-6.276,6.27c-0.313,0.312-0.313,0.826,0,1.14l6.273,6.272  c0.313,0.313,0.313,0.826,0,1.14l-2.285,2.277c-0.314,0.312-0.828,0.312-1.142,0l-6.271-6.271c-0.313-0.313-0.828-0.313-1.141,0  l-6.276,6.267c-0.313,0.313-0.828,0.313-1.141,0l-2.282-2.28c-0.313-0.313-0.313-0.826,0-1.14l6.278-6.269  c0.313-0.312,0.313-0.826,0-1.14L1.709,5.147c-0.314-0.313-0.314-0.827,0-1.14l2.284-2.278C4.308,1.417,4.821,1.417,5.135,1.73  L11.405,8c0.314,0.314,0.828,0.314,1.141,0.001l6.276-6.267c0.312-0.312,0.826-0.312,1.141,0L22.245,4.015z" />
                    </svg>
                  </button>
                </td>
              </tr>
            </React.Fragment>
          );
        })}
      </tbody>
    </table>
  );

  if (includeHeading) {
    return (
      <section className="table-container">
        <h1>{name} table</h1>
        {table}
      </section>
    );
  }

  return table;
};

export { Table };
