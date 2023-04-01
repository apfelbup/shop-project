import React from 'react'
import ReactPaginate from "react-paginate";
import './Pagination.scss';
import { setCurrentPage } from '../../redux/slices/pagesSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';

const Pagination = () => {
  const dispatch = useAppDispatch();
  const {currentPage} = useAppSelector((state)=> state.pages);
  const data = useAppSelector((state)=> state.products.category);
  const onChangePage = (number:number) =>{
      dispatch(setCurrentPage(number))
  }


  return (
    <div> <ReactPaginate
    className="root"
    breakLabel="..."
    nextLabel=">"
    previousLabel="<"
    onPageChange={(event)=> onChangePage(event.selected+1)}
    pageRangeDisplayed={data.length>0?3:5}
    pageCount={data.length>0?3:5}
    forcePage={currentPage-1}
    /></div>
  )
}

export default Pagination;
