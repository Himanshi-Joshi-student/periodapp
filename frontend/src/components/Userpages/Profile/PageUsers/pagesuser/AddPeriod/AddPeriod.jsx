import { useState } from "react";
import UpperCard from "./UpperCard";
import SymptomCard from "./SymptomCard";
import { addDoc,collection, serverTimestamp } from "firebase/firestore";
import{auth,db} from "../../../../../../../../frontend/src/firebase"
import {toast} from 'react-toastify'
const AddPeriod = () => {
const [firstDay,SetFirstday]=useState("");
const [lastDay,SetLastday]=useState("")
const[selectedSymptoms,setSelectedSymptoms]=useState([])
const [loading,setLoading]=useState(false)
const handleSave=async()=>{
  const user=auth.currentUser
  if (!user) {
    alert("User not logged in!");
    return;
  }

  if (!firstDay || !lastDay) {
    alert("Select start and end dates");
    return;
  }
  try {
  const docRef = await addDoc(
    collection(db, "users", user.uid, "periods"),
    {
      startDate:firstDay,
      endDate:lastDay,
      symptoms:selectedSymptoms
    }
  );
   toast.success("Added Successfully",{
          position:'top-center'
        })

  console.log("Saved with ID:", docRef.id);
} catch (error) {
        toast.error(error.message,{
          position:"bottom-center"
        })
  console.error("REAL ERROR:", error);
}

  // try {
  //   await addDoc(
  //     collection(db,"Users", user.uid, "periods"),
  //     {
  //       firstDay:firstDay,
  //       lastDay:lastDay,
  //       symptoms: selectedSymptoms,
  //       createdAt: serverTimestamp()
  //     }
  //   );
  //   alert("Saved successfully ✅");
   
    
  // } catch (error) {
  //   console.error(error);
  //   alert("Error saving ❌");
  //    console.log(firstDay,lastDay,selectedSymptoms);
  // }
  
}
  return (
    <div  className=" bg-white text-black rounded-xl shadow-lg w-full">
    <div className=" p-4 bg-gray-300 flex flex-row justify-between">
      <h1 className="text-2xl font-semibold text-gray-700">Add Period</h1>
      <button className="p-2 px-5 rounded-2xl bg-pink-600 text-white"
      onClick={handleSave}
      disabled={loading}
      >{loading ? "Saving....":"Save"}</button>
    </div>
    <div className="p-5">
      <UpperCard
      firstDay={firstDay}
      SetFirstday={SetFirstday}
      SetLastday={SetLastday}
      lastDay={lastDay}
      />
      <SymptomCard
           setSelectedSymptoms={setSelectedSymptoms}  
           selectedSymptoms={selectedSymptoms}
      />
    </div>

    </div>

  );
};

export default AddPeriod;