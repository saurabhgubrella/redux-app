import React,{useState} from 'react'

function UserInfo() {
const [info, setInfo] = useState("");
const [infoData, setInfoData] = useState([]);

const handleChange=(e)=>{
    setInfo(e.target.value);
}

        const handleSubmit=()=>{
//   setInfoData([...infoData , info])
        setInfoData((infoData=>{
        const updated = [...infoData , info];
        return updated;
        }))
        setInfo("");
        }

        const handleRemove = (i)=>{
            const updatedlist  = infoData.filter((ele , id)=>{
            return(
             i!= id
            )  
            })
            setInfoData(updatedlist);
        }

        const removeAll = ()=>{
            setInfoData([]);
        }
  return (
    <div>
    <div>
    <input type="text" placeholder="enter text" value={info} onChange={handleChange}/>
    <button onClick={handleSubmit}>Submit</button>
    <p>Here is your list : {"("}</p>
    </div>
    
    {infoData!=[] && infoData.map((data , i)=>{
        return (
            <div>
            <p key={i}>
            <div>{data}</div>
            <button onClick={()=>handleRemove(i)}>remove(-)</button>
            </p>
            </div>
        )
    })}

    <div>
    {infoData.length >= 1 ? 
    <button onClick={removeAll}>Remove All</button> :""}
    </div>
    
    </div>
    
  )
}

export default UserInfo;