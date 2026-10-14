import { Link, NavLink } from 'react-router-dom'

export const Header = () => {
    return (

       <header>
            <Link to="/">
              <img className='logo' src="/images/logo-light.svg" alt="로고" />
            </Link>
            <nav className="gnb">

                <NavLink
                  to="/cafeList"
                  className={({ isActive }) =>
                    `[&.active]:text-primary${isActive ? ' active' : ''}`
                  }
                >
                  카페 찾기
                </NavLink>
                <NavLink
                  to="/form"
                  className={({ isActive }) =>
                    `[&.active]:text-primary${isActive ? ' active' : ''}`
                  }
                >
                  커뮤니티
                </NavLink>
                <NavLink
                  to="/bookmark"
                  className={({ isActive }) =>
                    `[&.active]:text-primary${isActive ? ' active' : ''}`
                  }
                >
                  북마크
                </NavLink>
        </nav>
      </header>

    )
}