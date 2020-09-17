
import  React,{createContext,Component} from 'react'
const context = createContext()
class Contexta extends Component{
  constructor(){
    super();
    this.state={
      a:15,
      b:20
    }
  }
  render(){
    return (
      <div>
        <context.Provider value={{...this.state,tit:this.tit}}>
              {this.props.children}
        </context.Provider>

      </div>
    )
  }
  tit =(num)=>{
    this.setState({
      a:num
    })
  }
}
let Conprovider =Contexta
let Conconsumer =context.Consumer
export {
  Conprovider,
  Conconsumer
}