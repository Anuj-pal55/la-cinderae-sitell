import React from 'react';
import { handleLegacyClick, handleLegacySubmit } from '../shared/actions.js';

export default function ShoppingBagPage() {
  return (
    <div className="page-content" onClick={handleLegacyClick} onSubmit={handleLegacySubmit}>
<div className={"empty"}><div className={"eyebrow"}>Your selection</div><h2>Your bag is taking a moment.</h2><p>There are no pieces in your bag yet.</p><a className={"btn"} href={"shop-all.html"}>Discover the collection</a></div>
    </div>
  );
}
