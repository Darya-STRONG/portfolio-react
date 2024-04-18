import "./style.css";

const Header = () => {
    return ( 
        
        <header className="header">
        <div className="header__wrapper">
            <h1 className="header__title">
                <strong>Hi, my name is <em>Daria</em></strong><br/>
                a Full-Stack developer
            </h1>
            <div className="header__text">
                <p>with passion for learning and creating.</p>
            </div>
            <a target="_blank" href="https://drive.google.com/file/d/1VzjtE5_IWXcr847XrYL29H2mSVxk0u78/view" className="btn">Download CV</a>
        </div>
    </header>
     );
}
 
export default Header;