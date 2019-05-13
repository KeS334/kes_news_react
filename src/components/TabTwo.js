import React, {Component} from 'react';
import {Link} from "react-router-dom";

class  TabTwo extends Component{
    render(){
        return(
            <div  className="mainPart grid">
                <div className="tab_head trans" ><Link to="/news-option"><p>В очереди</p></Link></div>
                <div className="tab_head act" ><p>Неназначеные</p></div>
                <div className="tab_main2">
                    <div className="calendar grid">
                        <div className="calTitleMonthLine">
                            <div className="bPrev"><p>&lt;</p></div>
                            <div className="calTitleMonth"><p>Март</p></div>
                            <div className="bNext"><p>&gt;</p></div>
                        </div>
                        <div className="calTitleWeekLine">
                            <div className="calTitleWeek">
                                <p>Пн</p>
                            </div>
                            <div className="calTitleWeek">
                                <p>Вт</p>
                            </div>
                            <div className="calTitleWeek">
                                <p>Ср</p>
                            </div>
                            <div className="calTitleWeek">
                                <p>Чт</p>
                            </div>
                            <div className="calTitleWeek">
                                <p>Пт</p>
                            </div>
                            <div className="calTitleWeek">
                                <p>Сб</p>
                            </div>
                            <div className="calTitleWeek">
                                <p>Нд</p>
                            </div>
                        </div>
                        <div className="calMain" onClick="fun3()">
                            <div className="calLine">
                                <div className="calDay">
                                    <p>25</p>
                                </div>
                                <div className="calDay">
                                    <p>26</p>
                                </div>
                                <div className="calDay">
                                    <p>27</p>
                                </div>
                                <div className="calDay">
                                    <p>28</p>
                                </div>
                                <div className="calDay lot">
                                    <p>1</p>
                                </div>
                                <div className="calDay lot">
                                    <p>2</p>
                                </div>
                                <div className="calDay">
                                    <p>3</p>
                                </div>
                            </div>
                            <div className="calLine">
                                <div className="calDay few">
                                    <p>4</p>
                                </div>
                                <div className="calDay">
                                    <p>5</p>
                                </div>
                                <div className="calDay few">
                                    <p>6</p>
                                </div>
                                <div className="calDay">
                                    <p>7</p>
                                </div>
                                <div className="calDay">
                                    <p>8</p>
                                </div>
                                <div className="calDay">
                                    <p>9</p>
                                </div>
                                <div className="calDay">
                                    <p>10</p>
                                </div>
                            </div>
                            <div className="calLine">
                                <div className="calDay lot">
                                    <p>11</p>
                                </div>
                                <div className="calDay few">
                                    <p>12</p>
                                </div>
                                <div className="calDay med">
                                    <p>13</p>
                                </div>
                                <div className="calDay med ">
                                    <p>14</p>
                                </div>
                                <div className="calDay few">
                                    <p>15</p>
                                </div>
                                <div className="calDay med">
                                    <p>16</p>
                                </div>
                                <div className="calDay few">
                                    <p>17</p>
                                </div>
                            </div>
                            <div className="calLine">
                                <div className="calDay">
                                    <p>18</p>
                                </div>
                                <div className="calDay">
                                    <p>19</p>
                                </div>
                                <div className="calDay lot">
                                    <p>20</p>
                                </div>
                                <div className="calDay lot">
                                    <p>21</p>
                                </div>
                                <div className="calDay lot">
                                    <p>22</p>
                                </div>
                                <div className="calDay">
                                    <p>23</p>
                                </div>
                                <div className="calDay">
                                    <p>24</p>
                                </div>
                            </div>
                            <div className="calLine">
                                <div className="calDay">
                                    <p>25</p>
                                </div>
                                <div className="calDay few">
                                    <p>26</p>
                                </div>
                                <div className="calDay med">
                                    <p>27</p>
                                </div>
                                <div className="calDay">
                                    <p>28</p>
                                </div>
                                <div className="calDay lot">
                                    <p>29</p>
                                </div>
                                <div className="calDay lot">
                                    <p>30</p>
                                </div>
                                <div className="calDay">
                                    <p>31</p>
                                </div>
                            </div>
                            <div className="calLine">
                                <div className="calDay">
                                    <p>1</p>
                                </div>
                                <div className="calDay few">
                                    <p>2</p>
                                </div>
                                <div className="calDay">
                                    <p>3</p>
                                </div>
                                <div className="calDay med">
                                    <p>4</p>
                                </div>
                                <div className="calDay med">
                                    <p>5</p>
                                </div>
                                <div className="calDay">
                                    <p>6</p>
                                </div>
                                <div className="calDay few">
                                    <p>7</p>
                                </div>
                            </div>
                        </div>
                        <div className="calLegRow">
                            <div className="calLeg">
                                <p>Нет</p>
                            </div>
                            <div className="calLeg few">
                                <p>Мало</p>
                            </div>
                            <div className="calLeg med">
                                <p>Достаточно</p>
                            </div>
                            <div className="calLeg lot">
                                <p>Много</p>
                            </div>
                        </div>

                    </div>
                    <div className="recordsList inactive">
                        <div className="listHead">
                            <div className="bBack" onClick="fun4()">
                                <p>&larr; Назад</p>
                            </div>
                            <div className="listData">
                                <p>9.03.2019</p>
                            </div>
                        </div>
                        <div className="listMain">
                            <div className="record">
                                <div className="recHead">
                                    <div className="recTitle">
                                        <p>Шок Дня!</p>
                                    </div>
                                    <div className="recButt">
                                        <div className="recButtEd">
                                            <p>&#9998;</p>
                                        </div>
                                        <div className="recButtDel">
                                            <p>&times;</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="recMain">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis dolore debitis aliquam eum,
                                        explicabo atque hic sint necessitatibus odit illo.</p>
                                </div>
                            </div>
                            <div className="record">
                                <div className="recHead">
                                    <div className="recTitle">
                                        <p>Шок Дня!</p>
                                    </div>
                                    <div className="recButt">
                                        <div className="recButtEd">
                                            <p>&#9998;</p>
                                        </div>
                                        <div className="recButtDel">
                                            <p>&times;</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="recMain">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis dolore debitis aliquam eum,
                                        explicabo atque hic sint necessitatibus odit illo.</p>
                                </div>
                            </div>
                            <div className="record">
                                <div className="recHead">
                                    <div className="recTitle">
                                        <p>Шок Дня!</p>
                                    </div>
                                    <div className="recButt">
                                        <div className="recButtEd">
                                            <p>&#9998;</p>
                                        </div>
                                        <div className="recButtDel">
                                            <p>&times;</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="recMain">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis dolore debitis aliquam eum,
                                        explicabo atque hic sint necessitatibus odit illo.</p>
                                </div>
                            </div>
                            <div className="record">
                                <div className="recHead">
                                    <div className="recTitle">
                                        <p>Шок Дня!</p>
                                    </div>
                                    <div className="recButt">
                                        <div className="recButtEd">
                                            <p>&#9998;</p>
                                        </div>
                                        <div className="recButtDel">
                                            <p>&times;</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="recMain">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis dolore debitis aliquam eum,
                                        explicabo atque hic sint necessitatibus odit illo.</p>
                                </div>
                            </div>
                            <div className="record">
                                <div className="recHead">
                                    <div className="recTitle">
                                        <p>Шок Дня!</p>
                                    </div>
                                    <div className="recButt">
                                        <div className="recButtEd">
                                            <p>&#9998;</p>
                                        </div>
                                        <div className="recButtDel">
                                            <p>&times;</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="recMain">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis dolore debitis aliquam eum,
                                        explicabo atque hic sint necessitatibus odit illo.</p>
                                </div>
                            </div>
                            <div className="record">
                                <div className="recHead">
                                    <div className="recTitle">
                                        <p>Шок Дня!</p>
                                    </div>
                                    <div className="recButt">
                                        <div className="recButtEd">
                                            <p>&#9998;</p>
                                        </div>
                                        <div className="recButtDel">
                                            <p>&times;</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="recMain">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis dolore debitis aliquam eum,
                                        explicabo atque hic sint necessitatibus odit illo.</p>
                                </div>
                            </div>
                            <div className="record">
                                <div className="recHead">
                                    <div className="recTitle">
                                        <p>Шок Дня!</p>
                                    </div>
                                    <div className="recButt">
                                        <div className="recButtEd">
                                            <p>&#9998;</p>
                                        </div>
                                        <div className="recButtDel">
                                            <p>&times;</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="recMain">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis dolore debitis aliquam eum,
                                        explicabo atque hic sint necessitatibus odit illo.</p>
                                </div>
                            </div>
                            <div className="record">
                                <div className="recHead">
                                    <div className="recTitle">
                                        <p>Шок Дня!</p>
                                    </div>
                                    <div className="recButt">
                                        <div className="recButtEd">
                                            <p>&#9998;</p>
                                        </div>
                                        <div className="recButtDel">
                                            <p>&times;</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="recMain">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis dolore debitis aliquam eum,
                                        explicabo atque hic sint necessitatibus odit illo.</p>
                                </div>
                            </div>
                            <div className="record">
                                <div className="recHead">
                                    <div className="recTitle">
                                        <p>Шок Дня!</p>
                                    </div>
                                    <div className="recButt">
                                        <div className="recButtEd">
                                            <p>&#9998;</p>
                                        </div>
                                        <div className="recButtDel">
                                            <p>&times;</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="recMain">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis dolore debitis aliquam eum,
                                        explicabo atque hic sint necessitatibus odit illo.</p>
                                </div>
                            </div>
                            <div className="record">
                                <div className="recHead">
                                    <div className="recTitle">
                                        <p>Шок Дня!</p>
                                    </div>
                                    <div className="recButt">
                                        <div className="recButtEd">
                                            <p>&#9998;</p>
                                        </div>
                                        <div className="recButtDel">
                                            <p>&times;</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="recMain">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis dolore debitis aliquam eum,
                                        explicabo atque hic sint necessitatibus odit illo.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default TabTwo;