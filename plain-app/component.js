/**
 * Created by lenny on 9/11/2017.
 */

class StoryBox extends React.Component {
    render() {
        const topicsList = ['HTML', 'JS', 'CSS'];

        const now = new Date();
        return (
            <div>
                <div>Story Box</div>
                <hr/>
                <div>
                    <h3>Dates</h3>
                    <p className="lead">
                        Current time: {now.toTimeString()}
                    </p>
                </div>
                <hr/>
                <div>
                    <h4>display array using JS native map function (like ng-repeat)</h4>
                    <ul>
                        {topicsList.map(topic => <li>{topic}</li> )}
                    </ul>
                </div>
            </div>

        );
    }
}

ReactDOM.render(
    <StoryBox />, document.getElementById('story-app')
);


// --- TRY MULTIPLE RENDER? ---

// // displaying time
// class DateBox extends React.Component {
//     render() {
//         const now = new Date();
//         return (
//             <div>
//                 <h3>Dates</h3>
//                 <p className="lead">
//                     Current time: {now.toTimeString()}
//                 </p>
//             </div>
//         );
//
//         // display array using JS native map function (like ng-repeat)
//         const topicsList = ['HTML', 'JS', 'CSS'];
//
//         return (
//             <div>
//                 <ul>
//                     {topicsList.map(topic => <li>{topic}</li> )}
//                 </ul>
//             </div>
//         );
//     }
// }
//
// // display array using JS native map function (like ng-repeat)
// class ListBox extends React.Component {
//     render() {
//         const topicsList = ['HTML', 'JS', 'CSS'];
//
//         return (
//           <div>
//               <ul>
//                   {topicsList.map(topic => <li>{topic}</li> )}
//               </ul>
//           </div>
//         );
//     }
// }


