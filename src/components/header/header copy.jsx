import React, { Component } from "react"
import "./header.less"
import { login } from '../../api'
import store from '../../store'
import actions from '../../redux/action'
import { Link } from "react-router-dom"
import { Breadcrumb } from 'antd';
import Solid_box from '../solid/solid'
import { EnvironmentOutlined, ArrowRightOutlined } from '@ant-design/icons';


export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            itemList: [],
        }
    }
    meunList = [
        {
            title: '首页',
            url: ""
        }, {
            title: '抵扣勾选',
            url: "",
            child: [
                {
                    title: '发票抵扣勾选',
                    url: ""
                }, {
                    title: '发票批量抵扣勾选',
                    url: ""
                }
            ]
        }, {
            title: '进项发票查询',
            url: ""
        }, {
            title: '税务事项通知书',
            url: ""
        }, {
            title: '发票管理',
            url: ""
        }, {
            title: '企业档案信息',
            url: ""
        },
    ]

    componentDidMount() {
        let userObj = {
            uid: 'zsxx',
            secret: 123456
        }
        login(userObj).then(res => {
            store.dispatch(actions("CHANGE_TOKEN", res.token))
        })
        this.doChildClick()
    }

    doChildClick = (index = 0, child = 0) => {
        let itemList = [];
        let item = this.meunList[index]
        itemList.push(item)
        if (Array.isArray(item.child)) {
            itemList.push(item.child[child])
            console.log(item,item.child[child],itemList)
        }
        console.log(item,itemList)
        this.setState({ itemList })
    }

    breadcrumbList = () => {
        let list = this.state.itemList
        return list.map((item, index) => {
            return (
                <Breadcrumb.Item key={index}>
                    <Link to={item.url}>{item.title}</Link>
                </Breadcrumb.Item>
            )
        })
    }

    render() {
        return (
            <div>
                <div className="webHeader">
                    <header>
                        {/* 增值税发票综合服务平台 */}
                        <img src={require("../../assets/img/logo.png")} alt="logo" />
                    </header>
                    <nav>
                        <ul>
                            <li><Link to="" onClick={this.doChildClick.bind(this, 0)}>首页</Link></li>
                            <li ><Link to="" onClick={this.doChildClick.bind(this, 1)}>抵扣勾选</Link>
                                <ul className="menu_select">
                                    <li><Link to="" onClick={this.doChildClick.bind(this, 1)}>发票抵扣勾选</Link></li>
                                    <li><Link to="" onClick={this.doChildClick.bind(this, 1,1)}>发票批量抵扣勾选</Link></li>
                                    {/* <li><Link to="" onClick={this.doChildClick.bind(this, 2)}>发票抵扣勾选</Link></li> */}
                                </ul>
                            </li>
                            <li><Link to="" onClick={this.doChildClick.bind(this, 2)}>进项发票查询</Link></li>
                            <li><Link to="" onClick={this.doChildClick.bind(this, 3)}>税务事项通知书</Link></li>
                            <li><Link to="" onClick={this.doChildClick.bind(this, 4)}>发票管理</Link></li>
                            <li><Link to="" onClick={this.doChildClick.bind(this, 5)}>企业档案信息</Link></li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <EnvironmentOutlined className="size" />
                    <div>
                        当前位置：
                        <Breadcrumb>
                            {this.breadcrumbList}
                        </Breadcrumb>
                    </div>
                    <span >
                        帮助&nbsp;
                        <ArrowRightOutlined className="size" />
                    </span>
                </div>
                <Solid_box />
            </div>

        )
    }
}