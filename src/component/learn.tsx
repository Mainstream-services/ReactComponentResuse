import React from "react";
function Heading({ caption }: any) {
  return (
    <>
      <div>
        <fieldset>
          <legend>{caption}</legend>
          <table></table>
        </fieldset>
      </div>
    </>
  );
}
export default Heading;
