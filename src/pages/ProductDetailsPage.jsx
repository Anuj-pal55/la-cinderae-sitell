import { productImage } from '../image-settings/productImages.js';
import React, { useState } from 'react';
import { products, addCart, toggleWish } from '../legacy/commerce.js';

const image = (id, width = 1600) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;
const otherImages = {
  Clothing: ['photo-1529139574466-a303027c1d8b', 'photo-1534528741775-53994a69daeb', 'photo-1591047139829-d91aecb6caea'],
  Jewellery: ['photo-1611652022419-a9419f74343d', 'photo-1535632066927-ab7c9ab60908', 'photo-1605100804763-247f67b3557e'],
  Accessories: ['photo-1548036328-c9fa89d128fa', 'photo-1584917865442-de89df76afd3', 'photo-1553062407-98eeb64c6a62']
};
export default function ProductDetailsPage() {
  const id = Number(new URLSearchParams(window.location.search).get('id'));
  const product = products.find(p => p.id === id) || products[0];
  const gallery = [product.img, ...otherImages[product.cat].filter(src => src !== product.img)].slice(0, 4);
  while (gallery.length < 4) gallery.push(otherImages[product.cat][gallery.length % 3]);
  const [selected, setSelected] = useState(0);
  const [size, setSize] = useState('S');
  return <div className="page-content"><section className="container lc-detail">
    <div className="lc-gallery"><div className="lc-thumbs">{gallery.map((src, i) =>
      <button key={i} type="button" className={selected === i ? 'selected' : ''} onClick={() => setSelected(i)} aria-label={`View image ${i+1}`} aria-pressed={selected === i}><img src={productImage(product.id, i, image(src,300))} alt={`${product.name} image ${i+1}`} /></button>
    )}</div><div className="lc-primary"><img id="lc-main-image" src={productImage(product.id, selected, image(gallery[selected]))} alt={`${product.name} image ${selected+1}`} title="Hover to zoom" /><button type="button" className="lc-main-wish" aria-label="Add to wishlist" onClick={e => toggleWish(product.id,e.currentTarget)}>♡</button></div></div>
    <div className="lc-detail-copy"><div className="eyebrow">{product.cat} / {product.tag}</div><h1>{product.name}</h1><p className="price">₹{product.price.toLocaleString('en-IN')}</p><p>Refined forms and considered details, designed to accompany your everyday.</p>
    {product.cat === 'Clothing' && <><div className="eyebrow">Select size</div><div className="size-options">{['S','M','L','XL'].map(s => <button key={s} type="button" className={size===s?'active':''} onClick={() => setSize(s)}>{s}</button>)}</div><a href="size-guide.html">View size guide →</a></>}
    <button type="button" className="btn" onClick={() => addCart(product.id)}>Add to Bag</button><button type="button" className="btn outline" onClick={() => { addCart(product.id); window.location.href='checkout.html'; }}>Buy Now</button><p>Complimentary shipping on qualifying orders.</p></div>
  </section></div>;
}
