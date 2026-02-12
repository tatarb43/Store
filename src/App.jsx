import { useMemo, useState } from 'react'
import Header from './components/Header/Header'
// import Hero from './components/Hero'
import { PRODUCTS } from './data/products'
import Footer from'./components/Footer/Footer'
import Main from './components/Body/Main'


export default function App(){
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState({ storage: [], colors: [], hz: [] })


  const filtered = useMemo(()=>{
    let list = PRODUCTS.slice()

    if(query) list = list.filter(p => p.title.toLowerCase().includes(query.toLowerCase()))

    if (category.storage && category.storage.length > 0) {  // Проверяю по памяти
      list = list.filter(p => 
        //  ХОТЯ БЫ ОДИН из выбранных объемов памяти
        category.storage.some(s => p.add.includes(s))
      )
    }

      if (category.colors && category.colors.length > 0) { // Проверяю по цвету
      list = list.filter(p => 
        category.colors.some(c => p.add.includes(c))
      )
    }

      if (category.hz && category.hz.length > 0) { // Проверяю по герцам
      list = list.filter(p => 
        category.hz.some(h => p.add.includes(h))
      );
    }

    return list
  },[query, category])




  return (
    <div>
      <Header onSearch={setQuery} onFilter={setCategory} />

      <Main filteredProducts={filtered}/>

      <Footer/>

    </div>
  )
}