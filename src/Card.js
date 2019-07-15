import React, {Component} from 'react';
import './Card.css';

const renderCardNumber = number => {
    // if (number.length <= 16){
    number = number.toString()
    let resultStr = ''
    for(let i =0; i < number.length; i += 4) {
        resultStr += number.slice(i, i + 4) + ' ' 
    }
    return resultStr.trim()
    // }
    // else {
    //     return undefined
    // }
}
const test = number => {
    number = number.toString()
    return number.slice(0,2) + '/' + number.slice(2)
}

class Card extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'',
            pasword:'',
            code:''
        }
    }
    
    passwordChange = (e) => {
        const regex = /^\d{1,16}$/
        if (regex.test(e.target.value)){
        this.setState({
            pasword:renderCardNumber (e.target.value)
        })
    }else if(e.target.value==''){
        this.setState({
            pasword:''
        })
    }
    }
    codeChange = (e) => {
        const regex = /\d/
        if (regex.test(e.target.value)){
        this.setState({
            code:test(e.target.value)
        })

    } else if(e.target.value==''){
        this.setState({
            code:''
        })
    }
    }
    nameChange = (e) => {
        this.setState({
            name: e.target.value.toUpperCase()
        })
    }
    
    render(){
    return(       
        <div className="container">
            <div className="card">
                <div className="exemple">
                    <h1 className="title">
                        credit card
                    </h1>
                </div>
                <div className="image">
                    <img className="puce" src="https://scontent.ftun11-1.fna.fbcdn.net/v/t1.15752-9/66292816_396966851162963_7595392145326866432_n.png?_nc_cat=101&_nc_oc=AQk3usfIaOSBQmi_9MdDprlL9A2twxHe4JhCoWqswAV46hub5LlWo8E9_APtJechr7w&_nc_ht=scontent.ftun11-1.fna&oh=a337e7bef39f5500ed2c47b89ca1eb87&oe=5D7F1698"/>
                </div>
                <div className="container">
                <div className="row">
                    <div className="num">
                        <p className="chifer">{this.state.pasword}</p>
                    </div>
                    <div className="sou-num">
                        <p className="paragraph">5422</p>
                        <p className="paragraph">{this.state.code}</p>
                    </div>
                    <div className="fin">
                        <p className="parag">{this.state.name}</p>
                    </div>
                </div>
                <div className="mag">
                    <img className="mag-im" src="https://scontent.ftun11-1.fna.fbcdn.net/v/t1.15752-9/66191708_342601773349256_6531638778874822656_n.png?_nc_cat=104&_nc_oc=AQlDjo-mL95JEnAWEQ1VESi_WE9XowjVxS-MoZThaBGV51a0T3mdXdY0GiLihJaG_sk&_nc_ht=scontent.ftun11-1.fna&oh=74b12d16b16fd72b143e7694a4b408e9&oe=5DB9F188" />
                </div>
                </div>                 
            </div>
            <div className="row2">
                        <input type='TEXT' maxLength='16' onChange={this.passwordChange}/><br/>
                        <br/>
                        <input type='text' maxLength="12" onChange={this.nameChange}/><br/>
                        <br/>
                        <input type='text' maxLength="4" onChange={this.codeChange}/><br/>
                        <br/>
            </div>
        </div>           
    )
    }
}
export default Card