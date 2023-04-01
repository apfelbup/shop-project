import { useAppDispatch } from "../hooks";
import { setCurrentPage } from "../redux/slices/pagesSlice";
import { changeSortOptions } from "../redux/slices/productsSlice";


export function changeOptions (e:React.ChangeEvent<HTMLSelectElement>) {
    const dispatch = useAppDispatch();
    dispatch(changeSortOptions(e.target.value));
    dispatch(setCurrentPage(1));
}