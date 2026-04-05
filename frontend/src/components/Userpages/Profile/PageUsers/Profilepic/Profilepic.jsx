import React from 'react'
import {auth,db} from '../../../../../../../frontend/src/firebase'
import { useState } from 'react';
import { updateDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { doc } from 'firebase/firestore';
const data =[
  {
    heading:"Puppy",
    tags:[
          {
            img:"https://static.vecteezy.com/system/resources/previews/050/494/673/non_2x/zodiac-chinese-dog-animal-of-new-year-sign-icon-asian-kawaii-cute-style-isolated-illustration-of-mascot-poodle-adorable-grey-puppy-with-big-eyes-sitting-and-smiling-on-the-white-background-vector.jpg",
            alt:"puppy1"
          },
          {
              img:"https://cdn.vectorstock.com/i/1000v/58/91/cute-dog-kawaii-chibi-drawing-style-vector-45305891.jpg",
              alt:"puppy2"
          },
          {
              img:"https://i.pinimg.com/736x/1c/64/b6/1c64b636336fb63d15cb60f953273793.jpg",
              alt:"puppy3"
          },
          {
              img:"https://img.freepik.com/premium-vector/cute-cartoon-fluffy-puppy-illustration_53876-360267.jpg?w=360",
              alt:"puppy4"
          },
          {
              img:"https://ih1.redbubble.net/image.5301676146.7858/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
              alt:"puppy5"
          },
          {
              img:"https://cdn.vectorstock.com/i/1000v/58/90/cute-dog-kawaii-chibi-drawing-style-vector-45305890.jpg",
              alt:"puppy6"
          },

    ]
  },
  {
    heading:"Panda",
    tags:[
      {
          img:"https://media.istockphoto.com/id/2218203525/vector/hand-drawn-cute-kid-panda-bear-cartoon-character-in-flat-design-vector-illustration.jpg?s=612x612&w=0&k=20&c=nF3yq9eYlBEyCRjIJvANsIbdcjnq75_0IEQaIYbsB9c=",
          alt:"panda1"
      },
      {
          img:"https://www.shutterstock.com/image-vector/cute-panda-dabbing-pose-cartoon-600nw-2471990065.jpg",
          alt:"panda2"
      },
      {
          img:"https://media.istockphoto.com/id/2218203525/vector/hand-drawn-cute-kid-panda-bear-cartoon-character-in-flat-design-vector-illustration.jpg?s=612x612&w=0&k=20&c=nF3yq9eYlBEyCRjIJvANsIbdcjnq75_0IEQaIYbsB9c=",
          alt:"panda3"
      },
      {
          img:"https://m.media-amazon.com/images/I/61Gpv623CrL._AC_UF1000,1000_QL80_.jpg",
          alt:"panda4"
      },
      {
          img:"https://c8.alamy.com/comp/2WNM6XA/cute-kawaii-panda-bear-mascot-cartoon-funny-smiling-happy-panda-sticker-2WNM6XA.jpg",
          alt:"panda5"
      },
      {
          img:"https://m.media-amazon.com/images/I/418AGAN5dpL._AC_UF1000,1000_QL80_.jpg",
          alt:"panda6"
      },
    ]
  },
  {
    heading:"Calf",
    tags:[
  {
    img:"https://img.freepik.com/free-vector/cute-cow-bite-grass-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium_138676-7384.jpg?semt=ais_hybrid&w=740&q=80",
    alt:"calf1"
  },
  {
    img:"https://cdn.dribbble.com/userupload/29842942/file/original-59131e56f8c2dfe4ee604f576ab7ebba.jpg?resize=752x&vertical=center",
    alt:"calf2"
  },
  {
    img:"https://img.freepik.com/free-vector/cute-cow-bite-grass-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium_138676-7384.jpg?semt=ais_hybrid&w=740&q=80",
    alt:"calf3"
  },
  {
    img:"https://img.freepik.com/free-vector/cute-cow-surprised-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3874.jpg?semt=ais_user_personalization&w=740&q=80",
    alt:"calf4"
  },
  {
    img:"https://img.freepik.com/free-vector/cute-cow-eating-lollipop-candy-cartoon-vector-icon-illustration-animal-food-isolated-flat-vector_138676-11294.jpg?semt=ais_user_personalization&w=740&q=80",
    alt:"calf5"
  },
  {
    img:"https://static.vecteezy.com/system/resources/thumbnails/066/663/646/small_2x/adorable-cartoon-illustration-of-a-happy-smiling-brown-ox-bull-or-calf-cute-kawaii-farm-animal-character-perfect-for-kids-nursery-decor-and-design-projects-vector.jpg",
    alt:"calf6"
  },
    ]
  },
  {
    heading:"Kitty",
    tags:[
       {
    img:"https://cdn.dribbble.com/userupload/29842942/file/original-59131e56f8c2dfe4ee604f576ab7ebba.jpg?resize=752x&vertical=center",
    alt:"cat1"
  },

  {
    img:"https://i.pinimg.com/474x/d1/e6/9d/d1e69db9a429986c14b5d176be45c7b4.jpg",
    alt:"cat2"
  },

  {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR76jku2lszb-ozt4rpeeY_ItURX-jrHoLngA&s",
    alt:"cat3"
  },
  {
    img:"https://www.shutterstock.com/image-vector/cute-white-cat-cartoon-vector-260nw-1974623639.jpg",
    alt:"cat4"
  },
  {
    img:"https://gimgs2.nohat.cc/thumb/f/350/cat-kawaii-character-cartoon--comvectorstock46670692.jpg",
    alt:"cat5"
  },
  {
    img:"https://thumbs.dreamstime.com/b/cat-kitty-face-head-body-kawaii-animal-cute-cartoon-kitten-character-black-contour-silhouette-doodle-linear-sketch-pink-cheeks-169954106.jpg",
    alt:"cat6"
  },
  {
    img:"https://c8.alamy.com/comp/2F7MAX5/cute-cartoon-white-kitten-with-a-bow-childrens-design-vector-2F7MAX5.jpg",
    alt:"cat7"
  }
    ]
  },
  {
    heading:"Mouse",
    tags:[
      {
        img:"https://i.pinimg.com/736x/02/6f/9f/026f9fcf6bcec5eb1217192392fca9b2.jpg",
        alt:"mouse1"
      },
      {
        img:"https://i.pinimg.com/736x/49/bb/d8/49bbd8dc1fa33c4e4818081c627aee70.jpg",
        alt:"mouse2"
      },
      {
        img:"https://marketplace.canva.com/xt8_Q/MAG5_-xt8_Q/1/tl/canva-cute-mouse-illustration-on-isolated-background-MAG5_-xt8_Q.png",
        alt:"mouse3"
      },
      {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlwCe_ZOlsUykmUpoyCIl5ub_uSYMcA7XzgA&s",
        alt:"mouse4"
      },
      {
        img:"https://static.vecteezy.com/system/resources/thumbnails/010/967/776/small/cute-mouse-kawaii-free-vector.jpg",
        alt:"mouse5"
      },
      {
        img:"https://img.freepik.com/premium-vector/cute-cartoon-mouse-character_324746-313.jpg",
        alt:"mouse6"
      },
    ]
  },
  {
    heading:"Bunny",
    tags:[
      {
        img:"https://img.freepik.com/premium-vector/vector-cute-rabbit-bunny-mascot-cartoon_871993-167.jpg?semt=ais_user_personalization&w=740&q=80",
        alt:"bunny1"
      },
      {
        img:"https://thumbs.dreamstime.com/b/cute-white-rabbit-cartoon-character-bunny-waving-paw-adorable-kawaii-style-vector-illustration-kids-design-baby-shower-nursery-407193087.jpg",
        alt:"bunny2"
      },
      {
        img:"https://media.istockphoto.com/id/2195485860/vector/cute-cartoon-rabbit-waving-paw-on-blue-background.jpg?s=612x612&w=0&k=20&c=XBuyVW4yuwcmi7osWHLqFXfENvHS_dRlXq6uUYownWI=",
        alt:"bunny3"
      },
      {
        img:"https://thumbs.dreamstime.com/z/chibi-bunny-rabbit-icon-round-face-cute-cartoon-kawaii-funny-baby-animal-character-happy-valentines-day-love-card-sticker-print-324554311.jpg",
        alt:"bunny4"
      },
      {
        img:"https://www.creativefabrica.com/wp-content/uploads/2023/08/18/Kawaii-Pastel-White-Bunny-Clipart-Graphics-77177868-1-1-580x387.jpg",
        alt:"bunny4"
      },
      {
        img:"https://www.creativefabrica.com/wp-content/uploads/2023/08/18/Cute-Anime-Manga-Cool-Kawaii-Bunny-Clipa-Graphics-77166664-1-1-580x387.jpg",
        alt:"bunny5"
      },
      {
        img:"https://marketplace.canva.com/gHyDQ/MAHAqHgHyDQ/1/tl/canva-cute-pink-bunny-illustration-MAHAqHgHyDQ.png",
        alt:"bunny6"
      },
    ]
  }
 
]
const Profilepic = () => {
    const [selectedCategory, setSelectedCategory] = useState(false);
    const [selectedProfile,SetselectedProfile]=useState()
    
    const hanleSave=async()=>{
      const user=auth.currentUser
  if (!user) {
    alert("User not logged in!");
    return;
  }
   try {
   const docRef =await updateDoc(doc(db,"users",user.uid),{
    ProfileImage:selectedProfile
   })
    toast.success("profile Saved",{
           position:'top-center'
         })
 
   console.log("Saved ");
 } catch (error) {
         toast.error(error.message,{
           position:"bottom-center"
         })
   console.error("REAL ERROR:", error);
 }
    }

  return (
    <div className="min-h-screen bg-pink-50 p-10">
      
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center text-pink-800 mb-10">
        Which Category Would You Prefer For Your Profile?
      </h1>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {data.map((elem, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(elem)}
            className="px-6 py-3 bg-pink-500 text-white font-semibold 
                       rounded-2xl shadow-md hover:bg-pink-600 
                       hover:scale-105 transition duration-300"
          >
            {elem.heading}
          </button>
        ))}
      </div>

      {/* Images Section */}
      {selectedCategory && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {selectedCategory.tags.map((item, index) => (
            <div
              key={index}
              className="bg-white p-3 rounded-2xl shadow-md 
                         hover:shadow-xl hover:scale-105 transition duration-300"
            >
              <button >
              <img
                src={item.img}
                alt={item.alt}
                onClick={()=>SetselectedProfile(item.img)}
                className="w-full max-[600]:h-40 h-70 object-cover rounded-xl"
              />
              </button>
            </div>
          ))}
        </div>
      )}
      <button
      onClick={hanleSave} 
      className='bg-pink-600 text-2xl text-white px-5 p-2 mt-10 rounded-2xl'
      >save</button>
    </div>
  )
}

export default Profilepic