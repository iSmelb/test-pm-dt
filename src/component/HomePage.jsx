import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';
import ResumeService from '../API/ResumeService';
import { useFetching } from '../hooks/useFetching';
import FilterMenu from './FilterMenu/FilterMenu';
import UserCardMini from './UserCard/UserCardMini';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { fetchSumarries, switchFiltresStatus } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { useMemoizations } from '../hooks/useMemoizations';

function HomePage({ }) {
    const [currentPage, setCurrentPage] = useState(1)
    const dispatch = useDispatch()
    const pageCount = useSelector(state => state.summaries.pageCount)
    const summaries = useSelector(state => state.summaries.fetchedSummaries)
    let pagesArray = useMemoizations(pageCount)

    useEffect(() => {
        dispatch(fetchSumarries(currentPage))
    }, [currentPage])

    const changePage = (page) => {
        setCurrentPage(page)
    }

    console.log(pageCount)

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
                {/* <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === pageCount ? true : false}
                >
                    след запрос
                </button> */}
                <div className='pages'>
                    {pagesArray.map(p =>
                        <span
                            key={p}
                            className={currentPage === p ? 'current_page' : 'page'}
                            onClick={ () => changePage(p)}
                        >
                            {p}
                        </span>)}
                </div>
            </div>
        </main>
    );
}

export default HomePage;
