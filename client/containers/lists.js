import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLists } from '../actions/index';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';


class Lists extends Component {
  componentWillMount() {
    this.props.fetchLists();
  }


  renderLists(){
    return this.props.lists.map((list) =>{
      return (
        <li className="list-group-item" key={ list.id }>
          <div className="row">


            <div className="col-md-1">
              <div className="fa fa-angle-up"></div>
              <div className="text-justify">{ list.upvote - list.downvote}</div>
              <div className="fa fa-angle-down"></div>
            </div>

            <div className="col-md-3">
              <img className="img-thumbnail" src={list.content[0].img} />
            </div>

            <div className="col-md-3">
              <Link to={ "lists/" + list.id }>
                <strong>{ list.title }</strong>
              </Link>
              <div>{ list.author }</div>
            </div>  
          </div>  
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-8">
          
          </div>
          <div className="col-md-2">
          <Link to="/lists/new" className="btn btn-primary">
            Add a list
          </Link>
          </div>
          <div className="col-md-2">
            <Link to='/login'>
            Log In
          </Link>
          </div>

        </div>

        <div className="row">
          <div className="col-md-10">
            <h3>Lists</h3>
            <ul className="list-group">
              { this.renderLists() }
            </ul>
          </div>
        </div>

      </div>
    );
  }

}

function mapStateToProps(state){
  return {
    lists: state.lists.all
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchLists }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
