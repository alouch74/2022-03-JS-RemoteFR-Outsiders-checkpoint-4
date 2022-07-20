import React from 'react';
import "./RoyalAssets.css";

function RoyalAssets(){
   return (
   <>
      <h3>Kingdom of Colchis</h3>
      <div className="contenu">
    <h2>The Kingdom's Royal Assets </h2>
      <table id="assets">
        <tr>
          <th>asset name</th>
          <th>number</th>
          <th>worth</th>
        </tr>
        <tr>
          <td>stables</td>
          <td>42</td>
          <td>6 000 000 lari</td>
        </tr>
        <tr>
          <td>castles</td>
          <td>4</td>
          <td>24 000 000 lari</td>
        </tr>
        <tr>
          <td>guards</td>
          <td>10 000</td>
          <td>1 000 000 lari</td>
        </tr>
        <tr>
          <td>wagons</td>
          <td>18</td>
          <td>4 000 lari</td>
        </tr>
        <tr>
          <td>livestok</td>
          <td>51 942</td>
          <td>4 000 000 lari</td>
        </tr>
        <tr>
          <td>armor</td>
          <td>997000</td>
          <td>11 000 000 lari</td>
        </tr>
        <tr>
          <td>canons</td>
          <td>99</td>
          <td>110 000 000 lari</td>
        </tr>
       
      </table>
  </div>
   </>
   )
}

export default RoyalAssets;