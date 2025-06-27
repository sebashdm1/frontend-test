import { useEffect } from 'react'
import CookingSection from './components/CookingSection/CookingSection'
import ColorsSection from './components/ColorsSection/ColorsSection'
import './App.scss'

function App() {
  useEffect(() => {
    const handleAnchorClick = (event: Event) => {
      const target = event.target as HTMLElement;
      if (target.tagName === 'A') {
        console.log('Clicked anchor:', target);
        console.log('Anchor text:', target.textContent);
        console.log('Anchor href:', target.getAttribute('href'));
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <main className="app-container">
      <CookingSection />
      <ColorsSection />
    </main>
  )
}

export default App
