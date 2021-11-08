import React from "react";

const Toolbar = ({ selected, filters, onSelectFilter }) => {
  const onClickFilter = (e) => {
    onSelectFilter(e);
  };

  return (
    <div>
      {filters.map((filter) => (
        <button key={Math.random()} onClick={onClickFilter}>
          {filter}
        </button>
      ))}
    </div>
  );
};

export default Toolbar;