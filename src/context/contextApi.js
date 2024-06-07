import { createContext, useState } from "react";

export const Context = createContext()

const AppContext = ({children}) =>{
    
    const [skillAdded, setSkillAdded] = useState([])
    const deleteAll = () => {
        setSkillAdded([]);
      };

    const sendOption = (user, type) =>{
        let item = [...skillAdded];
        let index = item?.findIndex((u)=>u.id === user.id)
        if(index === -1){
            setSkillAdded([...skillAdded, user])
            // item =  [...skillAdded, user]
        }
    }  

    const DeleteSkill = (user) =>{
        let item = [...skillAdded]
        item = item.filter((p)=>{
            return p.id !== user
        })
        setSkillAdded(item)
    }

    return(
        <Context.Provider value={{skillAdded, setSkillAdded, deleteAll, sendOption, DeleteSkill}}>
            {children}
        </Context.Provider>
    )
}

export default AppContext;