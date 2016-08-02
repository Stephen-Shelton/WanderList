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
          <Link to={ "lists/" + list.id }>
            <span className="pull-xs-right">{ list.categories }</span>
            <strong>{ list.title }</strong>
          </Link>
            <div className="pull-xs-right">{ list.author }</div>
            <span>Upvote: { list.upvote} &nbsp; </span>
            <span>Downvote: { list.downvote }</span>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/lists/new" className="btn btn-primary">
            Add a list
          </Link>
          <Link to='/login'>
            Log In
          </Link>
        </div>
        <h3>Lists</h3>
        <ul className="list-group">
          { this.renderLists() }
        </ul>
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
