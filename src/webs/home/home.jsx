import React, { Component } from "react"
import { Button } from "antd";
import "./home.less"
// import store from '../../store'
// import actions from "../../redux/action"

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    add = (val,k)=>{
        this.setState({
            name:val,
            k
        })
    }
    del = ()=>{
        console.log(this.state,this)
    }

    render() {
        return (
            <div style={{textAlign:'center',marginTop:50}}>
                <Button type="primary" onClick={this.add.bind(this,542123454,3365)} style={{marginRight:30}}>存入数据</Button>
                <Button type="primary" onClick={this.del}>显示</Button>
            </div>
        )
    }
}