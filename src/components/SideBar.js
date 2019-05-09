import React, {Component} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import {bindActionCreators} from "redux";
import {connect} from  "react-redux";
import {select} from "../action";

const API = 'http://localhost:3000';

class  SideBar extends Component{


    constructor(props){
        super(props);


        this.state = {
            news: [],
            select: ''
        }
    }

    componentDidMount() {
        axios.get(`${API}/news.json`)
            .then(
                response => {
                    //this.props.loadProducts(response.data.products);

                    this.setState({
                        news: response.data.news
                    })
                }
            )
    }

    render(){
        return(
            <div className="list">
                {this.state.news.map(item =><p  style={{
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    height: "24px"}}
                    // onClick={()=> this.props.select(item)} key={item.id}
                    onClick={() => { this.props.updateData(item)}}
                    >
                    {item.name}</p>)}
                {/*{console.log('products', this.state.news)}*/}

                {/*{this.props.news.map((news)=>*/}
                {/*<p onClick={()=> this.props.select(news)} key={news.id}>{news.name}</p>*/}
            {/*)}*/}

            </div>
        );
    }
}


export default SideBar;
