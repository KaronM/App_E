import React from "react";
import './UserCard.css';
import { useState } from "react";

export default function UserCard(){
    const [status, setStatus] = useState(false);

    const toggleStatus = () => {
        setStatus(!status);
    };

    const dynamicStyle = {
        visibility: status ? 'visible' : 'hidden' ,
    };

    return(
        <div class="dark:bg-gray-100">
    <div class="flex items-center min-h-6 bg-gray-100 dark:bg-gray-100 pt-3 px-4"><h1 class="text-4xl">User Analysis</h1></div>
    <div class="block float-right mr-20 min-h-6 bg-gray-100 dark:bg-gray-100 relative">
{/*<!-- Dropdown menu -->*/}
            <button onClick={toggleStatus} id="dropdownDelayButton" data-dropdown-toggle="dropdownDelay" data-dropdown-delay="500" data-dropdown-trigger="hover" class="text-white bg-enpak1 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-enpak1 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-enpak1 dark:hover:bg-enpak1 dark:focus:ring-grey-300" type="button">Current Month<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
        </svg>
            </button>

        <div style={dynamicStyle} id="dropdownDelay" class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButton">
            <li>
                <button class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full">January</button>
            </li>
            <li>
                <button class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full">February</button>
            </li>
            <li>
                <button class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full">March</button>
            </li>
            <li>
                <button class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full">April</button>
            </li>
            <li>
                <button class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full">May</button>
            </li>
            <li>
                <button class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full">June</button>
            </li>
            <li>
                <button class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full">July</button>
            </li>
            <li>
                <button class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full">August</button>
            </li>
            <li>
                <button class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full">September</button>
            </li>
            <li>
                <button class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full">October</button>
            </li>
            <li>
                <button class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full">November</button>
            </li>
            <li>
                <button class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full">December</button>
            </li>
            </ul>
        </div>
    </div>
<div class="flex items-center min-h-6 bg-gray-100 dark:bg-{#eeeeee}"> 
    <div class="container max-w-6xl px-5 mx-auto my-10">
        <div class="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 bg-gray-100">
            <div class="p-5 bg-white rounded shadow-sm">
                <div class="flex items-center space-x-4">
                    <div>
                        <div class="flex items-center justify-center w-12 h-12 rounded-full bg-amber-50 text-amber-400">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.7712 13.1046C20.7714 12.1044 21.3333 10.7478 21.3333 9.33333C21.3333 7.91885 20.7714 6.56229 19.7712 5.5621C18.771 4.5619 17.4145 4 16 4C14.5855 4 13.2289 4.5619 12.2288 5.5621C11.2286 6.56229 10.6667 7.91885 10.6667 9.33333C10.6667 10.7478 11.2286 12.1044 12.2288 13.1046C13.2289 14.1048 14.5855 14.6667 16 14.6667C17.4145 14.6667 18.771 14.1048 19.7712 13.1046Z" stroke="#FBBF24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M9.40033 21.4003C11.1507 19.65 13.5246 18.6667 16 18.6667C18.4753 18.6667 20.8493 19.65 22.5997 21.4003C24.35 23.1507 25.3333 25.5246 25.3333 28H6.66666C6.66666 25.5246 7.64999 23.1507 9.40033 21.4003Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </div>
                    </div>
                    <div>
                        <div class="text-gray-400">Active Users</div>
                        <div class="text-2xl font-bold text-gray-900">1375</div>
                    </div>
                </div>
            </div>
            <div class="p-5 bg-white rounded shadow-sm">
                <div class="flex items-center space-x-4">
                    <div>
                        <div class="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-50 text-emerald-400">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 25.3333V17.3333C12 16.6261 11.719 15.9478 11.219 15.4477C10.7189 14.9476 10.0406 14.6667 9.33333 14.6667H6.66667C5.95942 14.6667 5.28115 14.9476 4.78105 15.4477C4.28095 15.9478 4 16.6261 4 17.3333V25.3333C4 26.0406 4.28095 26.7189 4.78105 27.219C5.28115 27.719 5.95942 28 6.66667 28H9.33333C10.0406 28 10.7189 27.719 11.219 27.219C11.719 26.7189 12 26.0406 12 25.3333ZM12 25.3333V12C12 11.2928 12.281 10.6145 12.781 10.1144C13.2811 9.61428 13.9594 9.33333 14.6667 9.33333H17.3333C18.0406 9.33333 18.7189 9.61428 19.219 10.1144C19.719 10.6145 20 11.2928 20 12V25.3333M12 25.3333C12 26.0406 12.281 26.7189 12.781 27.219C13.2811 27.719 13.9594 28 14.6667 28H17.3333C18.0406 28 18.7189 27.719 19.219 27.219C19.719 26.7189 20 26.0406 20 25.3333M20 25.3333V6.66667C20 5.95942 20.281 5.28115 20.781 4.78105C21.2811 4.28095 21.9594 4 22.6667 4H25.3333C26.0406 4 26.7189 4.28095 27.219 4.78105C27.719 5.28115 28 5.95942 28 6.66667V25.3333C28 26.0406 27.719 26.7189 27.219 27.219C26.7189 27.719 26.0406 28 25.3333 28H22.6667C21.9594 28 21.2811 27.719 20.781 27.219C20.281 26.7189 20 26.0406 20 25.3333Z" stroke="currentColor " stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </div>
                    </div>
                    <div>
                        <div class="text-gray-400">Users Registered</div>
                        <div class="text-2xl font-bold text-gray-900">250</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
    );
}