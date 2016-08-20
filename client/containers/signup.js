// import React, {Component, PropTypes} from 'react';
// import {reduxForm} from 'redux-form';
// import {userCreate} from '../actions/index';
// import {Link} from 'react-router';
//
// // this.state = {showModal: false}
// // OurModal.context = this;
// // this.close = this.close.bind(this);
// // this.open = this.open.bind(this);
// // }
// //
// // close() {
// // OurModal.context.setState({'showModal': false});
// // }
//
// export class Signup extends Component {
//     constructor(props){
//      super(props);
//      Login.context = this.props;
//      this.socialLogin = this.socialLogin.bind(this);
//      this.emailSignIn = this.emailSignIn.bind(this);
//      this.provider = null;
//      this.state = {showModal: false}
//      OurModal.context = this;
//      this.close = this.close.bind(this);
//      this.open = this.open.bind(this);
//    }
//    static contextTypes = {
//      router: PropTypes.object
//    };
//
//   onSubmit(props) {
//     var displayName = this.props.values.displayName;
//     var email = this.props.values.username;
//     var password = this.props.values.password;
//     var photoURL = this.props.values.photoURL;
//     firebase.auth().createUserWithEmailAndPassword(email, password)
//       .then(function() {
//         var user = firebase.auth().currentUser;
//         user.updateProfile({
//           displayName: displayName,
//           photoURL: photoURL
//         })
//       })
//       .catch(function(error) {
//         alert('Failed to sign up. ' + error.message);
//       });
//   }
//
//   render() {
//     const {fields: {username, password, displayName, photoURL}, handleSubmit} = this.props;
//     return (
//       <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
//         <h2>Signup</h2>
//         <div>
//           <label>Username</label>
//           <input type="text" placeholder="Enter Your Email" {...username}/>
//         </div>
//         <div>
//           <label>Password</label>
//           <input type="password" placeholder="Enter Your Password" {...password}/>
//         </div>
//         <div>
//           <label>Your Name</label>
//           <input type="text" placeholder="Enter Your Name" {...displayName}/>
//         </div>
//         <div>
//           <label>Your Photo</label>
//           <input type="text" placeholder="Enter Your Photo URL" {...photoURL}/>
//         </div>
//         <button type="submit" className="btn btn-primary">Sign Up</button>
//         <Link to="/" className="btn btn-error">
//           Cancel
//         </Link>
//       </form>
//     );
//   }
// }
//
// export default reduxForm({
//   form: 'signupForm',
//   fields: ['username', 'password', 'displayName', 'photoURL']
// }, null, {userCreate})(Signup);
