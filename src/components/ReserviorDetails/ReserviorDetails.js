import React from "react";
import {
  Container,
  Dropdown,
  Menu,
  Grid,
  Segment,
  Image,
  Divider,
  Button,
} from "semantic-ui-react";
import "./ReserviorDetail.css";

class ReserviorDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollToResult: false
    };
    this.resultRef = React.createRef();
  }

  componentDidMount() {}

  UNSAFE_componentWillReceiveProps(nextProps){
    if(nextProps.scrollToResult) {
      setTimeout(()=>{
        this.scrollToResultImage()
      },1000)
    }
    // if(nextProps.showPrediction)this.setState({showPrediction:true})
  }

  scrollToResultImage = () =>{
    this.resultRef.current.scrollIntoView({behavior:"smooth"});
  }

  render() {
    const {reserviorImage, reserviorName, predictionImage} = this.props.reserviorData
    const {showPrediction} = this.props
    return (
      <>
        {reserviorImage
          ? <Segment className="section-images">
              <h3>Hydrological Model of {reserviorName}</h3>
              {reserviorImage 
                ? <Image src={reserviorImage} centered={true}/>
                : null
              } 
              </Segment>
          :null
        }
        {predictionImage && showPrediction
          ? <Segment className="section-images" >
              <h3 ref={this.resultRef} >Predictive Model of {reserviorName}</h3>
                <Image src={predictionImage} centered={true} />
            </Segment>
          : null  
        }
      </>
    );
  }
}

export default ReserviorDetails;
