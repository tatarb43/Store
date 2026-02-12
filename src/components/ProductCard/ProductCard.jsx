import { useState } from 'react';
import Modal from '../Modal/Modal'
import h from './ProductCard.module.css'
import ClampText from '../ClampText/ClampText';


export default function ProductCard({ product }){

    // function add(){
    //     dispatch({ type: 'ADD', item: { id: product.id, title: product.title, price: product.price } })
    // }

    const [modal, setModal] = useState(false)

    return (
        <article className="card">
            <div className="img-wrap"><img src={product.img} alt={product.title} /></div>
            <ClampText text={product.title} lines={2} moreLabel="Ещё..."/>
    
            <div className={h.parameter}>
                <p>Бренд: {product.brend}</p>
                <p> Размер экрана: {product.screen} </p>
            </div>
    
            <div className="meta">{product.rating} · {product.reviews} отзывов</div>
            <div className={h.des}>
                <div className={h.add}>{product.add.join('    |   ')}</div>
            </div>
                
            <div className="price-row" id='modal'>
                <div>
                    <div className="price">{product.price.toLocaleString('ru-RU')}₸</div>
                </div>
                <button className="btn" onClick={() => setModal(true)}>Выбрать</button>


                <Modal open={modal} onClose={() => setModal(false)}>
                    <article className="card">
                        <div className="img-wrap"><img src={product.img} alt={product.title} /></div>
                        <div className={h.mTitle}>{product.title}</div>
                
                        <div className={h.parameter}>
                            <p>Бренд: {product.brend}</p>
                            <p> Размер экрана: {product.screen} </p>
                        </div>
                
                        <div className="meta">{product.rating} · {product.reviews} отзывов</div>
                        <div className={h.des}>
                            <div className={h.add}>{product.add.join('    |   ')}</div>
                        </div>
                            
                        <div className="price-row" id='modal'>
                            <div className={h.mPrice}>
                                <div className="price">Цена: {product.price.toLocaleString('ru-RU')}₸</div>
                            </div>
                        </div>
                        <p className={h.mP}>{product.phone}</p>
                    </article>
                    <button className="btn" onClick={() => setModal(false)}>Закрыть</button>
                </Modal>
            </div>
        </article>
    )
}