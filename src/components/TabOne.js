import React, {Component} from 'react';
import {Link} from "react-router-dom";
import SideBar from "./SideBar";
import {connect} from "react-redux";


class  TabOne extends Component{
    constructor(props){
        super(props);


        this.state = {
            news: [],
            select: {}

        }
    }


    updateData = (item) => {
        this.setState({ select: item })
    }



    render(){
        console.log('news_name', this.props.news);
        return(
            <div className="mainPart grid">
                <div className="tab_head act"><p>В очереди</p></div>
                <div className="tab_head trans"><Link to="/calendar"><p>Неназначеные</p></Link></div>
                <div className="tab_main1 grid">

                    <SideBar updateData={this.updateData}/>
                    {console.log("selected_news", this.state.select)}
                    <div className="news_head"><input type="text" placeholder="Заголовок новостей" value={this.state.select.name}/></div>
                    <div className="news_tags"><input type="text" placeholder="#Теги" value={this.state.select.tags}/></div>
                    <div className="news_mainText">
                        <textarea cols="5" rows="5" wrap="soft" placeholder="Описание" value={this.state.select.description}></textarea></div>
                    <div className="news_settings">
                        <p>Раздел:</p>
                        <select value={this.state.select.categories} onChange={()=>this.valueSelect()}>
                            <option>Раздел 1</option>
                            <option>Раздел 2</option>
                            <option>Раздел 3</option>
                            <option>Раздел 4</option>
                        </select>
                        <p>Дата Создания:</p> <input type="date" value={this.state.select.dateCreate}/>
                        <p>Дата Публикации:</p><input type="date" value={this.state.select.datePublish}/>
                        <p>Дата Удаления:</p><input type="date" value={this.state.select.datePublish}/>

                    </div>
                    <div className="button"><p>Сохранить</p></div>
                </div>
            </div>
        )
    }
    valueSelect(){
        console.log("value");
    }

}
export default TabOne;