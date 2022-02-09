const Header = ({toggleDarkMode}) => {
    
    return (
        <div className="header">
            <h1>Notes</h1>
            <button className="save" onClick={toggleDarkMode}>Toggle Mode</button>
        </div>
    )
}

export default Header