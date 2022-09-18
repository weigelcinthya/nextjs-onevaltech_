import React from "react";
import Heart from "../../atoms/heart/heart";
import Link from "next/link";

const Header = () => {
    return (
        <header className="header">
            <Heart heartColor="#2F1160" />

            <ul class="header__menu">
                <li>
                    <Link href="/">My Profile</Link>
                </li>
                <li>
                    <a>Account</a>
                </li>
            </ul>

            <button class="btn btn--primary raise-hand">
               <Link href="/help">ask for help</Link>
            </button>
            <a href="#menu" class="box-shadow-menu">
            </a>
        </header>
    )
}

export default Header;