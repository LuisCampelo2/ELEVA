import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { HighLightProjectCard } from "../components/highLightProjectCard";
import { HighLightStudentCard } from "../components/highLightStudentCard";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const count = 9;
  return (
    <>
      <div className="container-home">
        <div style={{ marginLeft: 81 }} className="column gap-5">
          <h1 style={{ color: "white", fontSize: 64 }}>
            DESCUBRA O TALENTO ESTUDANTIL
          </h1>
          <p style={{ color: "white", fontSize: 32 }}>
            PROJETOS REAIS E INOVADORES DESNVOLVIDOS POR ESTUDANTES <br />{" "}
            UNIVERSITÁRIOS
          </p>
        </div>
        <div
          style={{ marginLeft: 81, marginBottom: 39 }}
          className="highlight-projects"
        >
          <Link
            to={"/projects"}
            className="link-highlight-projects"
            style={{ color: "white", fontSize: 32 }}
          >
            VER PROJETOS <i className="bi bi-chevron-right"></i>
          </Link>
          <Link
            to={"/students"}
            style={{ color: "white", fontSize: 24, textDecoration: "none" }}
          >
            CONHECER ESTUDANTES <i className="bi bi-chevron-right"></i>
          </Link>
        </div>
      </div>
      <section className="carousel">
        <h1 style={{ color: "black" }}>Projetos destaques</h1>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={"auto"}
          navigation
          pagination={{ clickable: true }}
          grabCursor={true}
          style={{ paddingBottom: "40px" }}
        >
          {[1, 2, 3, 4, 5].map((_, i) => (
            <SwiperSlide key={i} className="slide-item">
              <HighLightProjectCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className="container-students-home">
        <h1 style={{fontSize:24,marginTop:5}}>ESTUDANTES EM DESTAQUE</h1>
        <div className="students">
          {Array.from({ length: count }).map((_, i) => (
            <HighLightStudentCard key={i} />
          ))}
        </div>
      </section>
    </> 
  );
};
