import Image from "next/image";
import { Carousel } from "react-bootstrap";

function TabPhotos({ photos }) {
  return (
    photos && (
      <Carousel interval={null}>
        {photos.map((photoSrc, i) => (
          <Carousel.Item key={i} style={{ height: "700px" }}>
            <Image
              style={{ display: "block" }}
              src={photoSrc}
              loader={({ src }) => src}
              layout={"fill"}
              alt={`slide-${i}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    )
  );
}

export default TabPhotos;
