import React from 'react'
const data=[
  {
    name:"Head",
    tags:[
      {
        heading:"Headache",
        img:""
      },
      {
        heading:"Migraines",
        img:""
      },
      {
        heading:"Dizziness",
        img:""
      },
      {
        heading:"Acne",
        img:""
      },
      {
        heading:"Hectic Fever",
        img:""
      },
    ]
  },
  {
    name:"Body",
    tags:[
      {
        heading:"Neck aches",
        img:"https://previews.123rf.com/images/surfupvector/surfupvector1805/surfupvector180500671/101294471-neck-pain-icon-linear-style-illustration.jpg"
      },
      {
        heading:"shoulder aches",
        img:"https://thumbs.dreamstime.com/b/shoulder-pain-glyph-icon-body-injure-shoulder-ache-sign-vector-graphics-solid-pattern-white-background-shoulder-pain-148898665.jpg"
      },
      {
        heading:"Tender Breasts",
        img:""
      },
      {
        heading:"Breast Sensitivity",
        img:""
      },
      {
        heading:"Backaches",
        img:""
      },
      {
        heading:"Low Back Pain ",
        img:""
      },
      {
        heading:"Body aches",
        img:""
      },
      {
        heading:"Muscle pain",
        img:""
      },
      {
        heading:"Influenza",
        img:""
      },
      {
        heading:"Illness",
        img:""
      },
      {
        heading:"Cramps",
        img:""
      },
      {
        heading:"Chills",
        img:""
      },
      {
        heading:"Itchiness",
        img:""
      },
      {
        heading:"Rashes",
        img:""
      },
      {
        heading:"Night Sweats",
        img:""
      },
      {
        heading:"Hot flashes",
        img:""
      },
      {
        heading:"Weight gain",
        img:""
      },
      {
        heading:"PMS",
        img:""
      },
    ]
  },
  {
    name:"Fluid",
    tags:[
      {
        heading:"Dry",
        img:""
      },
      {
        heading:"Sticky",
        img:""
      },
      {
        heading:"Creamy",
        img:""
      },
      {
        heading:"Watery",
        img:""
      },
      {
        heading:"Egg White",
        img:""
      },
      {
        heading:"Cottage-Cheese",
        img:""
      },
      {
        heading:"Green",
        img:""
      },
      {
        heading:"With blood",
        img:""
      },
      {
        heading:"Foul-smelling",
        img:""
      },
    ]
  },
  {
    name:"Abdomen",
    tags:[
      {
        heading:"Bloating",
        img:""
      },
      {
        heading:"Constipation",
        img:""
      },
      {
        heading:"Diarrhea",
        img:""
      },
      {
        heading:"Nausea",
        img:""
      },
      {
        heading:"Abdominal cramps",
        img:""
      },
      {
        heading:"Dyspesia",
        img:""
      },
      {
        heading:"Gas",
        img:""
      },
      {
        heading:"Hunger",
        img:""
      },
      {
        heading:"Cravings",
        img:""
      },
      {
        heading:"Ovulation pain",
        img:""
      },
    ]
  },
  {
    name:"Mental",
    tags:[
      {
        heading:"Anxiety",
        img:""
      },
      {
        heading:"Insomnia",
        img:""
      },
      {
        heading:"Stress",
        img:""
      },
      {
        heading:"Moodiness",
        img:""
      },
      {
        heading:"Tension",
        img:""
      },
      {
        heading:"Irritability",
        img:""
      },
      {
        heading:"Unable to Concentrate",
        img:""
      },
      {
        heading:"Fatigue",
        img:""
      },
      {
        heading:"Confusion",
        img:""
      },
    ]
  },
  {
    name:"Cervix",
    tags:[
      {
        heading:"pelvic pain",
        img:""
      },
      {
        heading:"Cervical Firmness",
        img:""
      },
      {
        heading:"Cervical Mucus",
        img:""
      },
      {
        heading:"Flow",
        img:""
      },
      {
        heading:"Spotting",
        img:""
      },
      {
        heading:"Irritation",
        img:""
      },
    ]
  }
]
const SymptomCard = ({selectedSymptoms,setSelectedSymptoms}) => {
  const handleSymtoms=(name)=>{
    if (selectedSymptoms.includes(name)) {
      //remove it
      setSelectedSymptoms(selectedSymptoms.filter(item=>item!==name))
    }
    else{
      setSelectedSymptoms([...selectedSymptoms,name])}
  }
  return (
    <div className="bg-white  w-full  ">
      
      {/* Header */}
      <div className="mb-6  border-b-gray-200 p-2">
        <h1 className="text-2xl font-bold text-gray-600">
          Symptoms
        </h1>
      </div>

      {/* Categories */}
      <div className="space-y-8 p-2">
        {data.map((elem, idx) => (
          <div key={idx} className="border rounded-xl p-4 bg-gray-50">

            {/* Category Title */}
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              {elem.name}
            </h2>

            {/* Tags Grid  */}
            <div className="flex flex-wrap gap-3">
              {elem.tags.map((tag, i) => (
                <button
                  key={i}
                  onClick={()=>handleSymtoms(tag.heading)}
                
                  className={`px-4 py-2 text-xl rounded-full border border-gray-300 
                  bg-white hover:bg-pink-100 hover:border-pink-400 
                  hover:text-pink-600 transition duration-200${
                    selectedSymptoms.includes(tag.heading)
                      ? "bg-pink-300 text-black border-pink-600"
                      : "bg-white border-gray-300 hover:bg-pink-100 hover:border-pink-400 hover:text-pink-600"
                  } ` }
                >
                  {/* <img src={tag.img} className="w-10 h-10 object-contain" /> */}
                  {tag.heading}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SymptomCard