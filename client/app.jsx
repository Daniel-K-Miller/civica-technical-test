import React, { useState, useEffect } from "react";

// components
import { Table } from "./components/Table";
import { Search } from "./components/Search";

// hooks
import { useInput } from "./hooks/useInput";

export default () => {
  const [error, setError] = useState(false);
  const [personnel, setPersonnel] = useState(null);

  const [filteredPersonnel, setFilteredPersonnel] = useState(null);
  const [search, handleSearch] = useInput("");

  const [sorting, setSorting] = useState(null);

  //#region useEffect - API call
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://localhost:80/api/personnel");

        if (res.status != 200) {
          throw new Error("Error retrieving data from server.");
        }

        const data = await res.json();

        if (data == null || data.length === 0) {
          throw new Error("No data on our system.");
        }

        setFilteredPersonnel(data);
        setPersonnel(data); // search renders from this
      } catch (err) {
        setError(err.message);
      }
    })();
  }, []);
  //#endregion

  //#region useEffect - filtering/sorting search
  useEffect(() => {
    let array = personnel;

    if (sorting != null) {
      array = sortObjects(
        [...personnel],
        sorting.attribute,
        sorting.isAscending
      );
    }

    if (search.length === 0) {
      return setFilteredPersonnel(array);
    }

    const filtered = array.filter((person) =>
      person.GivenName.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredPersonnel(filtered);
  }, [search, personnel]);
  //#endregion

  //#region sortObjects
  const sortObjects = (array, attribute, isAscending) => {
    array = [...array];

    if (array == null || array.length === 0) return;

    if (attribute == null || attribute.length === 0) return;

    if (isAscending == null) return;

    const sortedArray = array.sort((a, b) => {
      a =
        typeof a[attribute] === "string"
          ? a[attribute].toLowerCase()
          : a[attribute];
      b =
        typeof b[attribute] === "string"
          ? b[attribute].toLowerCase()
          : b[attribute];

      if (a > b) {
        return isAscending ? 1 : -1;
      }

      if (a < b) {
        return isAscending ? -1 : 1;
      }

      return 0;
    });

    setSorting({ isAscending, attribute });

    return sortedArray;
  };
  //#endregion

  //#region handleDelete
  const handleDelete = (id) => {
    if (id == null) return;

    const filtered = personnel.filter((person) => person._id !== id);

    setPersonnel(filtered);
  };
  //#endregion

  return (
    <div className="wrapper">
      {personnel && <Search value={search} handleChange={handleSearch} />}
      {personnel == null && error ? (
        <p>{error}</p>
      ) : personnel == null && !error ? (
        <p>loading...</p>
      ) : personnel.length === 0 ||
        (search.length > 0 && filteredPersonnel.length === 0) ? (
        <p>no results found</p>
      ) : (
        filteredPersonnel.length > 0 && (
          <React.Fragment>
            <Table
              name="Personnel"
              data={filteredPersonnel}
              setData={setFilteredPersonnel}
              handleDelete={handleDelete}
              sortObjects={sortObjects}
              includeHeading={true}
              sorting={sorting}
            />
          </React.Fragment>
        )
      )}
    </div>
  );
};
