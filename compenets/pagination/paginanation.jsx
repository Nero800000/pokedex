import React from "react";
 const voltar = "Voltar"
 const proximo = "Proximo"
const Pagination = (props) => {
    const {page, totalPages,BackPage,NextPage} = props
      return (
          <div className="pagination-container">
              <button onClick={BackPage}>{voltar}</button>
              <div>{page} de {totalPages}</div>
              <button  onClick={NextPage}><div>{proximo}</div></button>
          </div>
      )
}

export default Pagination