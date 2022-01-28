import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';
import ResumeService from '../API/ResumeService';
import { useFetching } from '../hooks/useFetching';
import FilterMenu from './FilterMenu/FilterMenu';
import UserCardMini from './UserCard/UserCardMini';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';

function HomePage() {

    const [arrResumes, setArrResumes] = useState([])
    const [pageCount, setPageCount] = useState(null)
    const [filterMenu, setFilterMenu] = useState(false)
    const [resumFetch, resumIsloading, resumError] = useFetching(async () => {
        const response = await ResumeService.getRusume()
        setArrResumes(response.data.results)
        setPageCount(response.data.page_count)
        console.log(response.data)
    })


    useEffect(() => {
        resumFetch()
    }, [])

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
                        <div onClick={() => setFilterMenu(!filterMenu)} className='settings_filter'>
                            <FontAwesomeIcon icon={faSlidersH} />
                        </div>
                    </div>
                </div>
                {resumIsloading
                    ? <div>Загрузка</div>
                    : <UserCardMini />
                }
                <FilterMenu/>
            </div>
        </main>
    );
}

export default HomePage;
