import React, {ReactNode} from 'react';
import dropdownLogo from '../../../ui/dropdown.svg';
import profileLogo from '../../../ui/profile.svg';
import balanceLogo from '../../../ui/balance.svg';
import connectionsLogo from '../../../ui/connections.svg';
import friendsLogo from '../../../ui/aside_friends.svg';
import eventsLogo from '../../../ui/events.svg';
import settingsLogo from '../../../ui/aside_settings.svg';


const Navigation = () => {
    return (
        <div className='flex flex-col divide-y-2 dark:divide-d_divider bg-white border border-black/10 dark:bg-d_content shrink-0'>
            <div className='flex justify-between items-center px-4 py-2'>
                <span className='text-tw_black font-medium leading-5 dark:text-white'>Navigation</span>
                <img className='dark:brightness-200' src={dropdownLogo} alt='-'/>
            </div>
            <ul className=''>
                <Item icon={profileLogo} label='My profile'/>
                <Item icon={balanceLogo} label='Balance' value={
                    <span className='text-second_tx dark:brightness-150'>$ 1,430</span>
                }/>
                <Item icon={connectionsLogo} label='Connections' value={
                    <span className='bg-connections rounded-2xl px-2 py-0.5 text-white text-sm'>29</span>
                }/>
                <Item icon={friendsLogo} label='Friends'/>
            </ul>
            <ul>
                <Item icon={eventsLogo} label='Events' value={
                    <span className='bg-events rounded-2xl px-2 py-0.5 text-white text-sm'>45</span>
                }/>
                <Item icon={settingsLogo} label='Account settings'/>
            </ul>
        </div>
    );
};
const Item = ({icon, label, value = null}: { icon: string, label: string, value?: ReactNode | ReactNode[] }) => {
    return (
        <div className='flex gap-3 px-4 py-3'>
            <img className='w-[20px] h-[20px] dark:brightness-200' src={icon} alt={label}/>
            <span className='grow text-tw_black dark:text-white'>{label}</span>
            {value}
        </div>
    )
}

export default Navigation;