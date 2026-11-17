import React, { useState } from 'react';
import { siteImage } from '../image-settings/siteImages.js';
import { addCart, toast } from '../shared/commerceState.js';
import './LookbookPage.css';

// Edit every look's photos, products, and hotspot positions here. Product IDs match the existing catalogue.
const looks = [
  {title:'The Quiet Morning',category:'Everyday Fashion',subtitle:'Ease, beautifully considered.',photos:['photo-1483985988355-763728e1935b','photo-1539109136881-3be0616acf4b','photo-1529139574466-a303027c1d8b'],products:[{id:14,name:'Relaxed Linen Shirt',price:360,x:43,y:37},{id:17,name:'Soft Tailored Trousers',price:430,x:52,y:73},{id:21,name:'Gold Huggie Hoops',price:210,x:62,y:19}]},
  {title:'An Unhurried Afternoon',category:'Everyday Fashion',subtitle:'The beauty of effortless layers.',photos:['photo-1539109136881-3be0616acf4b','photo-1483985988355-763728e1935b','photo-1509631179647-0177331693ae'],products:[{id:3,name:'Soft Form Knit',price:340,x:44,y:43},{id:9,name:'The Column Skirt',price:410,x:53,y:74},{id:22,name:'Pearl Pendant Necklace',price:345,x:54,y:27}]},
  {title:'A Modern Gesture',category:'Contemporary Chic',subtitle:'A new language of femininity.',photos:['photo-1529139574466-a303027c1d8b','photo-1534528741775-53994a69daeb','photo-1483985988355-763728e1935b'],products:[{id:16,name:'Sculpted Midi Dress',price:680,x:48,y:57},{id:11,name:'Sculptural Cuff',price:310,x:68,y:60},{id:23,name:'Sculptural Gold Ring',price:295,x:39,y:68}]},
  {title:'The Art of Contrast',category:'Contemporary Chic',subtitle:'Strong lines, soft details.',photos:['photo-1591047139829-d91aecb6caea','photo-1524504388940-b1c1722653e1','photo-1539109136881-3be0616acf4b'],products:[{id:4,name:'The Tailored Blazer',price:740,x:48,y:41},{id:10,name:'Drape Silk Blouse',price:380,x:57,y:55},{id:25,name:'Layered Chain Necklace',price:410,x:53,y:27}]},
  {title:'After the Light Fades',category:'Elevated Evening',subtitle:'Elegance after hours.',photos:['photo-1539008835657-9e8e9680c956','photo-1524504388940-b1c1722653e1','photo-1566174053879-31528523f8ae'],products:[{id:1,name:'The Noir Dress',price:620,x:49,y:55},{id:5,name:'Pearl Drop Earrings',price:280,x:61,y:22},{id:7,name:'Diamond Line Ring',price:520,x:41,y:71}]},
  {title:'The Midnight Edit',category:'Elevated Evening',subtitle:'A study in luminous details.',photos:['photo-1566174053879-31528523f8ae','photo-1539008835657-9e8e9680c956','photo-1534528741775-53994a69daeb'],products:[{id:13,name:'Satin Evening Gown',price:980,x:49,y:59},{id:24,name:'Crystal Drop Earrings',price:320,x:59,y:21},{id:26,name:'Modern Cuff Bracelet',price:275,x:68,y:66}]},
  {title:'Unapologetically Her',category:'Statement Fashion',subtitle:'Presence is the statement.',photos:['photo-1539109136881-3be0616acf4b','photo-1529139574466-a303027c1d8b','photo-1524504388940-b1c1722653e1'],products:[{id:15,name:'The Modern Trench',price:1120,x:48,y:43},{id:6,name:'Gold Necklace',price:390,x:52,y:28},{id:23,name:'Sculptural Gold Ring',price:295,x:68,y:72}]},
  {title:'Beyond the Ordinary',category:'Statement Fashion',subtitle:'For the moments that are yours.',photos:['photo-1509631179647-0177331693ae','photo-1483985988355-763728e1935b','photo-1539008835657-9e8e9680c956'],products:[{id:19,name:'Evening Column Dress',price:860,x:49,y:54},{id:27,name:'Pearl Strand Bracelet',price:390,x:68,y:65},{id:24,name:'Crystal Drop Earrings',price:320,x:60,y:21}]}
];
const img = (photo, width=1400) => `https://images.unsplash.com/${photo}?auto=format&fit=crop&w=${width}&q=85`;
const currency = n => '₹' + n.toLocaleString('en-IN');
export default function LookbookPage(){
  const [selected,setSelected]=useState(null);
  const [activeHotspot,setActiveHotspot]=useState(null);
  const [photoIndex,setPhotoIndex]=useState(0);
  const open=i=>{setSelected(i);setActiveHotspot(null);setPhotoIndex(0);window.scrollTo({top:0,behavior:'smooth'});};
  const back=()=>{setSelected(null);setActiveHotspot(null);window.scrollTo({top:0,behavior:'smooth'});};
  const buy=id=>{addCart(id);window.location.href='checkout.html';};
  const addAll=look=>{look.products.forEach(p=>addCart(p.id));toast('Complete look added to your bag');};
  return <div className="lb26">
    {selected===null ? <>
      <section className="lb26-hero"><img src={siteImage('Lookbook_Hero',img('photo-1539109136881-3be0616acf4b',1800))} alt="LA CINDERAE editorial fashion campaign"/><div className="lb26-hero-content"><span>LA CINDERAE — THE VISUAL JOURNAL / 2026</span><h1>The art of<br/><em>being seen.</em></h1><p>Eight expressions of modern femininity. An editorial journey through clothing, jewellery and personal style.</p><a href="#looks">EXPLORE THE EDITORIAL ↓</a></div></section>
      <div className="lb26-intro" id="looks"><span>THE LOOKBOOK / ISSUE 01</span><h2>Style is a story.<br/><em>Make it yours.</em></h2><p>Discover eight individually curated looks. Enter each story to explore the details and shop every piece.</p></div>
      <div className="lb26-looks">{looks.map((look,i)=><article className={'lb26-look lb26-look-'+i} key={i}><button className="lb26-cover" onClick={()=>open(i)} aria-label={'Explore '+look.title}><img loading="lazy" src={siteImage('Lookbook_'+String(i+1).padStart(2,'0'),img(look.photos[0]))} alt={look.title}/><span className="lb26-cover-cta">EXPLORE LOOK ↗</span></button><div className="lb26-look-copy"><span>LOOK {String(i+1).padStart(2,'0')} / {look.category.toUpperCase()}</span><h3>{look.title}</h3><p>{look.subtitle}</p><button onClick={()=>open(i)}>DISCOVER THE LOOK ↗</button></div></article>)}</div>
    </> : <>
      <div className="lb26-detail-top"><button onClick={back}>← BACK TO LOOKBOOK</button><span>LOOK {String(selected+1).padStart(2,'0')} / {looks[selected].category.toUpperCase()}</span></div>
      <header className="lb26-detail-title"><h1>{looks[selected].title}</h1><p>{looks[selected].subtitle} Explore the photographs and select a marker to shop the styling.</p></header>
      <div className="lb26-editorial-grid">{looks[selected].photos.map((photo,j)=><div className={'lb26-shot lb26-shot-'+j} key={j}><img src={siteImage('Lookbook_'+String(selected+1).padStart(2,'0')+'_Angle_'+(j+1),img(photo,j===0?1500:1100))} alt={`${looks[selected].title}, editorial angle ${j+1}`}/><span className="lb26-shot-label">{j===0?'THE COMPLETE LOOK':j===1?'THE SILHOUETTE':'THE DETAILS'} / 0{j+1}</span>{looks[selected].products.map((p,k)=><div className="lb26-hotspot-wrap" key={p.id} style={{left:`${Math.min(88,Math.max(12,p.x+(j===1?(k-1)*8:0)))}%`,top:`${Math.min(85,Math.max(15,p.y+(j===2?(k-1)*9:0)))}%`}}><button className="lb26-hotspot" aria-label={'Shop '+p.name} aria-expanded={activeHotspot===`${j}-${k}`} onClick={()=>{setPhotoIndex(j);setActiveHotspot(activeHotspot===`${j}-${k}`?null:`${j}-${k}`);}}>+</button>{activeHotspot===`${j}-${k}`&&<div className="lb26-product-pop" role="group" aria-label={p.name}><button className="lb26-pop-close" onClick={()=>setActiveHotspot(null)} aria-label="Close">×</button><small>THE EDITORIAL EDIT</small><strong>{p.name}</strong><span>{currency(p.price)}</span><a href={`product-details.html?id=${p.id}`}>VIEW PRODUCT ↗</a><button onClick={()=>addCart(p.id)}>ADD TO BAG +</button><button className="lb26-buy" onClick={()=>buy(p.id)}>BUY NOW ↗</button></div>}</div>)}</div>)}</div>
      <div className="lb26-complete"><div><span>THE COMPLETE EDIT / {looks[selected].products.length} PIECES</span><h2>Wear the <em>whole story.</em></h2><p>{looks[selected].products.map(p=>p.name).join(' · ')}</p><strong>{currency(looks[selected].products.reduce((sum,p)=>sum+p.price,0))}</strong></div><button onClick={()=>addAll(looks[selected])}>SHOP COMPLETE LOOK +</button></div>
      <div className="lb26-next"><button onClick={back}>← ALL EIGHT LOOKS</button><button onClick={()=>open((selected+1)%looks.length)}>NEXT LOOK ↗</button></div>
    </>}
  </div>;
}
