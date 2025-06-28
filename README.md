# Frontend - Test for Filta/Orchard

🚀 **Live Demo:** [https://frontend-test-sebastian-hernandez.vercel.app/](https://frontend-test-sebastian-hernandez.vercel.app/)

Interactive frontend application showcasing cooking and color sections with responsive design, anchor tracking, and image modals.

## 🚀 Getting Started

### **Prerequisites**
- Node.js 18+ 
- npm or yarn

### **Installation & Setup**

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/frontend-test.git
   cd frontend-test
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### **Available Scripts**

```bash
npm run dev        # Start development server
npm run build      # Create production build
npm run preview    # Preview production build
npm run lint       # Run ESLint
npm run test       # Run test suite
npm run test:ui    # Run tests with UI
npm run test:run   # Run tests once
```

## 🏗️ Technical Architecture

### **Stack Decisions**

- **React 18** - Component-based architecture for maintainable UI
- **TypeScript** - Type safety and better developer experience  
- **Vite** - Fast development server and optimized builds
- **SCSS** - Enhanced CSS with variables and nesting
- **Vercel** - Deployment platform with automatic CI/CD

### **Why These Choices?**

**React + TypeScript:**
- Type safety prevents runtime errors
- Component reusability and composition
- Excellent debugging and IDE support
- Industry standard for frontend development

**Vite over Create React App:**
- ⚡ 10x faster development server
- Native ES modules support
- Optimized production builds
- Modern tooling out of the box

**SCSS over styled-components:**
- Better performance (no runtime CSS-in-JS)
- Easier responsive design with mixins
- Familiar CSS syntax with enhancements
- Better integration with design systems


### **Architectural Principles**

1. **Separation of Concerns** - Components, types, and constants separated
2. **Single Responsibility** - Each file has one clear purpose
3. **DRY (Don't Repeat Yourself)** - Constants centralized, no magic strings
4. **Type Safety** - Comprehensive TypeScript coverage
5. **CMS-Ready** - Flexible layouts for dynamic content

## 🎨 Design Implementation

### **Zeplin Integration**

- Used Zeplin MCP tools to extract exact specifications
- Pixel-perfect implementation matching design tokens:
  - Colors: `rgb(14, 20, 20)` dark background
  - Typography: OpenSans with specific weights (300, 700)
  - Spacing: Precise gaps and padding from design


**Breakpoints:**
- Desktop: 1440px+ (primary design)
- Tablet: 768px - 1439px
- Mobile: 320px - 767px


## 🎯 Feature Implementation

### **1. "Cooking Section" (Anchor Tracking)**

```typescript
const handleAnchorClick: AnchorClickHandler = (linkName, href) => {
  console.log('Anchor clicked:', linkName);
  console.log('Anchor href:', href);
  console.log('Timestamp:', new Date().toISOString());
};
```

**Requirements met:**
- ✅ Anchor tags implemented
- ✅ Click tracking with console logging
- ✅ Accessible link behavior

### **2. "Colors Section" (Image Modals)**

```typescript
const [selectedImage, setSelectedImage] = useState<ColorType | null>(null);

const handleImageClick: ImageClickHandler = (imageName) => {
  setSelectedImage(imageName);
};
```

### **3. CMS-Ready Architecture**

All content areas use flexible layouts:

```scss
.content-section {
  min-height: 577px;  // Minimum design height
  // Content can expand beyond this
}

.copy {
  min-height: 130px;  // Ensures minimum visual consistency
  flex-grow: 1;       // Expands with longer content
}
```

## 🔧 Development Workflow

### **Code Quality**
- TypeScript strict mode enabled
- Consistent naming conventions
- Comprehensive type definitions
- SCSS organized with variables

### **Build Process**
```bash
npm run dev     # Development server
npm run build   # Production build
npm run preview # Preview production build
```

## 🚀 Deployment

**Platform:** Vercel
- Automatic deployments from main branch
- Edge network for global performance
- Instant rollbacks if needed
- Custom domain ready

## 🔮 Future Enhancements

### **CMS Integration Ready**
Architecture supports easy integration with:
- **Contentful** (recommended for ease)
- **Sanity** (for advanced content management)  
- **Strapi** (for full control)

### **Performance Monitoring**
- Vercel Analytics ready
- Web Vitals tracking possible
- Image optimization pipeline

### **Accessibility**
- ARIA labels implemented
- Keyboard navigation functional
- Screen reader compatibility

---

**Developer:** Sebastian Hernandez Caro  
**Live Demo:** [https://frontend-test-sebastian-hernandez.vercel.app/](https://frontend-test-sebastian-hernandez.vercel.app/)
