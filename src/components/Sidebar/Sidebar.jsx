import "./sidebar.css"
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <img src="https://preparecenter.org/wp-content/uploads/2021/04/google-_square_logo.jpeg" alt="" className="companyImage" />
                <div className="companyTitle">Google</div>
                <ul className="optionsList">
                    <li className="option"> <a href="" className="optionLink">Home</a></li>
                    <li className="option"><a href="" className="optionLink">Post a job</a></li>
                    <li className="option"><a href="" className="optionLink">Schedule interview</a></li>
                    <li className="option"><a href="" className="optionLink">Collaboration</a></li>
                </ul>
            </div>
        </div>
    )
}
export default Sidebar