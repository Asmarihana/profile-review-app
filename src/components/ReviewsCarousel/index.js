import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    reviewIndex: 0,
  }

  renderActiveReview = props => {
    const {imgUrl, username, companyName, description} = props
    return (
      <div className="reviewContainer">
        <img src={imgUrl} alt={username} />
        <p className="username">{username}</p>
        <p className="companyName">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  previousReview = () => {
    const {reviewIndex} = this.state

    if (reviewIndex > 0) {
      this.setState(prevState => ({reviewIndex: prevState.reviewIndex - 1}))
    }
  }

  nextReview = () => {
    const {reviewIndex} = this.state
    const {reviewsList} = this.props

    if (reviewIndex < reviewsList.length - 1) {
      this.setState(prevState => ({reviewIndex: prevState.reviewIndex + 1}))
    }
  }

  render() {
    const {reviewIndex} = this.state
    const {reviewsList} = this.props
    const currentReview = reviewsList[reviewIndex]
    return (
      <div className="background">
        <h1>Reviews</h1>
        <div className="carousel-container">
          <button
            type="button"
            onClick={this.previousReview}
            testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          {this.renderActiveReview(currentReview)}
          <button type="button" onClick={this.nextReview} testid="rightArrow">
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
