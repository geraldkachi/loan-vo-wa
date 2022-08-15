import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { routeListBottomNav } from '../../assets/data/sidebarList';
import HomeBot from '../../assets/home/bottom-nav/HomeBot';
import LoanBot from '../../assets/home/bottom-nav/LoanBot';
import MoreBot from '../../assets/home/bottom-nav/MoreBot';
import TransactionsBot from '../../assets/home/bottom-nav/TransactionsBot';



import AccountIcon from '../../assets/sidebar/AccountIcon';
import BeneficialIcon from '../../assets/sidebar/BeneficialIcon';
import DebitCardIcon from '../../assets/sidebar/DebitCardIcon';
import LoanIcon from '../../assets/sidebar/LoanIcon';
import TransactionsIcon from '../../assets/sidebar/TransactionIcon';
import './bottomnav.css'

const BottomNav = () => {
    const location = useLocation()
    const [open, setOpen] = useState(true);

    return (
        <section className="sm:hidden bottomnav px-3 fixed  bottom-0 bg-white w-full shadow-xl flex items-center gap-1 justify-center overflow-x-hidden">
            {routeListBottomNav.map((item, index) => {
                const activeItem = item.route.includes(location.pathname);
                const iconArr = [
                    <HomeBot index={activeItem} />,
                    <LoanBot index={activeItem} />,
                    <TransactionsBot index={activeItem} />,
                    <MoreBot index={activeItem} />,

                ]
                return (
                    <Link to={item.route} key={index}
                        className={`${activeItem && "text-white rounded-2xl bg-[#065373] w-max"} grid grid-cols-4 gap-x-4 rounded-full p-2 cursor-pointer my-3  text-sm space-x-1`}>
                        <div> {iconArr[index]}</div>

                        {/* <span className={`${!open  &&  "scale(0) hidden"} origin-left duration-200`}> */}
                        <span className={`${!activeItem &&  "scale(0) hidden"} origin-left duration-200`}>
                            {item.title}
                        </span>
                    </Link>
                )
            }
            )}
        </section>
    )
}

export default BottomNav
