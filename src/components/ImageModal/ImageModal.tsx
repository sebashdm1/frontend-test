import type { ImageModalProps } from '../../types';
import './ImageModal.scss';

const ImageModal = ({ isOpen, imageName, onClose }: ImageModalProps) => {
  if (!isOpen) {
    return <></>; // React Fragment vacío en lugar de null
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button 
          className="modal-close" 
          onClick={onClose}
          aria-label="Close image modal"
          type="button"
        >
          ×
        </button>
        <div className="modal-image">
          <img 
            src={`/images/${imageName}.png`} 
            alt={`${imageName} food items expanded`}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageModal; 