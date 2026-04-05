import React from 'react'
import { auth } from '../../../../../../../../frontend/src/firebase'
const CrampsVideo = () => {
    const user=auth.currentUser
  if (!user) {
    alert("User not logged in!");
    return;
  }
  return (
<div className="bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300 m-6 p-8 rounded-3xl shadow-2xl">

  <h1 className="text-3xl font-extrabold text-pink-800 text-center mb-10 tracking-wide">
    Recommended Cramps Relief Videos 💗
  </h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
    
    {/* Video 1 */}
    <div className="aspect-video rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/2X78NWuRfJU"
        title="Cramps Relief 1"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>

    {/* Video 2 */}
    <div className="aspect-video rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/6FyHoo4Vfxg"
        title="Cramps Relief 2"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>

    {/* Video 3 */}
    <div className="aspect-video rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/WnSr8w4QEWo"
        title="Cramps Relief 3"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>

    {/* Video 4 */}
    <div className="aspect-video rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/oPzlRICxkP0"
        title="Cramps Relief 4"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>

  </div>

</div>
  )
}

export default CrampsVideo