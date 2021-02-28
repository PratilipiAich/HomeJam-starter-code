import React, { Component } from 'react'
import ShowCard from './ShowCard'
import ReviewCard from './ReviewCard'
import '../styles/Shows.css'

class Shows extends Component {
    render() {
        return (
            <div>
            <div className="text-container1">
                <span><p className="heading1">Upcoming Shows</p></span>
                <a className="view-all" href="#">View All</a>
                
            </div>
            <div className="card-container">
                <ShowCard />
            </div>
            <div className="text-container1">
                <span><p className="heading1">Reviews</p></span>
                <a className="view-all" href="#">View All</a>
            </div>
            <div className="card-container">
                <ReviewCard />
            </div>
            </div>
        )
    }
}
export default Shows