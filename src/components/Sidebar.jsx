import { useState, useEffect } from "react";

export default function Sidebar({ onFilter }){

    const [inputValue, setInputValue] = useState(0)
    const [brends, setBrends] = useState([]);


    useEffect(() => {
        onFilter({ brend: brends });
    }, [brends]);


    const handleChange = (event) => {
        setInputValue(event.target.value);
    };


    const checkbox = (e) => {
        if (e.target.checked) {
            setBrends(prev => [...prev, e.target.value]);
        } else {
            setBrends(prev => prev.filter(h => h !== e.target.value));
        }
    };

    const checkradio = (e) => {
        onFilter({ rating: e.target.value });
    };


    return (
        <aside className="sidebar">
            <div className="filter-group">
                <div className="filter-title">Фильтр по цене</div>
                <div className="small">До</div>
                <input type="range" min="0" max="1000000" step='50000' value={inputValue} style={{width:'100%'}}  onChange={(e) => {
                    setInputValue(e.target.value);
                    onFilter({ price: e.target.value });
                    }} />
                <p>{inputValue} ₸</p>
            </div>

            <div className="filter-group">
                <div className="filter-title">Бренд</div>
                <label className="checkbox"><input type="checkbox" name="brend" value="Samsung" onChange={checkbox}/>Samsung</label>
                <label className="checkbox"><input type="checkbox" name="brend" value="Iphone" onChange={checkbox}/> Iphone</label>
                <label className="checkbox"><input type="checkbox" name="brend" value="Xiaomi" onChange={checkbox}/> Xiaomi</label>
                <label className="checkbox"><input type="checkbox" name="brend" value="OnePlus" onChange={checkbox }/> OnePlus </label>
            </div>

            <div className="filter-group">
                <div className="filter-title">Рейтинг</div>
                <label className="checkbox"><input type="radio" name="rate" value={5} onChange={checkradio}/> 5★</label>
                <label className="checkbox"><input type="radio" name="rate" value={4} onChange={checkradio}/> 4★ и выше</label>
                <label className="checkbox"><input type="radio" name="rate" value={3} onChange={checkradio}/> 3★ и выше</label>
                <label className="checkbox"><input type="radio" name="rate" value={0} onChange={checkradio}/> Все </label>
            </div>
        </aside>
    )
}