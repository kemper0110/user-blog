import React from "react";
import activityLogo from '../../ui/activity.svg';
import settingsLogo from '../../ui/settings.svg';
import dropdownLogo from '../../ui/dropdown.svg';
import mapLogo from '../../ui/map.svg';
import timeLogo from '../../ui/time.svg';
import notesLogo from '../../ui/notes.svg';
import friendsLogo from '../../ui/friends.svg';
import photosLogo from '../../ui/photos.svg';

const SubBarItem = ({label, icon, isActive = false}: {label: string, icon: string, isActive?: boolean}) => {
    return (
        <li className='flex gap-2 items-center px-3 py-3 hover:bg-hover_gray dark:hover:bg-d_hover active:bg-active_gray text-tw_black'>
            <img src={icon} alt={label} className='w-[20px] h-[20px] dark:brightness-200'/>
            <span className='dark:text-white'>{label}</span>
        </li>
    )
}
const SettingsItem = ({icon, dropdown}: {icon: string, dropdown: string}) => {
    return (
        <li className='flex gap-2 items-center px-3 py-3 hover:bg-hover_gray dark:hover:bg-d_hover active:bg-active_gray'>
            <img src={icon} alt='Ж' className='w-[20px] h-[20px] dark:invert'/>
            <img src={dropdown} alt={'='} className='w-[24px] h-[24px] dark:brightness-200'/>
        </li>
    )
}
const SubBar = () => {
    return (
        <div className='bg-bg2 dark:bg-d_subbar border-b border-t border-active_gray dark:border-tw_black font-basic leading-4 font-normal'>
            <nav className='md:px-7 flex justify-between'>
                <ul className='flex'>
                    <SubBarItem label='Activity' icon={activityLogo} isActive={true}/>
                    <SubBarItem label='Map' icon={mapLogo}/>
                    <SubBarItem label='Time' icon={timeLogo}/>
                </ul>
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
                <ul className='md:flex hidden'>
                    <SubBarItem label='Notes' icon={notesLogo}/>
                    <SubBarItem label='Friends' icon={friendsLogo}/>
                    <SubBarItem label='Photos' icon={photosLogo}/>
                    <SettingsItem icon={settingsLogo} dropdown={dropdownLogo}/>
                </ul>
            </nav>
        </div>
    );
};

export default SubBar;