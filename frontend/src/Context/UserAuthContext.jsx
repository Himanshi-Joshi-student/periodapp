// import { createContext,useEffect,useContext, useState } from "react";

// import { onAuthStateChanged } from "firebase/auth";
// import {auth} from '../components/firebase'
// import {collection, doc,getDoc} from 'firebase/firestore'
// import {db} from '../components/firebase'
// export const userAuthContext= createContext();
// export const UserAuthContextProvider=({children})=> {
//     const [user,SetUser]=useState(null)
//     const [userData,SetUserData]=useState(null)
//     const [periods,setPeriods]=useState([])
//      useEffect(()=>{
//        const unsubscribe= onAuthStateChanged(auth,async(currentUser)=>{
//                 SetUser(currentUser);
//         const fetchPeriods =async ()=>{
//         if (user){
//           const querySnapshot=await getDoc(
//             collection(db,"users",user.uid,"periods")
//           )
//           const data=querySnapshot.doc.map((doc)=>({
//             id:doc.id,
//             ...doc.data()
//           }))
//           setPeriods(data)
//         }
//         }
//         if (currentUser){
//             const docRef=doc(db,"users",currentUser.uid)
//             const docSnap=await getDoc(docRef);
//             if (docSnap.exists()) {
//               SetUserData(docSnap.data())
//             }

//         }
//             else{
//               SetUserData(null)
//             }
//        });
//        return()=>{
//         unsubscribe();
//        }
//        fetchPeriods()
//      },[])
//     return (
//     <userAuthContext.Provider value={{user,userData}}>
//       {children}
//     </userAuthContext.Provider>)
// }

// export function useUserAuth(){
//   return useContext(userAuthContext)
// }
import { createContext, useEffect, useContext, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "/components/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const userAuthContext = createContext();

export const UserAuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [periods, setPeriods] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        // ✅ Fetch user data
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserData(docSnap.data());
        }

        // ✅ Fetch periods subcollection
        const periodsCollection = collection(db, "users", currentUser.uid, "periods");
        const querySnapshot = await getDocs(periodsCollection);
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPeriods(data);
      } else {
        setUserData(null);
        setPeriods([]);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <userAuthContext.Provider value={{ user, userData, periods }}>
      {children}
    </userAuthContext.Provider>
  );
};

// 🔹 Custom hook to use the context
export function useUserAuth() {
  return useContext(userAuthContext);
}