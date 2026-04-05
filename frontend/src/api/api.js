const fetchUser =async()=> {
    const response=await fetch('http://localhost:5000/users')
    const Userdata =await response.json()
    return Userdata;
}
const registerUser=async(Userdata)=>{
    try {
        const response =await fetch('http://localhost:5000/users',{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify(Userdata),
        });
        if(!response.ok){
            throw new Error("Failed to register");
        }
        return await response.json();
    } catch (error) {
        console.log("Register API Error:",error);
        throw error;
    }
}
const loginUser= async(email,password)=>{
    try {
        const response=await fetch(`http://localhost:5000/users?email=${email}&password=${password}`);
        const data =await response.json();
        if(data.length === 0){
            throw new Error("Invalid email or password");
        }
        return data[0];
    } catch (error) {
        console.error("Login API Error:",error);
        throw error;
    }
}
export {fetchUser,registerUser,loginUser};