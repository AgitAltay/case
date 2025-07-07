import React, { useState } from 'react';

const colorOptions = [
  { key: 'yellow', label: 'Yellow Gold', hex: '#E6CA97' },
  { key: 'white', label: 'White Gold', hex: '#D9D9D9' },
  { key: 'rose', label: 'Rose Gold', hex: '#E1A4A9' },
];

export default function ProductCard({ product }) {
  const [selectedColor, setSelectedColor] = useState('yellow');

  const selectedImage = product.images[selectedColor];
  const selectedColorLabel = colorOptions.find(c => c.key === selectedColor)?.label;

  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: 8,
      padding: 15,
      width: 280,
      fontFamily: "'Avenir', Arial, sans-serif",
      boxSizing: 'border-box',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      {/* Başlık */}
      <h3 style={{
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: 500,
        fontSize: 15,
        margin: '0 0 10px 0',
        color: '#333'
      }}>
        {product.name}
      </h3>

      {/* Resim */}
      <img src={selectedImage} alt={product.name} style={{ width: '100%', borderRadius: 6, marginBottom: 10 }} />

      {/* Fiyat */}
      <p style={{
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: 400,
        fontSize: 15,
        margin: '0 0 10px 0',
        color: '#555'
      }}>
        Price: ${product.price}
      </p>

      {/* Renk Seçici */}
      <div style={{ marginBottom: 10, display: 'flex', gap: 8 }}>
        {colorOptions.map(color => (
          <button
            key={color.key}
            onClick={() => setSelectedColor(color.key)}
            style={{
              backgroundColor: color.hex,
              border: selectedColor === color.key ? '3px solid black' : '1px solid #ccc',
              borderRadius: '50%',
              width: 24,
              height: 24,
              cursor: 'pointer',
              transition: 'border-color 0.3s'
            }}
            aria-label={color.label}
          />
        ))}
      </div>

      {/* Renk Yazısı */}
      <p style={{
        fontSize: 12,
        fontWeight: 400,
        margin: '0 0 8px 0',
        color: '#333',
        fontFamily: "'Avenir', Arial, sans-serif"
      }}>
        {selectedColorLabel}
      </p>

      {/* Popülerlik */}
      <p style={{
        fontSize: 14,
        fontWeight: 400,
        margin: 0,
        fontFamily: "'Avenir', Arial, sans-serif",
        color: '#444'
      }}>
        Popularity: {(product.popularityScore * 5).toFixed(1)} / 5
      </p>
    </div>
  );
}
