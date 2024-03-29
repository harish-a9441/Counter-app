import React, { Component } from 'react';

class Counter extends Component{
    state = {
        count: 0,
        tags : ["tag1","tag2"]
    };

    handleIncrements = product =>{
        // console.log("Increment clicked",this);
        console.log(product);
        this.setState({count : this.state.count + 1});
    }

    render(){
        let classes = this.getBadgeClasses();
        return  ( 
                    <React.Fragment>
                        <span className={classes}>{this.formatCount()}</span>
                        <button 
                            onClick={() => this.handleIncrements({id:1})} 
                            className="btn btn-secondary btn-sm">"Increment"</button>
                        {/* <ul> */}
                            {this.state.tags.map(tag => <li key={tag}>{tag}</li>)} 

                        {/* </ul> */}
                        
                        {/* {this.state.tags.length === 2 && "Please add some tags"} */}
                    </React.Fragment>
        );
    }


    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}

export default Counter;

