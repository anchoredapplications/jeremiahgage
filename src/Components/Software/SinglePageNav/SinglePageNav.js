import { useState } from 'react';
import styles from './SinglePageNav.module.scss'
 
function SinglePageNav(props) {
    window.addEventListener("scroll", navHighlighter);
    const [dropDownIsActive, setDropDownIsActive] = useState(false)

    return (
        <>
            <div className={styles.sideBar}>
                <nav className={["navigation", styles.navigation, (dropDownIsActive ? styles.isOpen : "")].join(" ")} tabIndex={1}  onClick={() => {setDropDownIsActive(val => !val)}}>
                    <div className={styles.dropdownButton}>    
                        <svg viewBox="0 0 100 80" width="20" height="30">
                            <rect y="15" width="100" height="15"></rect>
                            <rect y="45" width="100" height="15"></rect>
                            <rect y="75" width="100" height="15"></rect>
                        </svg>
                    </div>
                    <ul className={styles.dropdownContent}>
                        {props.children.map((item, index)=>{
                            return <li key={index}>
                                <a href={`#${item.props.header}`}>{item.props.header}</a>
                            </li>
                        })}
                    </ul>
                </nav>
            </div>
            <div className={styles.mainContent}>
            {props.children.map((item, index)=>{
                return <section key={index} id={item.props.header}>
                    {item}                    
                </section>
            })}
            </div>
        </>
    );
}

function navHighlighter() {
    const sections = document.querySelectorAll("section[id]");
    let scrollY = window.pageYOffset;
  
    sections.forEach(current => {
        const sectionHeight = current.parentElement.offsetHeight;
    
        const sectionTop = current.getBoundingClientRect().top + window.pageYOffset - 150;
        var sectionId = current.getAttribute("id");
        
        var el = document.querySelector(".navigation a[href*=" + sectionId + "]")
        if (
            scrollY > sectionTop &&
            scrollY <= sectionTop + sectionHeight
        ){
            el.className = styles.active
        } else {
            el.className = ""
        }
    });
}


export default SinglePageNav;
