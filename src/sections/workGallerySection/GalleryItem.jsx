

export const GalleryItem = ({ source, category, title }) => {
  return (
    <div className="item">
      <div className="item-image">
        <img src={source} alt={title} />
      </div>
      <div className="item-text">
        <div className="item-text-wrap">
          <p className="item-text-category">{category}</p>
          <h2 className="item-text-title">{title}</h2>
        </div>
      </div>
    </div>
  );
};
