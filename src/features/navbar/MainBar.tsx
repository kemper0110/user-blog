import BackLogo from "../../ui/back.svg";
import StatisticsLogo from "../../ui/statistics.svg";
import InvoicesLogo from "../../ui/invoices.svg";
import ScheduleLogo from "../../ui/schedule.svg";
import React from "react";


const onDarkmodeClick = () => {
    document.body.classList.toggle('dark')
}

const MainBlock = ({label, icon}: { label: string, icon: string }) => {
    return (
        <li className="py-3 px-5 flex flex-col items-center gap-2 hover:bg-hover_gray dark:hover:bg-d_hover">
            <img className="inline-block w-[18px] h-[18px] dark:brightness-150" src={icon} alt={label}/>
            <span className='font-normal leading-4 text-tw_black dark:text-white'>{label}</span>
        </li>
    )
}


const MainBar = () => {
    return (
        <div className=''>
            <nav className="md:px-7 flex justify-between items-center font-basic bg-white dark:bg-d_mainbar">
                <div className="flex p-3 items-center gap-3">
                    <img src={BackLogo} className="dark:brightness-200" alt='<-'/>
                    <span className="">
                        <span className='font-medium text-lg text-tw_black dark:text-white leading-5'>User pages</span>
                        <span className='font-normal text-lg text-tw_black dark:text-white leading-5'> - Profile</span>
                    </span>
                    <span onClick={onDarkmodeClick} role='button'>
                        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round"
                             strokeLinejoin="round" className="w-6 h-6">
                            <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                  className="stroke-slate-400 dark:stroke-slate-500"/>
                            <path
                                d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
                                className="stroke-slate-400 dark:stroke-slate-500"/>
                        </svg>
                    </span>
                </div>

                <button type="button"
                        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden dark:brightness-200"
                >
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                              clipRule="evenodd"></path>
                    </svg>
                </button>
                <ul className="hidden md:flex">
                    <MainBlock label="Statistics" icon={StatisticsLogo}/>
                    <MainBlock label="Invoices" icon={InvoicesLogo}/>
                    <MainBlock label="Schedule" icon={ScheduleLogo}/>
                </ul>
            </nav>
        </div>
    );
};

export default MainBar;