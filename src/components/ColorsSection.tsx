import { useState } from 'react';

const ColorsSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageName: string) => {
    setSelectedImage(imageName);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="colors-section">
      <div className="colors-container">
        <div className="content">
          <div className="headline">
            <h2>Taste the Colours</h2>
          </div>
          
          <div className="card-list">
            <div className="card">
              <div className="card-image" onClick={() => handleImageClick('red')}>
                <img src="/images/red.png" alt="Red food items" />
              </div>
              <div className="copy">
                <h3>RED</h3>
                <p>Red foods remind us of berries and soft fruits, so we anticipate a sweet taste.</p>
              </div>
            </div>
            
            <div className="card">
              <div className="card-image" onClick={() => handleImageClick('green')}>
                <img src="/images/green.png" alt="Green food items" />
              </div>
              <div className="copy">
                <h3>Green</h3>
                <p>Fresh, zingy green colours are reminiscent of unripe fruit, promising sour or acid flavours</p>
              </div>
            </div>
            
            <div className="card">
              <div className="card-image" onClick={() => handleImageClick('white')}>
                <img src="/images/white.png" alt="White food items" />
              </div>
              <div className="copy">
                <h3>White</h3>
                <p>White foods evoke memories of salt and salty flavours, driving the expectation of a savoury treat.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <div className="modal-image">
              <img src={`/images/${selectedImage}.png`} alt={`${selectedImage} food items expanded`} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ColorsSection; 