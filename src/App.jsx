import { useState, useMemo, useEffect, useRef } from 'react';
import { recipesData, categories } from './recipesData';
import { motion } from 'framer-motion';
import 'leaflet/dist/leaflet.css';
import { MapContainer, ImageOverlay } from 'react-leaflet';
import L from 'leaflet';

const FullTreeViewer = () => {
  const bounds = [[0, 0], [7051, 10914]];
  
  return (
    <div className="glass-panel" style={{ height: 'calc(100vh - 140px)', width: '100%', padding: 0, overflow: 'hidden' }}>
      <MapContainer 
        crs={L.CRS.Simple} 
        bounds={bounds} 
        style={{ height: '100%', width: '100%', background: '#000000' }}
        zoom={-2}
        minZoom={-4}
        maxZoom={1}
        preferCanvas={true}
      >
        <ImageOverlay
          url="/treev2.png"
          bounds={bounds}
        />
      </MapContainer>
    </div>
  );
};
import clickSoundPath from './assets/sounds/Release.ogg.mp3';
import clickStereoSoundPath from './assets/sounds/Click_stereo.ogg.mp3';
import drawerOpenSoundPath from './assets/sounds/Drawer_open.wav.ogg';

const itemEthnicityMap = {
  bone_meal: "All Luzon Ethnicities",
  leather: "All Luzon Ethnicities",
  xp: "All Visayas Ethnicities",
  gunpowder: "All Mindanao Ethnicities",
  crying_obsidian: "All Mindanao Ethnicities",
  nether_wart: "Tausug",
  blackstone: "Illonggo",
  nether_quartz_ore: "Tagalog",
  soul_sand: "Igorot",
  crimson_nylium: "Illonggo",
  magma_block: "Kapampangan",
  calcite: "Aklanon",
  ghast_tear: "Tausug",
  warped_nylium: "Aklanon",
  dried_ghast: "Waray",
  tnt: "Maguindanaon",
  chorus_flower: "Aklanon",
  end_rod: "Kapampangan",
  ender_eye: "Badjao",
  ancient_debris: "Badjao",
  skeleton_skull: "Kapampangan",
  tnt_minecart: "Maranao",
  shulker_shell: "Aklanon",
  ender_chest: "Ilocano",
  end_crystal: "Maguindanaon",
  dragon_head: "Illonggo",
  netherite_ingot: "Tagabawa",
  wither_skeleton_skull: "Igorot",
  blaze_rod: "Bicolano",
  shulker_box: "Tagalog",
  respawn_anchor: "Tausug",
  dragon_breath: "Cebuano",
  blaze_powder: "Maranao",
  brewing_stand: "Cebuano",
  mace: "Tagalog",
  milkfish: "Kapampangan",
  asin: "Kapampangan",
  bangushroom: "Kapampangan",
  adobo1: "Kapampangan",
  adobo3: "Kapampangan",
  bicol_express: "Bicolano",
  uncooked_pinangat: "Kapampangan",
  lechon_kawali_1: "Kapampangan",
  tocino_1: "Kapampangan",
  lechon_1: "Kapampangan",
  lechon_2: "Kapampangan",
};

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.015
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: -30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  }
};

const getRootAncestor = (itemId, chainIndices = {}) => {
  let currentId = itemId;
  let visited = new Set();
  while (true) {
    if (visited.has(currentId)) break;
    visited.add(currentId);
    const parents = recipesData.filter(r => r.inputs.includes(currentId));
    if (parents.length === 0) break;
    const index = chainIndices[currentId] || 0;
    currentId = parents[index % parents.length].id;
  }
  return currentId;
};

const getAllUniqueRoots = (itemId) => {
  const roots = new Set();
  const traverse = (currentId, visited) => {
    if (visited.has(currentId)) return;
    visited.add(currentId);
    const parents = recipesData.filter(r => r.inputs.includes(currentId));
    if (parents.length === 0) {
      roots.add(currentId);
    } else {
      parents.forEach(p => traverse(p.id, new Set(visited)));
    }
  };
  traverse(itemId, new Set());
  return Array.from(roots);
};

