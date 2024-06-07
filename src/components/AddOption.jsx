import React, { useContext } from "react";
import { Context } from "../context/contextApi";

const AddOption = () => {
  const {skillAdded, DeleteSkill}= useContext(Context);
  console.log(skillAdded);
  return (
    <>
      <div className="">
        {skillAdded.length>0?skillAdded?.map((i, index) => {
          return (
            <div key={index} className="skills">
              {i?.skill}{" "}
              <button
                onClick={() => {
                  DeleteSkill(i?.id);
                }}
              >
                delete
              </button>
            </div>
          );
        }):"select skill"}
       </div>
    </>
  );
};

export default AddOption;
