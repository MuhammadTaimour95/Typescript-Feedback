import React from 'react';
import './App.css';
import  Feedback from './component/Feedback'


type FeedbackProps = {
  Message?: string,
  IsSuccessfullProp ?: boolean 
  
}
interface Props {
  Message?: string,
  IsSuccessfullProp ?: boolean 
}




export class App extends React.Component<{IsSuccessfullProp ?: boolean}, {IsSuccessfull : boolean} > {

  constructor(props: any) {
    super(props);
    this.state = {
      IsSuccessfull: true
    };

    this.toggleSuccess = this.toggleSuccess.bind(this);
  }
  
  toggleSuccess() {
    if(this.state.IsSuccessfull === true){
    this.setState({ IsSuccessfull: false });
    }
    else{
      this.setState({ IsSuccessfull: true });
    }

  }
  

  render(){
  return (
    <div className="App">
      <Feedback  IsSuccessfullProp={this.state.IsSuccessfull} /> 
      <button onClick={this.toggleSuccess}>Toggle Screen</button>
    </div>
  );
  }
}

export default App;
