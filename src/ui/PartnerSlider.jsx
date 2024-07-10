import React from "react";
import useGetOurPartner from "../features/About/useGetOurPartner";
import Carousel from "react-bootstrap/Carousel";

const PartnerSlider = () => {
  const { isLoading, data, error } = useGetOurPartner();

  return (
    <Carousel data-bs-theme="dark">
      {data &&
        data.map((item) => {
          return (
            <Carousel.Item key={item.id}>
              <img
                className="d-block w-100"
                src={item.image}
                alt="First slide"
              />
            </Carousel.Item>
          );
        })}
    </Carousel>
  );
};

export default PartnerSlider;
