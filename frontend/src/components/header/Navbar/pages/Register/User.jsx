import React from 'react'
import{useQuery,useQueryClient,useMutation} from '@tanstack/react-query'
import { fetchUser } from '../../../../../api/api'

const User = () => {
    const {data:userData=[],isLoading,error,isError}=useQuery({
        queryKey:["users"],
        queryFn:async () => {
            const data =fetchUser();
            localStorage.setItem("users",JSON.stringify(data));
            return data
        }
    })
  return (
    <div className='pt-2 p-2'>
      {isLoading && <p>Loading...</p>}
        <div className='m-30 bg-blue-400 text-black rounded-2xl p-5 '>
            <h1>All users</h1>
            {userData.map((user)=>(
                <div
                key={user.id}
                className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition m-5"
                >
                    <h2 className="text-lg font-semibold mb-3">
                        {user.name}
                    </h2>
                    <h1 className="text-lg font-semibold mb-3">
                        {user.password}
                    </h1>
                    <h1 className="text-lg font-semibold mb-3">
                        {user.email}
                    </h1>
                </div>
            ))}
            <div></div>
        </div>
    </div>
  )
}

export default User