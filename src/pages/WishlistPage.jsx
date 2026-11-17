import React from 'react';
import { handleLegacyClick, handleLegacySubmit } from '../shared/actions.js';

export default function WishlistPage() {
  return (
    <div className="page-content" onClick={handleLegacyClick} onSubmit={handleLegacySubmit}>
<section className={"page-hero"}><div className={"eyebrow"}>Saved with intention</div><h1 className={"page-title"}>My Wishlist</h1></section><section className={"section container"}><div className={"empty"}><h2>Keep the pieces you love close.</h2><p>Your wishlist is waiting for its first addition.</p><a className={"btn"} href={"shop-all.html"}>Explore pieces</a></div></section>
    </div>
  );
}
