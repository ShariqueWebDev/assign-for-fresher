import React, { useContext, useState } from "react";
import { Context } from "../context/contextApi";

const JobPosting = () => {
  const [selectionSkill, setSelectionSkill] = useState();
  const { deleteAll, sendOption, skillAdded } = useContext(Context);

  const subSkills = [
    {
      id:1,
      name: "Senior Developer",
      skill: [
        {
          id: 0,
          skill: "Html",
        },
        {
          id: 1,
          skill: "Css3",
        },
        {
          id: 2,
          skill: "Javascript",
        },
        {
          id: 3,
          skill: "Reactjs",
        },
      ],
    },
    {
      id:2,
      name: "FullStack Developer",
      skill: [
        {
          id: 4,
          skill: "MongoDB",
        },
        {
          id: 5,
          skill: "python",
        },
        {
          id: 6,
          skill: "Node JS",
        },
        {
          id: 7,
          skill: "AWS Technoloty",
        },
      ],
    },
  ];

  // const addMultiIndex = (skillId) => {
  //   let item = [...selectionSkill]
  //   let index = item.findIndex((p)=>p.id === skillId.id)
  //   if(index === -1){
  //     setSelectionSkill([...selectionSkill, skillId])
  //   }
  //   console.log(selectionSkill);
  // }

  return (
    <div>
      <div style={{ display: "flex", margin: "10px 10px", gap: "15px" }}></div>
      <div>
        <button disabled={skillAdded.length ===0}
          onClick={() => {
            deleteAll();
          }}
        >
          Delete All
        </button>
      </div>
      <div
        className=""
        style={{ display: "flex", margin: "10px 10px", gap: "15px" }}
      >
        <div
          className="subSkills"
          style={{ display: "flex", margin: "10px 10px", gap: "15px" }}
        >
          {subSkills.map((i, index) => {
            return (
              <>
                <div key={i.id} className="mainJob" style={{ fontSize: "30px" }}>
                  {i.name}
                </div>

                {i.skill.map((s, index) => {
                  return (
                    <div
                    onClick={() => {
                      setSelectionSkill(s.skill)
                      sendOption(s, s.skill);
                      
                    }}
                      key={s.id}
                      className="skills"
                      style={{
                        border: "1px solid black",
                        cursor: "pointer",
                        backgroundColor:
                          selectionSkill === s.skill ? "red" : "greenyellow",
                      }}
                    >{s.skill}</div>
                  );
                })}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default JobPosting;
