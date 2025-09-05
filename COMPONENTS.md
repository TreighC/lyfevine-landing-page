# Components Documentation

## Main Page Sections

### HeroSection
**File**: `src/components/HeroSection.tsx`
**Purpose**: Main hero section with video background and call-to-action
**Features**:
- Video background with overlay
- Responsive image layout
- Call-to-action buttons
- Professional typography

### Navbar
**File**: `src/components/Navbar.tsx`
**Purpose**: Navigation bar with logo and menu
**Features**:
- Glass effect background
- Responsive navigation
- Brand logo and text
- Authentication buttons

### WhyLyfevineSection
**File**: `src/components/WhyLyfevineSection.tsx`
**Purpose**: Benefits and value proposition section
**Features**:
- Clean white background
- Benefit cards with icons
- Responsive grid layout

### CoreBenefitsSection
**File**: `src/components/CoreBenefitsSection.tsx`
**Purpose**: Core features and benefits
**Features**:
- Light gray background
- Feature cards with descriptions
- Hover effects

### HowItWorksSection
**File**: `src/components/HowItWorksSection.tsx`
**Purpose**: Three-step process explanation
**Features**:
- Dark navy background
- Animated arrows between steps
- Glass effect cards
- Step-by-step process

### WellnessServicesSection
**File**: `src/components/WellnessServicesSection.tsx`
**Purpose**: Services and categories overview
**Features**:
- White background
- Service category cards
- Responsive layout

### CallToActionSection
**File**: `src/components/CallToActionSection.tsx`
**Purpose**: Final call-to-action section
**Features**:
- Dark navy background
- Two action buttons
- Professional styling

### Footer
**File**: `src/components/Footer.tsx`
**Purpose**: Page footer with links and information
**Features**:
- Dark navy background
- Footer links and information
- Professional layout

## UI Components

### InteractiveAnimatedArrowIcon
**File**: `src/components/ui/interactive-animated-arrow-icon.tsx`
**Purpose**: Custom animated arrow component
**Props**:
- `size`: Number (default: 48)
- `color`: String (default: '#08a54f')
- `className`: String (optional)
**Features**:
- MoveRight icon from Lucide React
- Custom arrowFlow animation
- Glow effect background
- Responsive sizing

### IconPreview
**File**: `src/components/IconPreview.tsx`
**Purpose**: Development tool for testing icons and animations
**Access**: `http://localhost:8080/icon-preview`
**Features**:
- Icon selection dropdown
- Size and color controls
- Animation previews
- Code generation

## Styling

### Global Styles
**File**: `src/index.css`
**Features**:
- Google Fonts imports (Inter, Poppins)
- Custom CSS variables for brand colors
- Custom animations (arrowFlow, float, pulse-glow, wave, breathing)
- Typography classes

### Tailwind Configuration
**File**: `tailwind.config.ts`
**Features**:
- Custom color palette
- Custom animations
- Font family extensions
- Custom utilities

## Assets

### Images
- `hero-background.jpg` - Hero section background
- `hero-wellness-pro.jpg` - Hero section main image
- `lyfevine-logo.png` - Company logo
- `lyfevine-text.png` - Company text logo

### Video
- `placeholder-wellness-video.mp4` - Hero section video background

## Custom Animations

### arrowFlow
**Purpose**: Arrow movement animation
**Duration**: 1.2s
**Effect**: Horizontal movement with scale and opacity changes

### float
**Purpose**: Floating animation
**Duration**: 3s
**Effect**: Vertical floating movement

### pulse-glow
**Purpose**: Glow effect animation
**Duration**: 2s
**Effect**: Scale and opacity pulsing

### wave
**Purpose**: Wave animation
**Duration**: 8s
**Effect**: Horizontal wave movement

### breathing
**Purpose**: Breathing animation
**Duration**: 4s
**Effect**: Scale pulsing for breathing effect
