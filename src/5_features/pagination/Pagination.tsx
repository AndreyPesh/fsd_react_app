
const Pagination = () => {
  const data = [
    1,2,3,4,5,6,7,8,9,10
  ]

  return (
    <ul className="pagination">
      {data.map((value, index) => 
        <li className={`pagination__page ${index=== 3 ? 'pagination__page_active': ''}`} key={index}>{index + 1}</li>
      )}
    </ul>
  );
};

export default Pagination;