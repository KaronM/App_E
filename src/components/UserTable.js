import './UserTable.css';
import React from 'react';
import tableUsers from './Userdata';
import { useState, useEffect } from "react";

export default function UserTable(){
    const [firstNum, setFirstNum] = useState(0);
    const [lastNum, setLastNum] = useState(6);
    var [currentPageNumber, setCurrentPageNumber] = useState(1);

    var [data, setData] = useState([]);

    var [dataToDisplay, setDataToDisplay] = useState([]);

    const dataPerPage = 6;

    const last = () => {
        if (firstNum - dataPerPage >= 0) {
            setFirstNum(firstNum - dataPerPage);
            setCurrentPageNumber(currentPageNumber - 1);
            setLastNum(firstNum)
        }
    };

    const next = () => {
        if (firstNum + dataPerPage < tableUsers.length) {
            setFirstNum(firstNum + dataPerPage);
            setCurrentPageNumber(currentPageNumber + 1);
            if(lastNum+dataPerPage > tableUsers.length){
            setLastNum(tableUsers.length)
            }else{
            setLastNum(lastNum+ dataPerPage);
            }
        }
    };
    
    useEffect(() => {
        setData(tableUsers);
    }, []);

    useEffect(() => {
        setDataToDisplay(data.slice(firstNum, lastNum));
    }, );

    const tableHead = ['Username', 'Email','Date Registered', 'Last active'];

    return(
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase dark:text-black">
            <tr>
                {tableHead.map((head) => 
                <th scope="col" class="px-6 py-3 bg-white">
                    {head}
                </th>)}
            </tr>
        </thead>
        <tbody>
            
                {dataToDisplay.map(({username, email, dateRegistered, activity}) => 
                    <tr key={username} class="border-b border-gray-400">
                       <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap text-gray-400 bg-white">
                            {username}
                        </th>
                        <td class="px-6 py-4 bg-gray-100">
                            {email}
                        </td>
                        <td class="px-6 py-4 bg-gray-50 bg-white">
                            {dateRegistered}
                        </td>
                        <td class="px-6 py-4 bg-gray-100">
                            {activity}
                        </td>
                    </tr>    
                )}
                
        </tbody>
    </table>
    <div class="flex flex-col items-center">
    {/*<!-- Help text -->*/}
    <span class="text-sm text-gray-700 dark:text-gray-400">
        Showing <span class="font-semibold text-gray-700">{firstNum}</span> to <span class="font-semibold text-gray-700">{lastNum}</span> of <span class="font-semibold text-black">{tableUsers.length}</span> Entries
    </span>
    {/*<!-- Buttons -->*/}
    <div class="inline-flex mt-2 xs:mt-0">
        <button onClick={last} class="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-enpak1 rounded-s hover:bg-gray-300   dark:hover:bg-gray-700 dark:hover:text-white">
            Prev
        </button>
        <button onClick={next} class="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-enpak1 border-0 border-s border-gray-700 rounded-e hover:bg-gray-300 dark:hover:bg-gray-700 dark:hover:text-white">
            Next
        </button>
    </div>
    </div>
</div>

    );
}