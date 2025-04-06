import React, { useState } from "react";
import classNames from "classnames";

import s from "./AppLayout.module.scss";
import { Link, NavLink } from "react-router";
import { appPaths } from "~/features/App/utils/constants";

type AppLayoutProps = {
  children: React.ReactNode;
  menuItems: {
    label: string;
    to: string;
  }[];
};

const AppLayout = ({ children, menuItems }: AppLayoutProps) => {
  const [isMobileMenuShown, toggleMobileMenu] = useState(false);
  const thisClass = classNames({
    [s.this]: true,
    [s.this_mobileMenuHidden]: !isMobileMenuShown,
    [s.this_mobileMenuShown]: isMobileMenuShown,
  });
  const menuSwitcherTitle = isMobileMenuShown ? "Close" : "Menu";
  const contentId = "page-content";
  return (
    <div className={thisClass}>
      <a className={s.skipLink} href={`#${contentId}`} data-reach-skip-link>
        Skip to main content
      </a>
      <header className={s.header}>
        <div className={s.brandWrapper}>
          <Link className={s.brand} to={appPaths.home}>
            2048
          </Link>
        </div>
        <button
          className={s.menuSwitcher}
          onClick={() => toggleMobileMenu(!isMobileMenuShown)}
        >
          {menuSwitcherTitle}
        </button>
        <nav className={s.nav}>
          <div className={s.menuWrapper}>
            <ul className={s.menu}>
              {menuItems.map((item) => (
                <li className={s.menuItem} key={item.label}>
                  <NavLink
                    className={({ isActive }) =>
                      classNames({
                        [s.menuLink]: true,
                        [s.menuLink_active]: isActive,
                      })
                    }
                    to={item.to}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
      <main className={s.main} id={contentId}>
        {children}
      </main>
      <footer className={s.footer}>Made with ♡ by Natalia Prikhoda</footer>
    </div>
  );
};

export default AppLayout;
