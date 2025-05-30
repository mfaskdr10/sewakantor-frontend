import { Swiper, SwiperSlide } from "swiper/react";
import CityCard from "../components/CityCard";
import { useEffect, useState } from "react";
import type { City } from "../types/type";
import axios from "axios";
import { Link } from "react-router-dom";

export default function BrowseCityWrapper() {
  const [cities, setCities] = useState<City[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("http://sewakantor.test/api/cities", {
        headers: {
          "X-API-KEY": "hgsdhgsfads76786dsaf6dsfadf",
        },
      })
      .then((response) => {
        setCities(response.data.data);
        console.log("API response:", response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading ....</p>;
  }

  if (error) {
    return <p>Error Loading Data: {error}</p>;
  }

  return (
    <section id="Cities" className="flex flex-col gap-[30px] mt-[100px]">
      <div className="w-full max-w-[1130px] mx-auto">
        <h2 className="font-bold text-[32px] leading-[48px] text-center pb-[30px]">
          You Can Choose <br /> Our Favorite Cities
        </h2>
        <div className="swiper w-full">
          <div className="swiper-wrapper">
            <Swiper
              direction="horizontal"
              spaceBetween={30}
              slidesPerView="auto"
              slidesOffsetAfter={30}
              slidesOffsetBefore={30}
            >
              {cities.map((city) => (
                <SwiperSlide
                  key={city.id}
                  className="!w-fit first-of-type:pl-[calc((100%-1130px-60px)/2)] last-of-type:pr-[calc((100%-1130px-60px)/2)]"
                >
                  <Link to={`/city/${city.slug}`}>
                    <CityCard city={city} />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
