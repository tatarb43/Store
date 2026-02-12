export default function Footer(){
    return(
        <footer>
        <div className="container">
          <div style={{display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:10}}>
            <div>© Phones</div>
            <button className="btn_small"> Вопросы? </button>
          </div>
        </div>
      </footer>
    )
}