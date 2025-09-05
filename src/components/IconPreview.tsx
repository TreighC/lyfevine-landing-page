import React, { useState } from 'react';
import { 
  ArrowRight, 
  ArrowRightCircle, 
  ChevronRight, 
  ArrowUpRight,
  MoveRight,
  Play,
  Users,
  Sparkles,
  Check,
  Heart,
  Zap,
  Shield,
  Star,
  Award,
  Target,
  TrendingUp
} from 'lucide-react';

const IconPreview = () => {
  const [selectedIcon, setSelectedIcon] = useState('ArrowRight');
  const [iconSize, setIconSize] = useState(32);
  const [iconColor, setIconColor] = useState('#ffffff');

  const icons = {
    ArrowRight,
    ArrowRightCircle,
    ChevronRight,
    ArrowUpRight,
    MoveRight,
    Play,
    Users,
    Sparkles,
    Check,
    Heart,
    Zap,
    Shield,
    Star,
    Award,
    Target,
    TrendingUp
  };

  const SelectedIcon = icons[selectedIcon as keyof typeof icons];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Lucide React Icon Preview</h1>
        
        {/* Controls */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Icon:
              </label>
              <select 
                value={selectedIcon} 
                onChange={(e) => setSelectedIcon(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                {Object.keys(icons).map(iconName => (
                  <option key={iconName} value={iconName}>
                    {iconName}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Size: {iconSize}px
              </label>
              <input 
                type="range" 
                min="16" 
                max="64" 
                value={iconSize} 
                onChange={(e) => setIconSize(Number(e.target.value))}
                className="w-full"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Color:
              </label>
              <input 
                type="color" 
                value={iconColor} 
                onChange={(e) => setIconColor(e.target.value)}
                className="w-full h-10 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Preview */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Preview:</h2>
          <div className="flex items-center gap-4 mb-4">
            <SelectedIcon 
              size={iconSize} 
              color={iconColor} 
            />
            <span className="text-gray-600">
              {selectedIcon} ({iconSize}px)
            </span>
          </div>
          
                      {/* Animation Examples */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-800">Tailwind Animations:</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-600 w-16">Bounce:</span>
                    <SelectedIcon 
                      size={iconSize} 
                      color={iconColor} 
                      className="animate-bounce"
                    />
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-600 w-16">Pulse:</span>
                    <SelectedIcon 
                      size={iconSize} 
                      color={iconColor} 
                      className="animate-pulse"
                    />
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-600 w-16">Spin:</span>
                    <SelectedIcon 
                      size={iconSize} 
                      color={iconColor} 
                      className="animate-spin"
                    />
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-600 w-16">Ping:</span>
                    <SelectedIcon 
                      size={iconSize} 
                      color={iconColor} 
                      className="animate-ping"
                    />
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-600 w-16">Wiggle:</span>
                    <SelectedIcon 
                      size={iconSize} 
                      color={iconColor} 
                      className="animate-wiggle"
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-800">Custom Animations:</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-600 w-16">Float:</span>
                    <SelectedIcon 
                      size={iconSize} 
                      color={iconColor} 
                      className="animate-float"
                    />
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-600 w-16">Glow:</span>
                    <SelectedIcon 
                      size={iconSize} 
                      color={iconColor} 
                      className="animate-pulse-glow"
                    />
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-600 w-16">Wave:</span>
                    <SelectedIcon 
                      size={iconSize} 
                      color={iconColor} 
                      className="animate-wave"
                    />
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-600 w-16">Breathing:</span>
                    <SelectedIcon 
                      size={iconSize} 
                      color={iconColor} 
                      className="animate-breathing"
                    />
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-600 w-16">Arrow Flow:</span>
                    <SelectedIcon 
                      size={iconSize} 
                      color={iconColor} 
                      className="animate-arrowFlow"
                      style={{ animationDuration: '1.2s' }}
                    />
                  </div>
                </div>
              </div>
            </div>
        </div>

        {/* Code Example */}
        <div className="bg-gray-800 text-green-400 p-6 rounded-lg">
          <h3 className="text-white font-semibold mb-2">Import Code:</h3>
          <code className="text-sm">
            import {`{ ${selectedIcon} }`} from 'lucide-react';
          </code>
          
          <h3 className="text-white font-semibold mb-2 mt-4">Usage Code:</h3>
          <code className="text-sm">
            {`<${selectedIcon} size={${iconSize}} color="${iconColor}" />`}
          </code>
        </div>

        {/* Custom Animation Guide */}
        <div className="bg-blue-50 p-6 rounded-lg mt-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">🎨 Create Your Own Animations</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-blue-700 mb-2">1. Tailwind Built-in Animations:</h4>
              <div className="bg-white p-3 rounded border text-sm">
                <code>animate-bounce, animate-pulse, animate-spin, animate-ping, animate-wiggle</code>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-blue-700 mb-2">2. Custom CSS Animations (in your CSS file):</h4>
              <div className="bg-white p-3 rounded border text-sm">
                <code>
                  {`.my-custom-animation {
  animation: myKeyframe 2s ease-in-out infinite;
}

@keyframes myKeyframe {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}`}
                </code>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-blue-700 mb-2">3. Inline Style Animations:</h4>
              <div className="bg-white p-3 rounded border text-sm">
                <code>
                  {`<${selectedIcon} 
  size={${iconSize}} 
  color="${iconColor}"
  style={{ 
    animation: 'bounce 2s infinite',
    animationDelay: '0.5s'
  }}
/>`}
                </code>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-blue-700 mb-2">4. Hover Effects:</h4>
              <div className="bg-white p-3 rounded border text-sm">
                <code>
                  {`<${selectedIcon} 
  size={${iconSize}} 
  color="${iconColor}"
  className="hover:scale-110 hover:rotate-12 transition-all duration-300"
/>`}
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IconPreview;
