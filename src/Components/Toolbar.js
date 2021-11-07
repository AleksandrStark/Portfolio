import React from "react";

const Toolbar = ({ selected, filters, onSelectFilter }) => {
  const onClickFilter = (e) => {
    onSelectFilter(e);
  };

  return (
    <div>
      {filters.map((filter, index) => (
        <button key={index} onClick={onClickFilter}>
          {filter}
        </button>
      ))}
    </div>
  );
};

export default Toolbar;