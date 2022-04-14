import { Component } from "react";

class NotFound extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div className="home" >
                <h1>Erreur 404</h1>
            </div>
        )
    }
}

export default NotFound;