import React from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'
const { SubMenu } = Menu;

function Nav() {
    const navStyle = {
        color: 'white'
    }

    const handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    return (
        // <nav>
        //     <h1>Logo</h1>
        //     <ul className="nav-links">
        //         <Link style={navStyle} to="/wild-pokemon-list">
        //             <li >List</li>
        //         </Link>
        //         <Link style={navStyle} to="/my-pokemon-list">
        //             <li>My List</li>
        //         </Link>
        //     </ul>
        // </nav>
        <Menu
            // onClick={handleClick}
            mode="horizontal"
        // selectedKeys={[this.state.current]}
        >
            <Menu.Item key="all">
                <Link to="/wild-pokemon-list">
                    <Icon type="appstore" />
                    All
                </Link>
            </Menu.Item>

            <Menu.Item key="alipay">
                <Link to="/my-pokemon-list">
                    <Icon type="mail" />
                    My Collection
                </Link>
            </Menu.Item>

            {/* <Menu.Item key="mail">
                <Icon type="mail" />
                All
            </Menu.Item> */}
            {/* <Menu.Item key="app" disabled>
                <Icon type="appstore" />
                Navigation Two
            </Menu.Item> */}

            {/* <Menu.Item key="alipay">
                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                    Navigation Four - Link
                </a>
            </Menu.Item> */}

        </Menu>

    )
}

export default Nav
