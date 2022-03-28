import Slider from "react-slick";
import img1 from "../Assests/cover.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "./MultipleCarosal.css";

const data = [
  {
    id: 1,
    src: img1,
    text: "Sleep Has a Unique impact on Aging",
    button: "Sleep",
  },
  {
    id: 2,
    src: img1,
    text: "Sleep Has a Unique impact on Aging",
    button: "Sleep",
  },
  {
    id: 3,
    src: img1,
    text: "Sleep Has a Unique impact on Aging",
    button: "Sleep",
  },
  {
    id: 4,
    src: img1,
    text: "Sleep Has a Unique impact on Aging",
    button: "Sleep",
  },
  {
    id: 5,
    src: img1,
    text: "Sleep Has a Unique impact on Aging",
    button: "Sleep",
  },
  {
    id: 6,
    src: img1,
    text: "Sleep Has a Unique impact on Aging",
    button: "Sleep",
  },
];

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <AiOutlineLeft
        style={{
          backgroundColor: "pink",
          color: "white",
          fontSize: "30px",
          padding: "8px",
          zIndex: "999",
        }}
      />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <AiOutlineRight
        style={{
          backgroundColor: "pink",
          color: "white",
          fontSize: "30px",
          padding: "8px",
        }}
      />
    </div>
  );
};

const carouselProperties = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  // slidesToShow: 3,
  // centerMode: true,
  // centerPadding: "170px",
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 426,
      settings: {
        // slidesToShow: 1,
        // centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 769,
      settings: {
        // slidesToShow: 2,
        // centerMode: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        // slidesToShow: 4,
        // centerMode: false,
        // slidesToScroll: 3,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
  ],
};

export const MuliptleCarosal = () => {
  return (
    <div style={{ margin: "32px" }} className="carousel">
      <Slider {...carouselProperties}>
        {data.map((item) => {
          return (
            <div style={{ textAlign: "center" }} key={item.id}>
              <img
                className="multi__image"
                src={item.src}
                alt=""
                style={{
                  width: "100%",
                  height: "170px",
                  objectFit: "cover",
                  marginBottom: "10px",
                  // marginLeft: "10px",
                  paddingRight: "10px",
                }}
              />
              <p
                style={{ fontSize: "14px", padding: "5px 0" }}
                className="item_text"
              >
                {item.text}
              </p>
              <button className="item_button">{item.button}</button>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
