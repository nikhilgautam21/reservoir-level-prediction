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
import {
  getReserviorData,
  getImageForRiver,
  getFiltersData,
  getPredicationImageForRiver,
} from "../../utils/imageHelper";

class ReserviorFilters extends React.Component {
  constructor(props) {
    const reserviorData = getReserviorData();
    const filtersData = getFiltersData();
    super(props);

    this.state = {
      options1: reserviorData,
      options2: filtersData,
      scrollToResult: false,
      reserviorData: {},
      showPredictBtn: false,
      showPrediction: false,
    };
  }

  componentDidMount() {}

  handleClick = () => {
    this.setState({ showPrediction: true, scrollToResult: true });
  };

  handleReserviorChange = (event, { value, text }) => {
    let reserviorImage;
    this.setState({ selectedReservoir: value });
    if (this.state.reserviorData.selectedConstraint) {
      reserviorImage = getImageForRiver(
        value,
        this.state.reserviorData.selectedConstraint
      );
    }
    value === "KRS"
      ? this.setState({ showPredictBtn: true })
      : this.setState({
          predictionImage: null,
          showPredictBtn: false,
          showPrediction: false,
          scrollToResult: false,
        });
    this.setState({
      reserviorData: {
        ...this.state.reserviorData,
        reserviorImage,
        reserviorName: event.target.textContent,
      },
    });
  };

  handlePrediction = (event, { value }) => {
    let predictionImage = null;
    if (this.state.selectedReservoir === "KRS") {
      predictionImage = getPredicationImageForRiver(
        this.state.selectedReservoir,
        value
      );
    }
    const reserviorImage = getImageForRiver(
      this.state.selectedReservoir,
      value
    );
    this.setState({
      reserviorData: {
        ...this.state.reserviorData,
        reserviorImage,
        predictionImage,
        showPrediction: false,
        selectedConstraint: value,
      },
    });
  };

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
              {this.state.selectedReservoir ? (
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
              ) : null}
            </div>
            {this.state.showPredictBtn && (
              <Button onClick={this.handleClick} primary>
                Predict next 90 days
              </Button>
            )}
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
