import {GalleryItems} from "../index";

const Gallery = () => {
  return (
    <section className="text-center py-3">
      <div className="container">
        <h2 className="section-title">My Work</h2>
        <div className="bottom-line" />
        <p className="lead">Check out some of my projects</p>
      <GalleryItems />
      </div>
    </section>
  );
};

export default Gallery;
