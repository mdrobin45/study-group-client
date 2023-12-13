import { withRouter } from "react-router-dom";
const RouterTracker = ({ history }) => {
   console.log("history:", history);
   return (
      <div>
         <h2>Tracker</h2>
      </div>
   );
};

export default withRouter(RouterTracker);
