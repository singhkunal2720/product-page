'use client';

import { ChevronDown, ChevronUp, X } from 'lucide-react';
import { useState } from 'react';

const initialFilterState = {
  customizable: false,
  ideal: [],
  occasion: [],
  work: [],
  fabric: [],
  segment: [],
  suitable: [],
};

const FilterDrawer = ({ filters, setFilters, onClose }) => {
  const [expandedSections, setExpandedSections] = useState({
    ideal: false,
    occasion: false,
    work: false,
    fabric: false,
    segment: false,
    suitable: false,
  });

  const toggleSection = (sectionKey) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };

  const handleCheckboxChange = (section, value) => {
    setFilters((prev) => {
      const current = prev[section];
      const updated = current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value];
      return { ...prev, [section]: updated };
    });
  };

  const handleCustomizableChange = () => {
    setFilters((prev) => ({
      ...prev,
      customizable: !prev.customizable,
    }));
  };

  const handleUnselectSection = (section) => {
    setFilters((prev) => ({
      ...prev,
      [section]: [],
    }));
  };

  const sectionOptions = {
    ideal: ['Men', 'Women', 'Baby & Kids'],
    occasion: ['Casual', 'Party', 'Wedding'],
    work: ['Formal', 'Semi-formal', 'Ethnic'],
    fabric: ['Cotton', 'Silk', 'Linen'],
    segment: ['Premium', 'Mid-Range', 'Budget'],
    suitable: ['Summer', 'Winter', 'All Seasons'],
  };

  return (
    <div className="filter-drawer">
      <div className="filter-drawer-header">
        <h3>Filters</h3>
        <X onClick={onClose} style={{ cursor: 'pointer' }} />
      </div>

      <div className="drawer-section">
        <div className="section-body customizable">
          <label>
            <input
              type="checkbox"
              checked={filters.customizable}
              onChange={handleCustomizableChange}
            />
            Customizable
          </label>
        </div>
      </div>

      {Object.entries(sectionOptions).map(([key, options]) => (
        <div className="drawer-section" key={key}>
          <div className="section-header" onClick={() => toggleSection(key)}>
            <h4>{key.toUpperCase()}</h4>
            {expandedSections[key] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </div>
          {expandedSections[key] && (
            <div className="section-body">
              <button
                className="unselect-btn"
                onClick={() => handleUnselectSection(key)}
              >
                Unselect All
              </button>
              {options.map((option) => (
                <label key={option}>
                  <input
                    type="checkbox"
                    checked={filters[key].includes(option)}
                    onChange={() => handleCheckboxChange(key, option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FilterDrawer;
