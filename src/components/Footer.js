import React, { Component } from "react"

class Footer extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500)
    }
    render() {
        return (
            <div>
                {this.state.isLoading ?
                <h1>Loading...</h1> :
                <footer>This is the footer</footer>}
            </div>
            
        )
    }

}

export default Footer