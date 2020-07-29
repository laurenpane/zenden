import React from "react";
import "./Blog.css";
import defaultPic from "./cloud-square.png";
import Navbar from "../Navbar/Navbar.js";

export default function Blog() {
  return (
    <div className="blog-page">
      <Navbar />
      <p className="blog-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ante nunc,
        convallis id accumsan vitae, ultrices id tortor. Vivamus odio lectus,
        convallis nec elit non, eleifend scelerisque mauris. Fusce pellentesque
        magna at bibendum mollis.
      </p>
      <div className="blog-grid">
        <div className="blog-item">
          <p className="blog-item-title">Blog post title</p>
          <img className="blog-item-image" src={defaultPic} alt="default-pic" />
          <p className="blog-item-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ante
            nunc, convallis id accumsan vitae, ultrices id tortor. Vivamus odio
            lectus, convallis nec elit non, eleifend scelerisque mauris. Fusce
            pellentesque magna at bibendum mollis.
          </p>
        </div>
        <div className="blog-item">
          <p className="blog-item-title">Blog post title</p>
          <img className="blog-item-image" src={defaultPic} alt="default-pic" />
          <p className="blog-item-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ante
            nunc, convallis id accumsan vitae, ultrices id tortor. Vivamus odio
            lectus, convallis nec elit non, eleifend scelerisque mauris. Fusce
            pellentesque magna at bibendum mollis.
          </p>
        </div>
        <div className="blog-item">
          <p className="blog-item-title">Blog post title</p>
          <img className="blog-item-image" src={defaultPic} alt="default-pic" />
          <p className="blog-item-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ante
            nunc, convallis id accumsan vitae, ultrices id tortor. Vivamus odio
            lectus, convallis nec elit non, eleifend scelerisque mauris. Fusce
            pellentesque magna at bibendum mollis.
          </p>
        </div>
        <div className="blog-item">
          <p className="blog-item-title">Blog post title</p>
          <img className="blog-item-image" src={defaultPic} alt="default-pic" />
          <p className="blog-item-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ante
            nunc, convallis id accumsan vitae, ultrices id tortor. Vivamus odio
            lectus, convallis nec elit non, eleifend scelerisque mauris. Fusce
            pellentesque magna at bibendum mollis.
          </p>
        </div>
        <div className="blog-item">
          <p className="blog-item-title">Blog post title</p>
          <img className="blog-item-image" src={defaultPic} alt="default-pic" />
          <p className="blog-item-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ante
            nunc, convallis id accumsan vitae, ultrices id tortor. Vivamus odio
            lectus, convallis nec elit non, eleifend scelerisque mauris. Fusce
            pellentesque magna at bibendum mollis.
          </p>
        </div>
        <div className="blog-item">
          <p className="blog-item-title">Blog post title</p>
          <img className="blog-item-image" src={defaultPic} alt="default-pic" />
          <p className="blog-item-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ante
            nunc, convallis id accumsan vitae, ultrices id tortor. Vivamus odio
            lectus, convallis nec elit non, eleifend scelerisque mauris. Fusce
            pellentesque magna at bibendum mollis.
          </p>
        </div>
      </div>
    </div>
  );
}
