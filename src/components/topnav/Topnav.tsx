import { Link } from "react-router-dom"
import HelloIcon from "../../assets/dashboard/dashHomeIcon"
import NotificationIcon from "../../assets/navbar/NotificationIcon"
import Dropdown from "../DropDown/DropDown"

const notifications = [
    {
        "heading": "Bill Payment",
        "icon": NotificationIcon,
        "content": "₦5,000 was deducted for DSTV subscription",
        "time": "36 mins ago"
    },
    {
        "heading": "Withdrawal",
        "icon": NotificationIcon,
        "content": "₦30,000 withdrawal was made from your wallet",
        "time": "36 mins ago"
    },
    {
        "heading": "Withdrawal",
        "icon": NotificationIcon,
        "content": "₦5,000 was deducted for DSTV subscription",
        "time": "36 mins ago"
    },
    {
        "heading": "Withdrawal",
        "icon": NotificationIcon,
        "content": "₦50,000 was deposited into your wallet",
        "time": "36 mins ago"
    },
    {
        "heading": "Withdrawal",
        "icon": NotificationIcon,
        "content": "Congratulations, you can now have access to all our loan offers",
        "time": "36 mins ago"
    }
]

interface Props {
    items: any[];
}

const renderNotificationItem = (item: any, index: number) => (
    <div className="flex m-5" key={index}>
        {/* <i className={item.icon}></i> */}
        <img src={item.icon} />
        <div>
            <div className="text-[#141C1F] font-bold">{item.heading}</div>
            <span className="text-xs">{item.content}</span>
            <span className="text-xs mt-3 block">{item.time}</span>
        </div>
    </div>
)

const current_user = {
    image: NotificationIcon
}

const renderNotifyIcon = (user: any) => (
    <div className="topnav__right-user">
        <div className="topnav__right-user__image">
            <img src={user.image} alt="users" />
        </div>

    </div>
)

const TopNav = () => {
    return (
        <section>
            <div className="flex items-center justify-between p-5">

                <div>
                    <div className="flex items-center gap-5">
                        {/* <span className="text-base">{pageBane} </span> */}
                        {/* <span className="text-base">Hello Lord Gerald Kachi </span> */}
                        <HelloIcon className="inline-block ml-3" />
                    </div>
                    <h1 className="text-3xl font-bold">Welcome Back!</h1>
                </div>

                <div className="flex items-center gap-5">
                    <div className="notification w-12 h-12 cursor-pointer rounded-full border border-[#C0C2C2] flex items-center justify-center">
                        {/* <NotificationIcon /> */}
                        <Dropdown
                            icon={NotificationIcon}
                            // badge="12"
                            customToggle={() => renderNotifyIcon(current_user)}
                            contentData={notifications}
                            renderItems={(item: any, index: number) => renderNotificationItem(item, index)}
                            // renderFooter={() => <Link to="#">View All</Link>}
                        />
                    </div>

                    <Link to="/account">
                        <img src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" alt="Avatar" className="rounded-full cursor-pointer w-12 shadow-lg" />
                    </Link>
                </div>
            </div>
        </section>

    )
}

export default TopNav
