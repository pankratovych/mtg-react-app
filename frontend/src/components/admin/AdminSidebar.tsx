import "../../styles/admin.css"
import { Link } from "react-router-dom"

export const AdminSidebar = () => {
    return (
        <div className="sidebar-body">
            <div className="sidebar-bar">
                <div>
                    <p>Tournaments admin panel</p>
                </div>
                <div className="sidebar-links-block">
                    <p>You are an admin!</p>
                </div>
                <div className="sidebar-links-block">
                    <Link to="/admin-tournaments" className="sidebar-links">TOURNAMENTS</Link>
                    <Link to="/admin-cards" className="sidebar-links">CARDS DATABASE</Link>
                </div>
                <div className="sidebar-links-block">
                    <Link to="/" className="sidebar-links">Back to main</Link>
                </div>
            </div>
        </div>
    )
}