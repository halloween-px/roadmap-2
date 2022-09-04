const getArr = (i) => {
  const arr = [];
  arr.length = i;
  arr.fill(1);
  return arr;
}
const Pagination = ({ pages, setPage }) => {
  const arr = getArr(pages);
  return (
    <nav>
      <ul className="pagination mb-3">
        <li className="page-item">
          <a className="page-link" href="#">
            <span>«</span>
          </a>
        </li>
        {arr.map((el, i) => {
          return (
            <li className="page-item" key={i}><a className="page-link" onClick={(e) => {
              e.preventDefault();
              setPage(i + 1)
            }} href="#">{i + 1}</a></li> 
          )
        })}
        <li className="page-item">
          <a className="page-link" href="#">
            <span>»</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination;