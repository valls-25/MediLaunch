import React from "react";

const Toolbar = ({ selected, active, related }: props) => {
  return selected ? (
    <div>
      {active && related.toolbar && React.createElement(related.toolbar)}
      {!active && (
        <div
          className="px-5 py-2 flex flex-col items-center h-full justify-center text-center"
          style={{
            color: "rgba(0, 0, 0, 0.5607843137254902)",
            fontSize: "11px",
          }}
        >
          <h2 className="pb-1">Click on a component to start editing.</h2>
          <h2>
            You could also double click on the layers below to edit their names,
            like in Photoshop
          </h2>
        </div>
      )}
    </div>
  ) : null;
};

type props = {
  selected: any;
  active: any;
  related: any;
};

export default Toolbar;
