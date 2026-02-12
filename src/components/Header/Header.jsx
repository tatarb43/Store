import { useCart } from '../../context/CartContext'
import { useState, useEffect } from "react";
import s from './Header.module.css'


export default function Header({ onSearch, onFilter }){
    const [state] = useCart()
    // const count = state.items.reduce((s,i)=>s+i.qty, 0)

    const [filters, setFilters] = useState({
        storage: [],
        colors: [],
        hz: []
    });

    useEffect(() => {
        onFilter(filters); 
    }, [filters]);


    const handleCheckbox = (e, type) => {
        const value = e.target.value;
        const isChecked = e.target.checked;

        setFilters(prev => {
            const currentList = prev[type];
            let newList;

            if (isChecked) {
                newList = [...currentList, value];
            } else {
                newList = currentList.filter(item => item !== value);
            }

            return { ...prev, [type]: newList };
        });
  };

    return (
        <header>
            <div className="container">
                <div className="topbar">
                    <div className="logo">Butterfly</div>
                    <div className="search" role="search">
                        <input placeholder="Поиск" aria-label="search" onChange={(e)=>onSearch(e.target.value)}/>
                        <button className="icon-btn">🔍</button>
                        {/* <button className="icon-btn">Категория ▾</button> */}
                    </div>
                    <div className="icons">
                        {/* <button className="icon-btn">❤️</button> */}
                        {/* <button className="icon-btn">🛒<span className="icon-badge">{count}</span></button> */}
                        {/* <button className="icon-btn">Войти</button> */}
                    </div>
                </div>

                
                <nav aria-label="categories" className={s.nav}>
                    <div>
                        <label className={s.cat}><input type="checkbox" name="cat" value="128гб" onChange={(e) => handleCheckbox(e, 'storage')}/>128гб</label>
                        <label className={s.cat}><input type="checkbox" name="cat" value="256гб" onChange={(e) => handleCheckbox(e, 'storage')}/>256гб</label>
                        <label className={s.cat}><input type="checkbox" name="cat" value="512гб" onChange={(e) => handleCheckbox(e, 'storage')}/>512гб</label>
                    </div>

                    <div>
                        <label className={s.cat}><input type="checkbox" name="cat" value="черный" onChange={(e) => handleCheckbox(e, 'colors')}/>черный</label>
                        <label className={s.cat}><input type="checkbox" name="cat" value="белый" onChange={(e) => handleCheckbox(e, 'colors')}/>белый</label>
                        <label className={s.cat}><input type="checkbox" name="cat" value="оранжевый" onChange={(e)=>handleCheckbox(e, 'colors')}/>оранжевый</label>
                        <label className={s.cat}><input type="checkbox" name="cat" value="голубой" onChange={(e)=>handleCheckbox(e, 'colors')}/>голубой</label>
                        <label className={s.cat}><input type="checkbox" name="cat" value="серый" onChange={(e)=>handleCheckbox(e, 'colors')}/>серый</label>
                    </div>

                    <div>
                        <label className={s.cat}><input type="checkbox" name="cat" value="120гц" onChange={(e)=>handleCheckbox(e, 'hz')}/>120гц</label>
                        <label className={s.cat}><input type="checkbox" name="cat" value="60гц" onChange={(e)=>handleCheckbox(e, 'hz')}/>60гц</label>
                    </div>
                </nav>
            </div>
        </header>
    )
}