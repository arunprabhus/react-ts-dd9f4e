import React from 'react';
const Pagination = ({ postPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  
  return (
    <div className="pagination">
      {pageNumbers.map((number) => (
        <a onClick={() => paginate(number)} href="!#" key={number}>
          {number}
        </a>
      ))}
    </div>
  );

};

export default Pagination;
