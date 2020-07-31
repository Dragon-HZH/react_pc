import React, { Component } from "react"
import "./footer.less"

export default class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }


    render() {
        return (
            <div className="webFooter">
                <footer>
                    <div>监制单位：******电子税务管理中心&nbsp;&nbsp;&nbsp;研发单位： **计算机软件与系统有限公司</div>
                    <div>支持火狐、谷歌、IE9以上版本浏览器&nbsp;&nbsp;&nbsp;建议分辨率&nbsp;&nbsp;1280*768及以上</div>
                </footer>
            </div>
        )
    }
}