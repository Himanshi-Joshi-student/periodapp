import React from 'react'
import audio1 from './audio1.mp3'
import audio2 from './audio2.mp3'
import audio3 from './audio3.mp3'
import audio4 from './audio4.mp3'
import audio5 from './audio5.mp3'
import audio6 from './audio6.mp3'
import audio7 from './audio7.mp3'
import audio8 from './audio8.mp3'
const data = [
  { label: "Sleepy Tune", src: audio1 },
  { label: "Twinkling Stars", src: audio2 },
  { label: "Guitar", src: audio3 },
  { label: "Bells", src: audio4 },
  { label: "Imagination World", src: audio5 },
  { label: "Relief Tune", src: audio6 },
  { label: "Brooklyn Baby", src: audio7 },
  { label: "Sprinkling Air", src: audio8 },
];
const SoundscapeVideo = () => {
  return (
<div className="bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300 p-8 rounded-3xl shadow-2xl h-fit mt-8">

  <h1 className="text-4xl font-extrabold text-pink-800 text-center mb-6">
    Relaxing Period Music & Audio 💗
  </h1>

  <div className="grid grid-cols-1  gap-6 ">
    {data.map((item,index)=>(
    <div className="bg-white rounded-2xl  shadow-lg p-8 flex flex-col items-center hover:scale-105 transition duration-300"
    key={index}
    >
      <p className="font-semibold text-pink-700 mb-2">{item.label}</p>
      <audio className="w-full" controls>
        <source src={item.src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
    ))}

  </div>
</div>
  )
}

export default SoundscapeVideo