import React from 'react';
import './FloatingInput.scss'
import searchStore from "../../../lib/store/search-store";
import IconStore from "../../../../core/components/Icons/IconStore";
import {observer} from "mobx-react-lite";

const Search = () => {

    const onClearValue = () => {
        searchStore.setValue('')
    }

    return (
        <div className="input-container">
            <input value={searchStore.value}
                   onChange={(event) => searchStore.setValue(event.target.value)}
                   type="text" placeholder="Найти статью" className="input w-full max-w-xs" />
            {
                searchStore.value.length !== 0 && <button onClick={onClearValue} className={"btn"}>
                    {IconStore.xmark}
                </button>
            }
        </div>
    );
}

export default observer(Search);