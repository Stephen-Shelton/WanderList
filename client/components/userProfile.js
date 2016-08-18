import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserInfo, filterLists } from '../actions/index';
import { bindActionCreators } from 'redux';
import NavBar from './nav';
import List from '../containers/lists';


export class UserProfile extends Component {
  constructor(props){
    super(props);
    this.renderList = this.renderList.bind(this);
  }

  //PASS IN USER ID FROM OTHER USERS IN URL TO GET THEIR PROFILE
  componentWillMount(){
    this.props.fetchUserInfo(window.location.pathname.split('/')[2]);
  }

  renderList() {
    return this.props.list.map((list, i) => <List {...this.props}
      info={this.props.info}
      votes={list.upvote - list.downvote}
      upLists={this.props.upLists}
      downLists={this.props.downLists}
      favoriteLists={this.props.favoriteLists}
      key={i}
      i={i}
      list={list} />);
  }

  render(){
    const { list, info, upLists, downLists } = this.props;
    if(!upLists) {
      return (<div><img height="100%" src="../loading.gif" alt="loading" /></div>);
    }
    return(
      <div>
        <NavBar />
        <img src={info.photo} alt="Profile Picture" />
        <h3>{info.username}</h3>
        <h3>{info.email}</h3>
        <button className="main_tabs" onClick={()=>this.props.filterLists(upLists)}>Upvoted Lists</button>
        <button className="main_tabs" onClick={()=>this.props.filterLists(downLists)}>Downvoted Lists</button>

        <ul>
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.lists.all,
    info: state.lists.info,
    upLists: state.lists.upvotedLists,
    downLists: state.lists.downvotedLists,
    favoriteLists: state.lists.favoriteLists,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUserInfo, filterLists }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