const getIngredientTree = (itemId, depth = 0, maxDepth = 10) => {
  const item = recipesData.find(r => r.id === itemId);
  if (!item || depth > maxDepth) return null;
  return {
    ...item,
    children: item.inputs.map(input => getIngredientTree(input, depth + 1, maxDepth)).filter(Boolean)
  };
};

export default function App() {
  const [selectedId, setSelectedId] = useState('sand');
  const [chainIndices, setChainIndices] = useState({});
  const [bgIndex, setBgIndex] = useState(0);
  const [showFullTree, setShowFullTree] = useState(false);
  const scrollRef = useRef(null);
  const viewerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const backgrounds = useMemo(() => [
    '/background/Nether_Portal_background.webp',
    '/background/Overworld_background.webp',
    '/background/Netherrack_background_BE2.webp',
    '/background/End_Stone_background_BE2.webp'
  ], []);

  const buttonIcons = useMemo(() => [
    '/icons/buttons/Potion_1.14.4.png',
    '/icons/buttons/Dirt_1.14.4.png',
    '/icons/buttons/Netherrack_1.14.4.png',
    '/icons/buttons/End Stone_1.14.4.png'
  ], []);

  const themes = useMemo(() => [
    'nether-portal',
    'overworld',
    'netherrack',
    'end-stone'
  ], []);

  useEffect(() => {
    document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.75)), url('${backgrounds[bgIndex]}')`;
    document.body.setAttribute('data-theme', themes[bgIndex]);
  }, [bgIndex, backgrounds, themes]);

  const playClickSound = () => {
    if (window.currentClickAudio) {
      window.currentClickAudio.pause();
    }
    const sounds = [clickSoundPath, clickStereoSoundPath];
    const chosenSound = sounds[Math.floor(Math.random() * sounds.length)];
    window.currentClickAudio = new Audio(chosenSound);
    window.currentClickAudio.currentTime = 0;
    window.currentClickAudio.play().catch(err => console.log("Audio play failed:", err));
  };

  const playFilterSound = () => {
    const audio = new Audio(drawerOpenSoundPath);
    audio.currentTime = 0;
    audio.play().catch(err => console.log("Audio play failed:", err));
  };

  const handleSelectItem = (id) => {
    setSelectedId(id);
    playClickSound();
    if (window.innerWidth <= 768 && viewerRef.current) {
      setTimeout(() => {
        viewerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    } else {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 50);
    }
  };
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredId, setHoveredId] = useState(null);
  const hoverTimeoutRef = useRef(null);

  const handleItemMouseEnter = (id) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredId(id);
    }, 75);
  };

  const handleItemMouseLeave = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredId(null);
    }, 75);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeaveCanvas = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMoveCanvas = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX);
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const filteredItems = useMemo(() => {
    return recipesData.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            item.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  const selectedItem = useMemo(() => {
    return recipesData.find(item => item.id === selectedId) || recipesData[0];
  }, [selectedId]);



  const treeData = useMemo(() => {
    const rootId = getRootAncestor(selectedId, chainIndices);
    return getIngredientTree(rootId);
  }, [selectedId, chainIndices]);

  const activeChainIds = useMemo(() => {
    const ids = new Set();
    
    const addDescendants = (itemId) => {
      if (ids.has(itemId)) return;
      const item = recipesData.find(r => r.id === itemId);
      if (!item) return;
      ids.add(itemId);
      item.inputs.forEach(addDescendants);
    };

    const addAncestors = (itemId) => {
      if (ids.has(itemId)) return;
      ids.add(itemId);
      const parents = recipesData.filter(r => r.inputs.includes(itemId));
      if (parents.length > 0) {
        const index = chainIndices[itemId] || 0;
        addAncestors(parents[index % parents.length].id);
      }
    };

    const targetId = hoveredId || selectedId;
    if (targetId) {
      addDescendants(targetId);
      addAncestors(targetId);
    }
    return ids;
  }, [selectedId, hoveredId, chainIndices]);

  const renderTreeNode = (node) => {
    if (!node) return null;

    const isSelected = selectedId === node.id;
    const isInChain = activeChainIds.has(node.id);
    let cardClass = "tree-node-card";
    if (isSelected) cardClass += " selected";
    else if (isInChain) cardClass += " highlighted";

    const parents = recipesData.filter(r => r.inputs.includes(node.id));
    const uniqueRoots = getAllUniqueRoots(node.id);
    const hasMultipleChains = parents.length > 1 && uniqueRoots.length > 1;

    return (
      <div className={`tree-branch ${isInChain ? 'active-chain' : ''}`} key={node.id}>
        <div 
          onClick={() => handleSelectItem(node.id)}
          onMouseEnter={() => handleItemMouseEnter(node.id)}
          onMouseLeave={handleItemMouseLeave}
          className={cardClass}
        >
          {hasMultipleChains && (
            <button 
              className="cycle-chain-btn"
              onClick={(e) => {
                e.stopPropagation();
                handleSelectItem(node.id);
                setChainIndices(prev => ({
                  ...prev,
                  [node.id]: ((prev[node.id] || 0) + 1) % parents.length
                }));
              }}
              title="Change Chain"
            >
              ↻
            </button>
          )}
          <img 
            src={node.outputImage} 
            alt={node.name} 
            className="node-icon" 
            onError={(e) => { e.target.onerror = null; e.target.src = node.recipeImage; }}
          />
          <span className="node-label">{node.name}</span>
        </div>

        {node.children.length > 0 && (
          <div className="tree-children-container">
            <div className="tree-children-row">
              {node.children.map(child => renderTreeNode(child))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="app-container">
      
      <header className="app-header">
        <div>
          <h1 className="title-text">
            <img src="/icons/kupaladmin.webp" alt="Kupal Admin Icon" className="header-title-icon" />
            KUPAL RECIPE TREE
          </h1>
          <p className="subtitle-text">Interactive Minecraft recipe explorer for Kupal Civ SMP</p>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button 
            className="minecraft-btn" 
            onClick={() => {
              setShowFullTree(prev => !prev);
              playClickSound();
            }}
            title="Toggle Full Tree View"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6px' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="16" y="16" width="6" height="6" rx="1" />
              <rect x="2" y="16" width="6" height="6" rx="1" />
              <rect x="9" y="2" width="6" height="6" rx="1" />
              <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
              <path d="M12 12V8" />
            </svg>
          </button>
          <button 
            className="minecraft-btn" 
            onClick={() => {
              setBgIndex((prev) => (prev + 1) % backgrounds.length);
              playClickSound();
            }}
            title="Change Background"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6px' }}
          >
            <img src={buttonIcons[bgIndex]} alt="Change Background" style={{ width: '24px', height: '24px', imageRendering: 'pixelated' }} />
          </button>
        </div>
      </header>

      
      {showFullTree ? (
        <FullTreeViewer />
      ) : (
      <main className="main-layout">
        
        
        <section className="sidebar-section glass-panel">
          
          
          <div className="search-container">
            <svg 
              className="search-icon" 
              xmlns="http://www.w3.org/2000/svg"
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder=" Search Item"
              className="search-input"
            />
            {searchTerm && (
              <button 
                className="clear-search-btn"
                onClick={() => setSearchTerm('')}
                aria-label="Clear search"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          
          <div className="category-pills">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  playFilterSound();
                }}
                className={`category-pill ${activeCategory === cat.id ? 'active' : ''}`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          
          <motion.div 
            key={activeCategory + (searchTerm ? searchTerm.trim() : "")}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="items-grid"
          >
            {filteredItems.map(item => {
              const isActive = item.id === selectedId;
              const isHighlighted = activeChainIds.has(item.id);
              let itemClass = "item-grid-card";
              if (isActive) itemClass += " active";
              else if (isHighlighted) itemClass += " highlighted";

              return (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  onClick={() => handleSelectItem(item.id)}
                  onMouseEnter={() => handleItemMouseEnter(item.id)}
                  onMouseLeave={handleItemMouseLeave}
                  title={item.name}
                  className={itemClass}
                  layout
                >
                  <img 
                    src={item.outputImage} 
                    alt={item.name} 
                    className="item-grid-icon"
                    onError={(e) => { e.target.onerror = null; e.target.src = item.recipeImage; }}
                  />
                  <span className="item-grid-label">{item.name}</span>
                </motion.div>
              );
            })}
            {filteredItems.length === 0 && (
              <div className="no-results">No items found</div>
            )}
          </motion.div>
        </section>

        
        <section className="canvas-section" ref={viewerRef}>
          
          
          <div className="details-panel glass-panel">
            <div className="details-text-content">
              <h3 className="details-title">
                <img 
                  src={selectedItem.outputImage} 
                  alt={selectedItem.name} 
                  className="details-title-icon"
                  onError={(e) => { e.target.onerror = null; e.target.src = selectedItem.recipeImage; }}
                />
                {selectedItem.name}
              </h3>
              
              <p className="details-desc">{selectedItem.description}</p>
              
              {selectedItem.inputs.length > 0 && (
                <div className="ingredients-container">
                  <h4 className="ingredients-title">Direct Ingredients</h4>
                  <div className="ingredients-list">
                    {selectedItem.inputs.map(inputId => {
                      const ingredient = recipesData.find(r => r.id === inputId);
                      if (!ingredient) return null;
                      return (
                        <div
                          key={inputId}
                          onClick={() => setSelectedId(inputId)}
                          className="ingredient-badge"
                        >
                          <img src={ingredient.outputImage} alt={ingredient.name} className="badge-icon" />
                          <span>{ingredient.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="base-ingredient-notice" style={{ marginTop: '16px' }}>
                <h4 className="ingredients-title">Can Craft</h4>
                <div className="can-craft-list">
                  <span 
                    className="can-craft-item"
                    style={{ color: (!itemEthnicityMap[selectedItem.id] || itemEthnicityMap[selectedItem.id] === "All Ethnicities") ? '#55FF55' : undefined }}
                  >
                    {itemEthnicityMap[selectedItem.id] || "All Ethnicities"}
                  </span>
                </div>
              </div>
            </div>

            {selectedItem.recipeImage && (
              (selectedItem.recipeImage.endsWith('.png') || 
               selectedItem.recipeImage.endsWith('.jpg') || 
               selectedItem.recipeImage.endsWith('.jpeg') || 
               selectedItem.recipeImage.endsWith('.webp') || 
               selectedItem.recipeImage.endsWith('.svg')) ? (
                <img 
                  key={selectedItem.id}
                  src={selectedItem.recipeImage} 
                  alt={`${selectedItem.name} recipe`} 
                  className="gui-image"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              ) : (
                <div className="recipe-text-placeholder">
                  {selectedItem.recipeImage}
                </div>
              )
            )}
          </div>

          
          <div className="tree-panel glass-panel">
            <div className="tree-header-info">
              <h3>Crafting chain</h3>
              <p>Visualize prerequisites of current item</p>
            </div>
            
            <div 
              className="tree-canvas-viewport"
              ref={scrollRef}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeaveCanvas}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMoveCanvas}
              style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
            >
              {treeData ? (
                <div className="tree-canvas-wrapper">
                  {renderTreeNode(treeData)}
                </div>
              ) : (
                <div className="empty-tree-state">Select an item to show tree</div>
              )}
            </div>
          </div>

        </section>

      </main>
      )}

      
      <footer className="app-footer">
        <p>Built for <span>Kupal Civ SMP</span> • Not an official Minecraft product</p>
        <div className="footer-links">
          <a href="https://discord.gg/kupalcord" target="_blank" rel="noreferrer">Discord</a>
          <span> • </span>
          <a href="https://github.com/frostjade71" target="_blank" rel="noreferrer">Github</a>
        </div>
      </footer>
    </div>
  );
}
