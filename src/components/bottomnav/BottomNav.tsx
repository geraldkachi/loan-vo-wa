import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { routeList } from '../../assets/data/sidebarList';
import HomeIcon from '../../assets/home/HomeIcon';
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
        <section className="sm:hidden bottomnav fixed bottom-0 bg-white w-full shadow-xl flex items-center justify-center overflow-x-scroll">
            {routeList.slice(0, 4).map((item, index) => {
                const activeItem = item.route.includes(location.pathname);
                const iconArr = [
                    <HomeIcon index={activeItem} />,
                    <LoanIcon index={activeItem} />,
                    <TransactionsIcon index={activeItem} />,
                    <AccountIcon index={activeItem} />,
                    <DebitCardIcon index={activeItem} />,
                    <BeneficialIcon index={activeItem} />,
                ]
                return (
                    <Link to={item.route} key={index}
                        className={`${activeItem && "text-white rounded-2xl bg-[#065373]"} flex items-center rounded-md p-2 cursor-pointer my-4  text-sm space-x-3`}>
                        <div> {iconArr[index]}</div>

                        <span className={`${!open &&  "scale(0) hidden"} origin-left duration-200`}>
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
