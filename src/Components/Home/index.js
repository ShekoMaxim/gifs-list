import React, { Component } from "react";

class Home extends Component {
 render() {
   return (
     <div>
       <h2>Task Details</h2>
         <ul>
             <li>Consume the Giphy Beta API to fetch animated gifs that match your search query.</li>
             <li>Create an interface with at least one input field to be used to search for gifs by keywords.</li>
             <li>Present the results in real time and update the interface as the user types his search query.</li>
             <li>Once the results are displayed allow the user to click on any particular gif to popup its details (can be a simple modal).</li>
             <li>On the gif details section show at least one version of the gif, source URL, content rating and import date.</li>
             <li>Make your code and UI as clean as possible.</li>
         </ul>
       <h2>Requirements</h2>
         <ul>
             <li>Please use ES6, Typescript or ES5. No CoffeeScript.</li>
             <li>You must create a SPA.</li>
             <li>You can use any version of Angular, React or Vue (alternatively any framework you are most comfortable with)</li>
             <li>Huge plus for not using jQuery</li>
             <li>You can include a package.json or other build tools and processors (Webpack, Babel, SASS tools, etc.).</li>
             <li>You can use any CSS framework or make your own styles.</li>
             <li>Bonus points for implementing infinite scroll.</li>
             <li>Please provide any install or runtime instructions in the readme.md, make sure we can actually run your project.</li>
             <li>Host solution on Github or any other web-based VCS</li>
         </ul>
     </div>
   );
 }
}

export default Home;