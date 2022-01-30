import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMemoizations } from '../hooks/useMemoizations';
import { changeCurrentPage, fetchSumarries, fetchSumarriesWhithPhoto, switchFiltresStatus } from '../redux/actions';
import FilterMenu from './FilterMenu/FilterMenu';
import UserCardMini from './UserCard/UserCardMini';

function PageWithPhoto() {

    const currentPage = useSelector(state => state.summaries.currentPage)
    const pageCount = useSelector(state => state.summaries.pageCount)
    const summaries = useSelector(state => state.summaries.fetchedSummaries)
    let pagesArray = useMemoizations(pageCount)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchSumarriesWhithPhoto(currentPage))
    }, [currentPage])

    const changePage = (page) => {
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
                                document.body.classList.toggle('stop-scrolling')
                            }} >
                            <FontAwesomeIcon icon={faSlidersH} />
                        </div>
                    </div>
                </div>
                {summaries.map(summary => <UserCardMini key={summary.id} summary={summary} />)}
                <FilterMenu />
                <div className='pages'>
                    <button
                        onClick={() => changePage(currentPage - 1)}
                        className='prev'
                        disabled={currentPage === 1 && true}
                    />
                    {pagesArray.map(p =>
                        <span
                            key={p}
                            className={currentPage === p ? 'current_page' : 'page'}
                            onClick={ () => changePage(p)}
                        >
                            {p}
                        </span>)}
                    <button
                        onClick={() => changePage(currentPage + 1)}
                        className='next'
                        disabled={currentPage === pageCount && true}
                    />
                </div>
            </div>
        </main>
    );
}

export default PageWithPhoto;
