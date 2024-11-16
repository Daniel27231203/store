import React from "react";
import scss from "./NewArrival.module.scss";

const NewArrival = () => {
  return (
    <section className={scss.MyArival}>
      <div className="container">
        <div className={scss.newArrival}>
          <div className={scss.newArrival__item}>
            <img
              className={scss.newArrival__img}
              src="https://mypc-plus.com/wp-content/uploads/2023/01/playstations-1.png"
              alt="PlayStation 5"
            />
            <h2>PlayStation 5</h2>
            <p>Black and White version of the PS5 coming out on sale.</p>
            <button>Shop Now</button>
          </div>
          <div className={scss.newArrival__item}>
            <img
              className={scss.newArrival__img}
              src="https://krasavica.info/uploads/posts/2024-04/1712213251_krasavica-info-ircu-p-litso-zhenshchini-v-shlyape-6.png"
              alt="Women's Collection"
            />
            <h2>Women's Collections</h2>
            <p>Featured woman collections that give you another vibe.</p>
            <button>Shop Now</button>
          </div>
          <div className={scss.newArrival__item}>
            <img
              className={scss.newArrival__img}
              src="https://www.intex.in/cdn/shop/products/Blaster-101-PDP-Slide-1.png?v=1648710859"
              alt="Speakers"
            />
            <h2>Speakers</h2>
            <p>Amazon wireless speakers</p>
            <button>Shop Now</button>
          </div>
          <div className={scss.newArrival__item}>
            <img
              className={scss.newArrival__img}
              src="https://scentira.in/cdn/shop/files/Chanel_Bleu_de_Chanel_edp_0b42e2f8-5052-4cb8-a5ee-e23b269d11ec.png?v=1715354538&width=1440"
              alt="Perfume"
            />
            <h2>Perfume</h2>
            <p>GUCCI INTENSE OUD EDP</p>
            <button>Shop Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
