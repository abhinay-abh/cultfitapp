import React from 'react'

const Sidebar = () => {
  return (
    <div>
      <nav className="sidebar">
        <div className="menu-content">
            <ul className="menu-items">
                <div className="menu-title">cultfit user</div>
                <li className="item">
                    <a href="">
                       site
                    </a>
                    </li>
                <li className="item">
                    <a href="">
                        build
                        </a>
                        </li>
                <li className="item">
                    <a href="">
                        integration
                    </a>
                    </li>
                <li className="item">
                    <a href="">
                        domain
                        </a>
                        </li>
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Sidebar
