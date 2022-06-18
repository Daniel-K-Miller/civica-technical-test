import React from "react";

const Sort = ({ sortObjects, array, attribute, setData, sorting }) => {
  const handleSort = (isAscending) => {
    const sortedArray = sortObjects(array, attribute, isAscending);

    if (sortedArray == null) return;

    setData(sortedArray);
  };

  return (
    <div className="sort-btns">
      <button
        className={
          (sorting?.attribute === attribute &&
            sorting?.isAscending &&
            "active") ||
          null
        }
        onClick={() => handleSort(true)}
        aria-label="ascending"
      >
        <svg viewBox="0 0 292.362 292.362">
          <g>
            <path
              d="M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424
		C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428
		s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z"
            />
          </g>
        </svg>
      </button>
      <button
        className={
          (sorting?.attribute === attribute &&
            !sorting?.isAscending &&
            "active") ||
          null
        }
        onClick={() => handleSort(false)}
        aria-label="descending"
      >
        <svg viewBox="0 0 292.362 292.362">
          <g>
            <path
              d="M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424
		C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428
		s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z"
            />
          </g>
        </svg>
      </button>
    </div>
  );
};

export { Sort };
