// import React, {Component} from 'react';
// import Card from './Card'
// import './car.css'

// const renderCardNumber = number => {
//     number = number.toString()
//     let resultStr = ''
//     for(let i =0; i < number.length; i += 4) {
//         resultStr += number.slice(i, i + 4) + ' '
//     }
//     return resultStr.trim()
// }

// class Car extends Component {
//     constructor(props){
//         super(props)
//         this.state={
//             name:'',
//             pasword:'',
//             code:''
//         }
//     }
    
//     passwordChange = (e) => {
//         this.setState({
//             pasword:renderCardNumber (e.target.value)
//         })
//     }
//     render(){
//         return(
//             <div className="container">
//                 <div className="row1">
//                     <Card   
//                     pasword="1232 5647 123456 234"
//                     code="15/11"
//                     name="azertyu"
//                     />
//                 </div>
//                 <div className="row2">
//                     <input type='number' onChange={this.passwordChange}/><br/>
//                     {this.state.pasword}<br/>
//                     <input type='text' onChange={this.nameChange}/><br/>
//                     <br/>
//                     <input type='number' onChange={this.codeChange}/><br/>
//                     <br/>
//                 </div>
//             </div>
//         )
//     }
// }
// export default Car;
