import type { ColorCardProps } from '../../types';

const ColorCard = ({ id, imagePath, title, description, onImageClick }: ColorCardProps) => {
  return (
    <div className="card">
      <div className="card-image" onClick={() => onImageClick(id)}>
        <img src={imagePath} alt={`${title} color category`} />
      </div>
      <div className="copy">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ColorCard; 