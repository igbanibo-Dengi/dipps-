import React from "react";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
// import images
import IMG1 from "../../Assets/images/001.jpg";
import IMG2 from "../../Assets/images/002.jpg";
import IMG3 from "../../Assets/images/003.jpg";
import IMG4 from "../../Assets/images/004.jpg";
import IMG5 from "../../Assets/images/005.jpg";
import IMG6 from "../../Assets/images/006.jpg";
import IMG7 from "../../Assets/images/007.jpg";
import IMG8 from "../../Assets/images/Bridal.jpg";
import IMG9 from "../../Assets/images/Event.jpg";
import IMG10 from "../../Assets/images/Casual.jpg";
import IMG11 from "../../Assets/images/cta-img.jpg";

function Gallery() {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  const onBeforeSlide = (detail) => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };

  return (
    <div className="App pt-[70px] md:pt-[150px] max-w-[1200px] mx-auto ">
      <div className="text-center mb-10 text-3xl">
        <h1>Portfolio</h1>
      </div>
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        onBeforeSlide={onBeforeSlide}
        elementClassNames="custom-wrapper-class grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-4"
      >
        <a href={IMG10}>
          <img alt="Dipps-Beautifyers" src={IMG10} />
        </a>
        <a href={IMG7}>
          <img alt="Dipps-Beautifyers" src={IMG7} />
        </a>
        <a href={IMG1}>
          <img alt="Dipps-Beautifyers" src={IMG1} />
        </a>
        <a href={IMG2}>
          <img alt="Dipps-Beautifyers" src={IMG2} />
        </a>
        <a href={IMG3}>
          <img alt="Dipps-Beautifyers" src={IMG3} />
        </a>
        <a href={IMG4}>
          <img alt="Dipps-Beautifyers" src={IMG4} />
        </a>
        <a href={IMG11}>
          <img alt="Dipps-Beautifyers" src={IMG11} />
        </a>
        <a href={IMG5}>
          <img alt="Dipps-Beautifyers" src={IMG5} />
        </a>
        <a href={IMG6}>
          <img alt="Dipps-Beautifyers" src={IMG6} />
        </a>
        <a href={IMG8}>
          <img alt="Dipps-Beautifyers" src={IMG8} />
        </a>
        <a href={IMG9}>
          <img alt="Dipps-Beautifyers" src={IMG9} />
        </a>
      </LightGallery>
    </div>
  );
}

export default Gallery;
