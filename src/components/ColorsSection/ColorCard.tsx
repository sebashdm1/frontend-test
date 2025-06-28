import type { ColorCardProps } from '../../types';

const ColorCard = ({ id, imagePath, title, description, onImageClick }: ColorCardProps) => {
  return (
    <article className="card" itemScope itemType="http://schema.org/Product">
      <figure className="card-figure">
        <button 
          className="card-image-button" 
          onClick={() => onImageClick(id)}
          aria-label={`View ${title} color category in detail`}
          type="button"
        >
          <img 
            src={imagePath} 
            alt={`${title} color category`}
            itemProp="image"
          />
        </button>
      </figure>
      
      <div className="card-content">
        <header>
          <h3 itemProp="name">{title}</h3>
        </header>
        <p itemProp="description">{description}</p>
      </div>
    </article>
  );
};

export default ColorCard; 