import React,{useState} from 'react'
import "./user.css"
function User(){
   
 const [name, setName] = useState('');
 const [nameList, setNameList] = useState([]);

  const handleChange = (e)=>{
    setName(e.target.value)
  }


 const handleSubmit = ()=>{
    // setNameList([...nameList , name]);
    // console.log(nameList)
    setNameList((nameList)=>{
    const updated  =  [...nameList , name];
    console.log(updated);
    return updated;
 })
 setName("")
 }

 const removeItem = (i)=>{
    const updatedListData = nameList.filter((elem , id)=>{
     return i!= id;
    })
    setNameList(updatedListData);
 }
 const removeAll = ()=>{
   setNameList([])
 }
  return (
    <div>
  
    <div>
    <input type="text" placeholder='enter name' value={name} onChange={handleChange}/>
    </div>
    <button onClick={handleSubmit}>Save</button>
   <p> Here is your List : {")"}</p>
   {nameList!=[] && nameList.map((data , i)=>{
    return(
     <div>
     <p key={i}>
     <div>{data}</div>
     <button onClick={()=>removeItem(i)}>remove(-)</button>
     </p>
     </div>
    )
   })}
   {nameList.length >= 1 && <button onClick={removeAll}>removeAll</button>}
   
    </div>
    
    
  )
}

export default User;