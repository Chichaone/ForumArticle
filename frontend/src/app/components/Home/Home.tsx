import {observer} from "mobx-react-lite"
import React from "react";
import './Home.scss'
import Card from "../UI/Card/Card";
import FloatingInput from "../UI/FloatingInput/FloatingInput";
import searchStore from "../../lib/store/search-store";

export default observer(() => {

    const filterData = searchStore.dataPosts.filter((value) => (
        value.title.toLowerCase().includes(searchStore.value.toLowerCase())
    ))
    return (
        <div className='home'>
            <FloatingInput/>
            {
                filterData.map((posts,index) => (
                    <Card key={`home-card-${index}`} data={posts}/>
                ))
            }
        </div>
    )
})

