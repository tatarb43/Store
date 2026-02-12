import Sidebar from '../Sidebar'
import ProductGrid from '../ProductGrid'
import Pagination from '../Pagination'
import { useMemo, useState } from 'react'

export default function Main({ filteredProducts }){
    const [filters, setFilters] = useState({})

    const [page, setPage] = useState(1)
    const perPage = 6
  
    const filtered = useMemo(()=>{
        let list = filteredProducts.slice()

        if(filters.price){
            const max = Number(filters.price)
            list = list.filter(p => p.price <= max)
        }

        if (filters.brend && filters.brend.length > 0) {
            list = list.filter(p => filters.brend.includes(p.brend));
        }

        if(filters.rating){
            const minRating = Number(filters.rating)
            list = list.filter(p => p.rating >= minRating)
        }

        return list
    },[filters, filteredProducts])


    const totalPages = Math.max(1, Math.ceil(filtered.length / perPage))
    const pageItems = filtered.slice((page-1)*perPage, page*perPage)


    return (
        <main className="container">
        {/* <Hero /> */}
        <section className="layout">
          <Sidebar onFilter={(f)=>setFilters(prev=>({ ...prev, ...f }))} />
          <section>
            
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:12}}>
              <div className="small">Показано {(page-1)*perPage + 1}–{Math.min(page*perPage, filtered.length)} из {filtered.length} товаров</div>
              {/* <div className="small">Сортировать: <select><option>Популярность</option><option>Цена: по убыванию</option><option>Цена: по возрастанию</option></select></div> */}
            </div>


            <ProductGrid items={pageItems} />

            <Pagination page={page} setPage={setPage} totalPages={totalPages} />
          </section>
        </section>
      </main>
    )
}