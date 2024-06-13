// Home.js

import React from "react";
import "./Home.css";
import video from "../../img/video.mp4"

function Home() {
  return (
    <div className="home-container">
      <h1>𝐒𝐔𝐌𝐌𝐄𝐑 𝟐𝟎𝟐𝟒 𝐂𝐎𝐋𝐋𝐄𝐂𝐓𝐈𝐎𝐍</h1>
      {/* Пример сп''иска */}
      <video width="100%" autoPlay muted>
        <source src={video} type="video/mp4" />
      </video>
      {/* Пример изображения */}
      <h1>𝐁𝐞𝐚𝐮𝐭𝐲</h1>
      <img className="img1" src="https://www.dior.com/on/demandware.static/-/Library-Sites-DiorSharedLibrary/default/dw3871ced3/images/beauty/0-HOME/BEAUTY/2024/4-APRIL/SummerLook24_Model_mu_5550x2000-1.jpg" alt="Описание изображения" />


      <p>Welcome to the world of beauty and skincare!

Our company offers you the most advanced and innovative products for self-care, allowing you to unleash your unique beauty and express your individuality. We believe that everyone deserves to feel confident and beautiful, and our mission is to help you achieve that.

What makes our products special:

Natural Ingredients: We strive to use only the finest and natural ingredients in our formulas to provide your skin and hair with all the care it needs, bypassing harmful chemical additives.

Scientific Research: Our products are developed based on the latest scientific research and technological advancements in the field of cosmetology to provide you with effective solutions for various needs of your skin and hair.

Environmental Responsibility: We are committed to the idea of sustainable development and caring for the environment. We aim to reduce our ecological footprint and package our products in recyclable and environmentally friendly materials.

Visible Results: Our products have undergone rigorous testing and received high ratings from our customers. We take pride in the fact that our products deliver visible results and make you feel more confident and beautiful every day.

Immerse yourself in the world of beauty with us and discover new horizons of self-care!

</p>
      <button></button> {/* Пример кнопки */}
      <div></div>

      {/* Пример ссылки */}
      <a href="/about"></a>

      
      <img className="img1" src="https://www.dior.com/on/demandware.static/-/Library-Sites-DiorSharedLibrary/default/dw14e41490/images/beauty/02-MAKEUP/2024/summer-look-2024/SummerLook24_Mood_E-Com_3700x2000-1.jpg" alt="Описание изображения" />
      
    </div>
  );
}

export default Home;
