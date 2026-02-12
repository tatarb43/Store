
export default function Pagination({ page, setPage, totalPages }){
    const pages = Array.from({length: totalPages}, (_,i)=>i+1)

    return (
        <div style={{marginTop:18,display:'flex',justifyContent:'center',gap:8}}>
            <button className="icon-btn" onClick={()=>setPage(p=>Math.max(1,p-1))}>←</button>
            {pages.map(p => <button key={p} className="icon-btn" onClick={()=>setPage(p)} style={{fontWeight:p===page?700:400}}>{p}</button>)}
            <button className="icon-btn" onClick={()=>setPage(p=>Math.min(totalPages,p+1))}>→</button>
        </div>
    )
}