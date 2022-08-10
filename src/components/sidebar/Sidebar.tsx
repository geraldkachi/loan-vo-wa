import { useState } from 'react'
import './sidebar.css'
import { Link, Route, useLocation, useNavigate } from 'react-router-dom'
import { useWindowDimensions } from 'arvara'
import LoanIcon from '../../assets/sidebar/LoanIcon'
import HomeIcon from '../../assets/home/HomeIcon'
import TransactionsIcon from '../../assets/sidebar/TransactionIcon'
import AccountIcon from '../../assets/sidebar/AccountIcon'
import DebitCardIcon from '../../assets/sidebar/DebitCardIcon'
import BeneficialIcon from '../../assets/sidebar/BeneficialIcon'
import MenuIcon from '../../assets/sidebar/MenuIcon'
import HomeLogoIcon from '../../assets/sidebar/HomeLogoIcon'
import LogOutIcon from '../../assets/sidebar/LogOutIcon'

const Menus = [
    { route: "/dashboard", title: "Home" },
    { route: "/loan", title: "Loan" },
    { route: "/transactions", title: "Transactions" },
    { route: "/account", title: "Account" },
    { route: "/debit-card", title: "Debit Card" },
    { route: "/beneficiaries", title: "Beneficiaries" },
];


const Sidebar = () => {
    const location = useLocation()
    const { width } = useWindowDimensions()

    // const { user } = useAppSelector(selectAuth)
    // const navigate = useNavigate()
    // const dispatch = useAppDispatch()
    // const handleLogout = () => {
    //     dispatch(logout());
    //     toast.success("User Logged Out Successfully")
    //     navigate('/login')
    // }


    const [open, setOpen] = useState(true);

    const handleCollapse = (type: boolean) => setOpen(type)

    // ${width < 1200 ? "w-20" : "w-60"}

    return (
        <section className={`sidebar`}>
            <div className={` ${open ? "w-60" : "w-20"} flex flex-col justify-between transition-all ease-in-out  top-0 left-0 bg-[#065373] text-white p-5 h-screen pt-8 relative duration-300`}>

                <div className={`${open ? "pt-6 mx-auto" : "m-0"}`}>
                {/* <div className={`${open ? "pt-6 mx-auto" : "m-0"}`}> */}
                    <div className="inline-flex items-center pb-10 gap-4">
                        <MenuIcon onClick={() => setOpen(!open)} className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}/>
                        <HomeLogoIcon className={`${!open && "scale-0 hidden"}`} />
                    </div>
                    {Menus.map((Menu, index) => {
                        const activeItem = Menu.route.includes(location.pathname);
                        // .map((item: any) => location.pathname.includes(item.route) && item.route)[0]
                        // console.log(activeItem, 'ROUTE');
                        const iconArr = [
                            <HomeIcon index={activeItem} />,
                            <LoanIcon index={activeItem} />,
                            <TransactionsIcon index={activeItem} />,
                            <AccountIcon index={activeItem} />,
                            <DebitCardIcon index={activeItem} />,
                            <BeneficialIcon index={activeItem} />,
                        ]
                        return (
                            <Link to={Menu.route} key={index}
                                className={`${activeItem && "bg-white rounded-2xl text-[#065373]"} flex items-center rounded-md p-2 cursor-pointer my-4  text-sm space-x-3
                                `}
                            // ${Menu?.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"}
                            >
                                <div> {iconArr[index]}</div>

                                <span className={`${!open && "hidden"} ${width < 1200 ? "" : ""} origin-left duration-200`}>
                                    {Menu.title}
                                </span>
                            </Link>
                        )
                    }
                    )}
                </div>

                <div className="flex items-center justify-center">
                    <Link to="/" className="flex items-center  gap-5">
                    <LogOutIcon />
                        <div className={`${!open && "hidden"} text-white text-sm`}> Logout</div>
                    </Link>
                </div>
            </div>
        </section>
    );

}

export default Sidebar
