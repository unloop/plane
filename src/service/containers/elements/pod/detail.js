//
// Last.Backend LLC CONFIDENTIAL
// __________________
//
// [2014] - [2017] Last.Backend LLC
// All Rights Reserved.
//
// NOTICE:  All information contained herein is, and remains
// the property of Last.Backend LLC and its suppliers,
// if any.  The intellectual and technical concepts contained
// herein are proprietary to Last.Backend LLC
// and its suppliers and may be covered by Russian Federation and Foreign Patents,
// patents in process, and are protected by trade secret or copyright law.
// Dissemination of this information or reproduction of this material
// is strictly forbidden unless prior written permission is obtained
// from Last.Backend LLC.
//
// import React from "react";


import React from "react";
import PodSpecInfo from "./../../../components/elements/pod/spec";
import PodSpecEditor from "./spec";

class PodDetailInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      edit: false
    }
  }

  handleEnableEditor = (e) => {
    e.stopPropagation();
    this.setState({edit: true});
  };

  handleDisableEditor = (e) => {
    e.stopPropagation();
    this.setState({edit: false});
  };

  render() {
    const {pod, spec} = this.props;
    return (
      <div>
        {
          (this.state.edit)
            ? <PodSpecEditor disableEditorHandler={this.handleDisableEditor} pod={pod}/>
            : <PodSpecInfo enableEditorHandler={this.handleEnableEditor} pod={pod} spec={spec} />
        }
      </div>
    );
  }
}

PodDetailInfo.propTypes = {
  pod: React.PropTypes.object.isRequired,
};

export default PodDetailInfo;

//
//
// const PodDetailContainer = (props) => {
//   const {pod} = props;
//
//   return (
//   <div>
//
//   </div>
//     // <div className="detail-info">
//     //   <div className="detail-info-header">Spec
//     //     <i className="fa fa-pencil pull-right cursor-pointer" aria-hidden="true"></i>
//     //   </div>
//     //   <Divider/>
//     //   <div className="detail-info-block">
//     //     <table className="table">
//     //       <tbody>
//     //       <tr>
//     //         <td>Name</td>
//     //         <td>{pod.meta.id}</td>
//     //       </tr>
//     //       <tr>
//     //         <td>Created</td>
//     //         <td><Timestamp time={pod.meta.created} format='date'/></td>
//     //       </tr>
//     //       </tbody>
//     //     </table>
//     //   </div>
//     //
//     //   <div className="detail-info-header">Resource settings</div>
//     //   <Divider/>
//     //   <div className="detail-info-block">
//     //     <div className="row">
//     //       <div className="col-xs-12">
//     //         <div className="row">
//     //           <div className="col-xs-2" style={{textAlign: "left", paddingTop: "20px"}}>Memory</div>
//     //           <div className="col-xs-6">
//     //             <Slider min={32} max={1024} step={32} value={1024}/>
//     //           </div>
//     //           <div className="col-xs-2 text-center" style={{paddingTop: "20px"}}>32 MB</div>
//     //           <div className="col-xs-2 text-center" style={{paddingTop: "20px"}}>{"$0.3125"}</div>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </div>
//     //
//     //   <div className="detail-info-header">Run settings</div>
//     //   <Divider/>
//     //   <div className="detail-info-block">
//     //     <div className="col-xs-12">
//     //       <TextField fullWidth={true} floatingLabelText="CMD" hintText="cmd"/>
//     //     </div>
//     //   </div>
//     //
//     //   <br/>
//     //
//     //   <div className="detail-info-block text-center">
//     //     <RaisedButton label="Save" primary={true}/>
//     //   </div>
//     // </div>
//   );
// };
//
// PodDetailContainer.propTypes = {
//   pod: PropTypes.object.isRequired,
//
// };
//
// export default PodDetailContainer;
//
