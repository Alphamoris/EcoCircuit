"use client"
import { Dispatch, SetStateAction, useState } from 'react';
import { 
  AdjustmentsHorizontalIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  TvIcon,
  PrinterIcon,
  DeviceTabletIcon,
  CameraIcon,
  PlayIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  FunnelIcon
} from '@heroicons/react/24/outline';

const categories = [
  { id: 'all', name: 'All Products', icon: AdjustmentsHorizontalIcon },
  { id: 'phones', name: 'Smartphones', icon: DevicePhoneMobileIcon },
  { id: 'computers', name: 'Computers', icon: ComputerDesktopIcon },
  { id: 'tvs', name: 'TVs & Monitors', icon: TvIcon },
  { id: 'tablets', name: 'Tablets', icon: DeviceTabletIcon },
  { id: 'cameras', name: 'Cameras', icon: CameraIcon },
  { id: 'gaming', name: 'Gaming', icon: PlayIcon },
  { id: 'accessories', name: 'Accessories', icon: Square3Stack3DIcon },
  { id: 'printers', name: 'Printers', icon: PrinterIcon },
];

const sortOptions = [
  { id: 'featured', name: 'Featured' },
  { id: 'points-low', name: 'Points: Low to High' },
  { id: 'points-high', name: 'Points: High to Low' },
  { id: 'newest', name: 'Newest First' },
];

const conditions = [
  { id: 'all', name: 'All Conditions' },
  { id: 'new', name: 'New' },
  { id: 'refurbished', name: 'Refurbished' },
  { id: 'openbox', name: 'Open Box' },
];

interface FilterSidebarProps {
  selectedCategory: string;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
  selectedCondition: string;
  setSelectedCondition: Dispatch<SetStateAction<string>>;
  priceRange: number[];
  setPriceRange: Dispatch<SetStateAction<number[]>>;
  sortBy: string;
  setSortBy: Dispatch<SetStateAction<string>>;
}

interface FilterSection {
  id: string;
  title: string;
  isOpen: boolean;
}

export default function FilterSidebar({
  selectedCategory,
  setSelectedCategory,
  selectedCondition,
  setSelectedCondition,
  priceRange,
  setPriceRange,
  sortBy,
  setSortBy,
}: FilterSidebarProps) {
  const [sections, setSections] = useState<FilterSection[]>([
    { id: 'categories', title: 'Categories', isOpen: true },
    { id: 'condition', title: 'Condition', isOpen: true },
    { id: 'points', title: 'Points Range', isOpen: true },
    { id: 'sort', title: 'Sort By', isOpen: true },
  ]);

  const toggleSection = (sectionId: string) => {
    setSections(prev => 
      prev.map(section => 
        section.id === sectionId 
          ? { ...section, isOpen: !section.isOpen }
          : section
      )
    );
  };

  return (
    <div className="w-full lg:w-72 bg-white rounded-lg shadow-md">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center gap-2 text-gray-800 font-semibold">
          <FunnelIcon className="h-5 w-5" />
          <span>Filters</span>
        </div>
      </div>

      <div className="divide-y divide-gray-200">
        {sections.map(section => (
          <div key={section.id} className="p-4">
            <button
              onClick={() => toggleSection(section.id)}
              className="flex items-center justify-between w-full text-left mb-2"
            >
              <h3 className="text-lg font-bold text-gray-800">{section.title}</h3>
              {section.isOpen ? (
                <ChevronUpIcon className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDownIcon className="h-5 w-5 text-gray-500" />
              )}
            </button>

            {section.isOpen && (
              <div className="mt-3 space-y-2">
                {section.id === 'categories' && (
                  <div className="grid grid-cols-2 gap-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`flex items-center gap-2 p-2 rounded-lg transition-all text-sm ${
                          selectedCategory === category.id
                            ? 'bg-primary-green text-white font-semibold shadow-sm'
                            : 'text-gray-700 hover:bg-primary-green/10 hover:text-primary-green'
                        }`}
                      >
                        <category.icon className="h-4 w-4" />
                        <span className="truncate">{category.name}</span>
                      </button>
                    ))}
                  </div>
                )}

                {section.id === 'condition' && (
                  <div className="flex flex-wrap gap-2">
                    {conditions.map((condition) => (
                      <button
                        key={condition.id}
                        onClick={() => setSelectedCondition(condition.id)}
                        className={`px-3 py-1 rounded-full text-sm transition-all ${
                          selectedCondition === condition.id
                            ? 'bg-primary-green text-white font-semibold'
                            : 'bg-gray-100 text-gray-700 hover:bg-primary-green/10'
                        }`}
                      >
                        {condition.name}
                      </button>
                    ))}
                  </div>
                )}

                {section.id === 'points' && (
                  <div className="px-2">
                    <input
                      aria-label="Points range"
                      type="range"
                      min="0"
                      max="10000"
                      step="100"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                      className="w-full accent-primary-green"
                    />
                    <div className="flex justify-between text-sm text-gray-700 font-medium mt-2">
                      <span>0</span>
                      <span>{priceRange[1].toLocaleString()} points</span>
                    </div>
                  </div>
                )}

                {section.id === 'sort' && (
                  <div className="space-y-1">
                    {sortOptions.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => setSortBy(option.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                          sortBy === option.id
                            ? 'bg-primary-green text-white font-semibold'
                            : 'text-gray-700 hover:bg-primary-green/10'
                        }`}
                      >
                        {option.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-gray-200">
        <button
          onClick={() => {
            setSelectedCategory('all');
            setSelectedCondition('all');
            setPriceRange([0, 10000]);
            setSortBy('featured');
          }}
          className="w-full px-4 py-2 text-sm text-primary-green border border-primary-green rounded-lg hover:bg-primary-green/10 transition-colors"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
} 