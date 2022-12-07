import './pagination.css'

export function Pagination({ Pages, setCurrentPage }) {
  return (
    <div className="container">
      {Array.from(Array(Pages), (item, index) => {
        return (
          <button
            id="button"
            value={index}
            onClick={(e) => setCurrentPage(Number(e.target.value))}>
            {index + 1}
          </button>)
      })}
    </div>
  )
}