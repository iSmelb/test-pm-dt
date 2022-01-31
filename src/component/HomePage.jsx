import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { useMemoizations } from '../hooks/useMemoizations';
import { changeCurrentPage, fetchSumarries, switchFiltresStatus } from '../redux/actions';
import FilterMenu from './FilterMenu/FilterMenu';
import Loader from './UI/loader/Loader';
import UserCardMini from './UserCard/UserCardMini';

function HomePage() {

    const currentPage = useSelector(state => state.summaries.currentPage)
    const pageCount = useSelector(state => state.summaries.pageCount)
    const summaries = useSelector(state => state.summaries.fetchedSummaries)
    const loading = useSelector(state => state.app.loading)
    const errorFetch = useSelector(state => state.summaries.error)
    let pagesArray = useMemoizations(pageCount)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchSumarries(currentPage))
    }, [currentPage])

    const changePage = (data) => {
        let page = data.selected + 1
        dispatch(changeCurrentPage(page))
    }

    return (
        <main className='main'>
            <div className='conteiner'>
                <div className='title'>
                    <h2>Мы подобрали <a href='#'>451 642</a> резюме</h2>
                    <span className='underline' />
                    <p>Резюме продавец консультант во Всей Украине</p>
                    <div className='filters'>
                        <span className='global_filter'>за все время</span>
                        <div className='settings_filter'
                            onClick={() => {
                                dispatch(switchFiltresStatus())
                                document.body.classList.add('stop-scrolling')
                            }} >
                            <FontAwesomeIcon icon={faSlidersH} />
                        </div>
                    </div>
                </div>
                <div className='cards_and_filter_menu'>
                    <div className='cards'>
                        {summaries.length === 0 && <span className='nothing_items'>Ничего не найдено</span>}
                        {loading
                            ? <div><Loader /></div>
                            : summaries.map(summary => <UserCardMini key={summary.id} summary={summary} />)
                        }
                        {errorFetch && <span className='error'>{errorFetch}</span>}
                    </div>
                    <div className='filter_menu_conteiner'>
                        <FilterMenu />
                    </div>
                </div>
                <div className='pages'>
                    {
                        <ReactPaginate
                            className='pagination'
                            nextLabel=""
                            previousLabel=""
                            onPageChange={changePage}
                            pageCount={pageCount}
                            pageRangeDisplayed={1}
                            marginPagesDisplayed={2}
                            forcePage={currentPage - 1}
                        />
                    }
                </div>
            </div>
        </main>
    );
}

export default HomePage;
