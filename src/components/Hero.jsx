import React from 'react'


export default function Hero(){
    return (
    <section className="hero">
        <div className="hero-card">
            <div className="banner">
                <h1>Суперскидки сегодня — до 70%</h1>
            </div>
            <div style={{display:'flex',gap:12,marginTop:12}}>
                <div className="promo">Быстрая доставка</div>
                <div className="promo">Гарантия возврата</div>
                <div className="promo">Бонусы и купоны</div>
            </div>
        </div>
        
        <aside className="hero-card">
            <h3 style={{marginBottom:8}}>Ваши рекомендации</h3>
            <div style={{display:'flex',flexDirection:'column',gap:8}}>
                <div style={{display:'flex',gap:8,alignItems:'center'}}><div style={{width:56,height:56,background:'#f4f4f6',borderRadius:8}}></div><div className="small">Смартфон — скидка 10%</div></div>
                <div style={{display:'flex',gap:8,alignItems:'center'}}><div style={{width:56,height:56,background:'#f4f4f6',borderRadius:8}}></div><div className="small">Кроссовки — популярно</div></div>
            </div>
        </aside>
    </section>
    )
}