import { useState } from 'react'

const Pagination = ({ cardsPerPage, totalCards, paginate }) => {


  //=============LOGIC COMPONENT================
  const numberPages = []
  const [blockPages, setblockPages] = useState(0)

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    numberPages.push(i)
  }

  //=============FUNCTIONS================
  const NextBlockhandleclick = () => {
    setblockPages(blockPages + 10)
  }
  const Previoushandleclick = () => {
    setblockPages(blockPages - 10)
  }
 
  
  return (
    <nav className='nav-pages'>

      <button className={blockPages + 10 > 16 && numberPages[numberPages.length - 1] <= numberPages.length ? `button-prev-page` : `button-none`} onClick={Previoushandleclick}>{`<<`}  </button>
      
      <ul className='pages'>
        {
          numberPages.slice(blockPages, blockPages + 10).map(page =>
            (<li key={page} onClick={() => paginate(page)}>{page}</li>))
        }
      </ul>
      <button className={blockPages + 10 < numberPages[numberPages.length - 1] ? `button-next-page` : `button-none`} onClick={NextBlockhandleclick}>
        {`>>`}</button>

      <div className='total-pages'>
        Total pages: {numberPages.length}
      </div>

    </nav>

  )
}

export default Pagination