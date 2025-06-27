import type { ImageModalProps } from '../../types';
import './ImageModal.scss';

const ImageModal = ({ imageName, onClose }: ImageModalProps) => {
  if (!imageName) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <div className="modal-image">
          <img src={`/images/${imageName}.png`} alt={`${imageName} food items expanded`} />
        </div>
      </div>
    </div>
  );
};

export default ImageModal; 