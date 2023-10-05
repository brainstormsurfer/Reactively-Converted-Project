import { galleryItems } from "../../utils/website_data";
import { GalleryItem } from "../index";

const GalleryItems = () => {
  return (
    <div className="items">
      {galleryItems.map((item) => {
        return (<GalleryItem key={item.id} {...item} />);
      })}
    </div>
  );
};

export default GalleryItems;