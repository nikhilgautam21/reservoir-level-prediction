import React from "react";
import {
  Container,
  Dropdown,
  Menu,
  Divider,
  Button,
  Segment,
} from "semantic-ui-react";
import ReserviorDetails from "../ReserviorDetails/ReserviorDetails";
import "./ReserviorFilters.css";
import {getImageForRiver, getPredictionImageForRiver} from '../../utils/imageHelper';

class ReserviorFilters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options1: [
        { key: 1, text: "Choice 1", value: 1 },
        { key: 2, text: "Choice 2", value: 2 },
        { key: 3, text: "Choice 3", value: 3 },
      ],
      options2: [
        { key: 1, text: "Choice 1", value: 1 },
        { key: 2, text: "Choice 2", value: 2 },
      ],
      scrollToResult: false,
      reserviorData:{},
      showPrediction:false
    };
  }

  componentDidMount() {}

  handleClick = () => {
    this.setState({showPrediction:true, scrollToResult:true})
  };

  handleReserviorChange = (event,{value,text}) =>{
    this.setState({selectedReservoir:value})
    const reserviorImage = getImageForRiver(value); 
    this.setState({reserviorData: {...this.state.reserviorData,reserviorImage, reserviorName: event.target.textContent}})
  }

  handlePrediction = (event,{value}) =>{
    this.setState({selectedConstraint:value})
    const predictionImage = getPredictionImageForRiver(this.state.selectedReservoir, value)
    this.setState({reserviorData:{...this.state.reserviorData, predictionImage, showPrediction:false}})
  }

  render() {
    return (
      <>
        <Segment>
          <div className="filter-container">
            <div className="filter row">
              <span>
                <b>Reservoir Name:{"    "}</b>
              </span>
              <Dropdown
                placeholder="Select an option"
                options={this.state.options1}
                selection
                onChange={this.handleReserviorChange}
                value={this.state.selectedReservoir}
              />
            </div>
            <div className="filter">
              {this.state.selectedReservoir ?
                <>
                 <span>
                 <b>Constraint:{"    "}</b>
               </span>
                <Dropdown
                placeholder="Select an option"
                options={this.state.options2}
                selection
                onChange={this.handlePrediction}
                value={this.state.selectedConstraint}
                />
                </>
                :null
              }
            
            </div>
            <Button onClick={this.handleClick} primary>
              Predict next 90 days
            </Button>
          </div>
        </Segment>
        <ReserviorDetails
          reserviorData={this.state.reserviorData}
          scrollToResult={this.state.scrollToResult}
          showPrediction={this.state.showPrediction}
        />
      </>
    );
  }
}

export default ReserviorFilters;
