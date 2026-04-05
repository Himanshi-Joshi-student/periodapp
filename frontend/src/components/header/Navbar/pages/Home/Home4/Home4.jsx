import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const data = [
  {
    heading: "Body Care",
    about:
      "Take care of your body weight by BMI, get tips for working on you",
    img: "https://www.herbalife.com/dmassets/regional-reusable-assets/apac/images/li-woman-measuring-waist-891441272.jpg",
  },
  {
    heading: "Love",
    about: "Feels Like a Friend, Not an App!!!! ❤️",
    img: "https://femina.wwmindia.com/content/2022/mar/women-011646387987.jpg",
  },  {
    heading: "Security",
    about:
      "In perspective of privacy, your Personal data that stays private to you 😎",
    img: "https://s44783.pcdn.co/in/wp-content/uploads/sites/3/2024/04/cyber-security-tech.png",
  },

  {
    heading: "Cute Stickers",
    about:
      "Log symptoms using our pack of 100+ adorable animated stickers",
    img: "https://static.vecteezy.com/system/resources/thumbnails/050/411/340/small/set-of-cute-rabbit-bunny-in-various-feeling-and-poses-emotional-easter-rodent-animal-character-cartoon-design-image-for-card-sticker-decorated-baby-product-kawaii-illustration-vector.jpg",
  },
];

const FeatureSlider = () => {
  return (
    <div className="w-full  border border-neutral-800 p-10 max-w-6xl mx-auto mt-12 px-4 rounded-4xl">
      <div className=" items-center flex flex-col justify-items-center m-2">
        <h1 className=" text-white lg:text-2xl font-bold">Make it <span className="text-pink-800">uniquely</span>  yours</h1>
        <p className="m-2 text-white lg:text-2xl">Customize Luna to match your aesthetic. It's your body, your rules!</p>
      </div>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation
        className="rounded-2xl overflow-hidden shadow-xl"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-[380px] md:h-[420px] bg-cover bg-center relative"
              style={{ backgroundImage: `url(${item.img})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-6">
                <h2 className="lg:text-3xl md:text-4xl font-bold text-white mb-4">
                  {item.heading}
                </h2>
                <p className="text-white max-w-xl mb-6">
                  {item.about}
                </p>
                <button className="bg-pink-700 hover:bg-pink-600 transition text-white px-8 py-2 rounded-full">
                  Read More
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeatureSlider;
