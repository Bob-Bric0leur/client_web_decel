import { useState } from "react";
import "./lab.css";
export const WebSocket1 = new WebSocket('ws://YOUR websocketurl');
WebSocket1.onmessage
function GPIO_IN() {

    const [gpio, setGPIO] = useState([]);
    
    return (
        <div class="cat_container">
            <p class="cat_title">GPIO IN</p>
            <table>
                <tr>
                    <td>gpio 1 : </td>
                    <td>
                        <label class="switch">
                            <input type="checkbox" />
                            <span></span>
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>gpio 2 : </td>
                    <td class="gpio_off"></td>
                </tr>
                <tr>
                    <td>gpio 3 : </td>
                    <td >5Hz</td>
                </tr>
            </table>    
        </div>
    );
}

export default GPIO_IN;