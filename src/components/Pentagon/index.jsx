import "./pentagon.css"

export function Pentagon({ Color, Number }) {
  return (
    <>
      <svg className='pentagon'
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        title="">
        <path
          d="m8 0 8 6.5-3 9.5H3L0 6.5 8 0z"
          fill={Color}>
        </path>

        <text x="6" y="11" className="text-pentagon">{Number}</text>
      </svg>
    </>
  )
}