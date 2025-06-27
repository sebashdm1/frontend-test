import './CookingSection.scss';

const CookingSection = () => {
  return (
    <section className="cooking-section">
      <div className="cooking-container">
        <div className="images-section">
          <div className="image-left">
            <img src="/images/cooking-left.png" alt="Cooking ingredients and preparation" />
          </div>
          <div className="images-right">
            <div className="image-top">
              <img src="/images/cooking-right-top.png" alt="Cooking process" />
            </div>
            <div className="image-bottom">
              <img src="/images/cooking-right-bottom.png" alt="Final cooking result" />
            </div>
          </div>
        </div>
        
        <div className="content-section">
          <div className="headline">
            <h2>WHAT DOES COOKING MEAN?</h2>
          </div>
          
          <div className="body">
            <p>
              Is it simply applying heat to a food product? A way of making certain food safe to eat? Or a way to create flavour and make food more appealing? This is just part of what Hervé This, the father of molecular gastronomy, has dedicated his life to finding out. We spoke to him to find out what his experiments have told him. And in the process even discovered the secret to cooking the perfect egg...
            </p>
            
            <div className="call-out">
              <h3>THE PERFECT EGG</h3>
              <p>Keep water between 67 and 68°C for a flavourful, tender yolk</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CookingSection; 