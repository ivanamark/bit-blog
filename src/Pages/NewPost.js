import React from 'react'
import { fetchNewPost } from "../service/ContentFetcher"

class NewPost extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            content: ""
        };
    }

    handleChange = (event) => {
        this.setState({ title: event.target.value.toUpperCase() });


    }
    handleChange1 = (event) => {
        this.setState({ content: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // alert('A name was submitted: ' + this.state.title, this.state.content);
        fetchNewPost({
            title: "sdfdsfsdf",
            body: "dsfsdfdsfsdff"
        })
            .then(json => window.location.href = "#/homepage")
    }

    handleCancel = (event) => {
        event.preventDefault();
        this.setState({
            title: "",
            content: ""
        })
    }



    render() {
        return (
            <div className="container">
                <h3 className="center">NEW POST</h3>
                <div className="row">
                    <form className="col s12" onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="input-field col s12" >
                                <textarea id="textarea" className="materialize-textarea" value={this.state.title} onChange={this.handleChange} placeholder='Title'></textarea>
                                <label htmlFor="title"></label>

                            </div>
                        </div>
                    </form>
                </div>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <textarea id="textarea1" className="materialize-textarea" value={this.state.content} onChange={this.handleChange1} placeholder='Content'></textarea>
                                <label htmlFor="textarea1"></label>
                            </div>
                        </div>
                    </form>
                </div>
                <a onClick={this.handleCancel} className="waves-effect waves-light btn-large">Cancel</a>
                <a onClick={this.handleSubmit} className="waves-effect waves-light btn-large">Save</a>



            </div>



        )



    }
}
export { NewPost }