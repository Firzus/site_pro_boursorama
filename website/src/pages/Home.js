import Footer from "../component/Footer";
import Navigation from "../component/Navigation";
import { Component } from "react";

class FAQ extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div className="home" >
              <Navigation />
              <Footer />
                <h1>Home</h1>
            </div>
        )
    }
}

export default FAQ;