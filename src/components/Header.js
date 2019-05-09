import React, {Component} from 'react';

class  Header extends Component{
    render(){
        return(
            <header className="grid">
            <div className="testGrid">
                <div className="b1">
                    <p>1</p>
                </div>
                <div className="b2">
                    <p>2</p>
                </div>

            </div>

            <div className="logo"><p>KesNews</p></div>
            <div className="number">
                <p>Тех. поддержка:</p>
                <p>+38-(096)-27-15-845 Петрович</p>
            </div>
            <div className="button grid"><p>Выход</p></div>

        </header>
        )
    }

}
export default Header;