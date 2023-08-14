/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 36.0, "minX": 0.0, "maxY": 5779.0, "series": [{"data": [[0.0, 36.0], [0.1, 37.0], [0.2, 37.0], [0.3, 37.0], [0.4, 37.0], [0.5, 38.0], [0.6, 38.0], [0.7, 38.0], [0.8, 38.0], [0.9, 38.0], [1.0, 38.0], [1.1, 38.0], [1.2, 38.0], [1.3, 38.0], [1.4, 38.0], [1.5, 38.0], [1.6, 38.0], [1.7, 38.0], [1.8, 38.0], [1.9, 39.0], [2.0, 39.0], [2.1, 39.0], [2.2, 39.0], [2.3, 39.0], [2.4, 39.0], [2.5, 39.0], [2.6, 39.0], [2.7, 39.0], [2.8, 39.0], [2.9, 39.0], [3.0, 39.0], [3.1, 39.0], [3.2, 39.0], [3.3, 39.0], [3.4, 39.0], [3.5, 39.0], [3.6, 39.0], [3.7, 39.0], [3.8, 39.0], [3.9, 39.0], [4.0, 39.0], [4.1, 39.0], [4.2, 39.0], [4.3, 39.0], [4.4, 40.0], [4.5, 40.0], [4.6, 40.0], [4.7, 40.0], [4.8, 40.0], [4.9, 40.0], [5.0, 40.0], [5.1, 40.0], [5.2, 40.0], [5.3, 40.0], [5.4, 40.0], [5.5, 40.0], [5.6, 40.0], [5.7, 40.0], [5.8, 40.0], [5.9, 40.0], [6.0, 40.0], [6.1, 40.0], [6.2, 40.0], [6.3, 40.0], [6.4, 40.0], [6.5, 40.0], [6.6, 40.0], [6.7, 40.0], [6.8, 40.0], [6.9, 40.0], [7.0, 40.0], [7.1, 40.0], [7.2, 40.0], [7.3, 40.0], [7.4, 40.0], [7.5, 41.0], [7.6, 41.0], [7.7, 41.0], [7.8, 41.0], [7.9, 41.0], [8.0, 41.0], [8.1, 41.0], [8.2, 41.0], [8.3, 41.0], [8.4, 41.0], [8.5, 41.0], [8.6, 41.0], [8.7, 41.0], [8.8, 41.0], [8.9, 41.0], [9.0, 41.0], [9.1, 41.0], [9.2, 41.0], [9.3, 41.0], [9.4, 41.0], [9.5, 41.0], [9.6, 41.0], [9.7, 41.0], [9.8, 41.0], [9.9, 41.0], [10.0, 41.0], [10.1, 41.0], [10.2, 41.0], [10.3, 41.0], [10.4, 41.0], [10.5, 41.0], [10.6, 41.0], [10.7, 42.0], [10.8, 42.0], [10.9, 42.0], [11.0, 42.0], [11.1, 42.0], [11.2, 42.0], [11.3, 42.0], [11.4, 42.0], [11.5, 42.0], [11.6, 42.0], [11.7, 42.0], [11.8, 42.0], [11.9, 42.0], [12.0, 42.0], [12.1, 42.0], [12.2, 42.0], [12.3, 42.0], [12.4, 42.0], [12.5, 42.0], [12.6, 42.0], [12.7, 42.0], [12.8, 42.0], [12.9, 42.0], [13.0, 42.0], [13.1, 42.0], [13.2, 42.0], [13.3, 42.0], [13.4, 42.0], [13.5, 42.0], [13.6, 42.0], [13.7, 42.0], [13.8, 42.0], [13.9, 43.0], [14.0, 43.0], [14.1, 43.0], [14.2, 43.0], [14.3, 43.0], [14.4, 43.0], [14.5, 43.0], [14.6, 43.0], [14.7, 43.0], [14.8, 43.0], [14.9, 43.0], [15.0, 43.0], [15.1, 43.0], [15.2, 43.0], [15.3, 43.0], [15.4, 43.0], [15.5, 43.0], [15.6, 43.0], [15.7, 43.0], [15.8, 43.0], [15.9, 43.0], [16.0, 43.0], [16.1, 43.0], [16.2, 43.0], [16.3, 43.0], [16.4, 43.0], [16.5, 43.0], [16.6, 43.0], [16.7, 43.0], [16.8, 44.0], [16.9, 44.0], [17.0, 44.0], [17.1, 44.0], [17.2, 44.0], [17.3, 44.0], [17.4, 44.0], [17.5, 44.0], [17.6, 44.0], [17.7, 44.0], [17.8, 44.0], [17.9, 44.0], [18.0, 44.0], [18.1, 44.0], [18.2, 44.0], [18.3, 44.0], [18.4, 44.0], [18.5, 44.0], [18.6, 44.0], [18.7, 44.0], [18.8, 44.0], [18.9, 44.0], [19.0, 44.0], [19.1, 44.0], [19.2, 44.0], [19.3, 44.0], [19.4, 45.0], [19.5, 45.0], [19.6, 45.0], [19.7, 45.0], [19.8, 45.0], [19.9, 45.0], [20.0, 45.0], [20.1, 45.0], [20.2, 45.0], [20.3, 45.0], [20.4, 45.0], [20.5, 45.0], [20.6, 45.0], [20.7, 45.0], [20.8, 45.0], [20.9, 45.0], [21.0, 45.0], [21.1, 45.0], [21.2, 45.0], [21.3, 45.0], [21.4, 45.0], [21.5, 45.0], [21.6, 45.0], [21.7, 45.0], [21.8, 45.0], [21.9, 45.0], [22.0, 45.0], [22.1, 45.0], [22.2, 45.0], [22.3, 46.0], [22.4, 46.0], [22.5, 46.0], [22.6, 46.0], [22.7, 46.0], [22.8, 46.0], [22.9, 46.0], [23.0, 46.0], [23.1, 46.0], [23.2, 46.0], [23.3, 46.0], [23.4, 46.0], [23.5, 46.0], [23.6, 46.0], [23.7, 46.0], [23.8, 46.0], [23.9, 46.0], [24.0, 46.0], [24.1, 46.0], [24.2, 46.0], [24.3, 46.0], [24.4, 46.0], [24.5, 46.0], [24.6, 46.0], [24.7, 46.0], [24.8, 46.0], [24.9, 46.0], [25.0, 46.0], [25.1, 46.0], [25.2, 46.0], [25.3, 46.0], [25.4, 46.0], [25.5, 46.0], [25.6, 46.0], [25.7, 46.0], [25.8, 47.0], [25.9, 47.0], [26.0, 47.0], [26.1, 47.0], [26.2, 47.0], [26.3, 47.0], [26.4, 47.0], [26.5, 47.0], [26.6, 47.0], [26.7, 47.0], [26.8, 47.0], [26.9, 47.0], [27.0, 47.0], [27.1, 47.0], [27.2, 47.0], [27.3, 47.0], [27.4, 47.0], [27.5, 47.0], [27.6, 47.0], [27.7, 47.0], [27.8, 47.0], [27.9, 47.0], [28.0, 47.0], [28.1, 47.0], [28.2, 47.0], [28.3, 47.0], [28.4, 47.0], [28.5, 47.0], [28.6, 47.0], [28.7, 47.0], [28.8, 47.0], [28.9, 47.0], [29.0, 47.0], [29.1, 47.0], [29.2, 48.0], [29.3, 48.0], [29.4, 48.0], [29.5, 48.0], [29.6, 48.0], [29.7, 48.0], [29.8, 48.0], [29.9, 48.0], [30.0, 48.0], [30.1, 48.0], [30.2, 48.0], [30.3, 48.0], [30.4, 48.0], [30.5, 48.0], [30.6, 48.0], [30.7, 48.0], [30.8, 48.0], [30.9, 48.0], [31.0, 48.0], [31.1, 48.0], [31.2, 48.0], [31.3, 48.0], [31.4, 48.0], [31.5, 48.0], [31.6, 48.0], [31.7, 48.0], [31.8, 48.0], [31.9, 48.0], [32.0, 48.0], [32.1, 48.0], [32.2, 49.0], [32.3, 49.0], [32.4, 49.0], [32.5, 49.0], [32.6, 49.0], [32.7, 49.0], [32.8, 49.0], [32.9, 49.0], [33.0, 49.0], [33.1, 49.0], [33.2, 49.0], [33.3, 49.0], [33.4, 49.0], [33.5, 49.0], [33.6, 49.0], [33.7, 49.0], [33.8, 49.0], [33.9, 49.0], [34.0, 49.0], [34.1, 49.0], [34.2, 49.0], [34.3, 49.0], [34.4, 49.0], [34.5, 49.0], [34.6, 49.0], [34.7, 49.0], [34.8, 49.0], [34.9, 49.0], [35.0, 49.0], [35.1, 50.0], [35.2, 50.0], [35.3, 50.0], [35.4, 50.0], [35.5, 50.0], [35.6, 50.0], [35.7, 50.0], [35.8, 50.0], [35.9, 50.0], [36.0, 50.0], [36.1, 50.0], [36.2, 50.0], [36.3, 50.0], [36.4, 50.0], [36.5, 50.0], [36.6, 50.0], [36.7, 50.0], [36.8, 50.0], [36.9, 50.0], [37.0, 50.0], [37.1, 50.0], [37.2, 50.0], [37.3, 50.0], [37.4, 50.0], [37.5, 50.0], [37.6, 50.0], [37.7, 50.0], [37.8, 50.0], [37.9, 51.0], [38.0, 51.0], [38.1, 51.0], [38.2, 51.0], [38.3, 51.0], [38.4, 51.0], [38.5, 51.0], [38.6, 51.0], [38.7, 51.0], [38.8, 51.0], [38.9, 51.0], [39.0, 51.0], [39.1, 51.0], [39.2, 51.0], [39.3, 51.0], [39.4, 51.0], [39.5, 51.0], [39.6, 51.0], [39.7, 51.0], [39.8, 51.0], [39.9, 51.0], [40.0, 51.0], [40.1, 51.0], [40.2, 51.0], [40.3, 51.0], [40.4, 51.0], [40.5, 52.0], [40.6, 52.0], [40.7, 52.0], [40.8, 52.0], [40.9, 52.0], [41.0, 52.0], [41.1, 52.0], [41.2, 52.0], [41.3, 52.0], [41.4, 52.0], [41.5, 52.0], [41.6, 52.0], [41.7, 52.0], [41.8, 52.0], [41.9, 52.0], [42.0, 52.0], [42.1, 52.0], [42.2, 52.0], [42.3, 52.0], [42.4, 52.0], [42.5, 52.0], [42.6, 53.0], [42.7, 53.0], [42.8, 53.0], [42.9, 53.0], [43.0, 53.0], [43.1, 53.0], [43.2, 53.0], [43.3, 53.0], [43.4, 53.0], [43.5, 53.0], [43.6, 53.0], [43.7, 53.0], [43.8, 53.0], [43.9, 53.0], [44.0, 53.0], [44.1, 53.0], [44.2, 53.0], [44.3, 53.0], [44.4, 53.0], [44.5, 53.0], [44.6, 54.0], [44.7, 54.0], [44.8, 54.0], [44.9, 54.0], [45.0, 54.0], [45.1, 54.0], [45.2, 54.0], [45.3, 54.0], [45.4, 54.0], [45.5, 54.0], [45.6, 54.0], [45.7, 54.0], [45.8, 54.0], [45.9, 54.0], [46.0, 54.0], [46.1, 54.0], [46.2, 54.0], [46.3, 55.0], [46.4, 55.0], [46.5, 55.0], [46.6, 55.0], [46.7, 55.0], [46.8, 55.0], [46.9, 55.0], [47.0, 55.0], [47.1, 55.0], [47.2, 55.0], [47.3, 55.0], [47.4, 55.0], [47.5, 55.0], [47.6, 55.0], [47.7, 55.0], [47.8, 55.0], [47.9, 56.0], [48.0, 56.0], [48.1, 56.0], [48.2, 56.0], [48.3, 56.0], [48.4, 56.0], [48.5, 56.0], [48.6, 56.0], [48.7, 56.0], [48.8, 56.0], [48.9, 56.0], [49.0, 56.0], [49.1, 56.0], [49.2, 56.0], [49.3, 57.0], [49.4, 57.0], [49.5, 57.0], [49.6, 57.0], [49.7, 57.0], [49.8, 57.0], [49.9, 57.0], [50.0, 57.0], [50.1, 57.0], [50.2, 57.0], [50.3, 57.0], [50.4, 57.0], [50.5, 57.0], [50.6, 57.0], [50.7, 57.0], [50.8, 57.0], [50.9, 57.0], [51.0, 58.0], [51.1, 58.0], [51.2, 58.0], [51.3, 58.0], [51.4, 58.0], [51.5, 58.0], [51.6, 58.0], [51.7, 58.0], [51.8, 58.0], [51.9, 58.0], [52.0, 58.0], [52.1, 58.0], [52.2, 58.0], [52.3, 58.0], [52.4, 58.0], [52.5, 59.0], [52.6, 59.0], [52.7, 59.0], [52.8, 59.0], [52.9, 59.0], [53.0, 59.0], [53.1, 59.0], [53.2, 59.0], [53.3, 59.0], [53.4, 59.0], [53.5, 60.0], [53.6, 60.0], [53.7, 60.0], [53.8, 60.0], [53.9, 60.0], [54.0, 60.0], [54.1, 60.0], [54.2, 60.0], [54.3, 60.0], [54.4, 60.0], [54.5, 60.0], [54.6, 60.0], [54.7, 60.0], [54.8, 61.0], [54.9, 61.0], [55.0, 61.0], [55.1, 61.0], [55.2, 61.0], [55.3, 61.0], [55.4, 61.0], [55.5, 61.0], [55.6, 61.0], [55.7, 61.0], [55.8, 62.0], [55.9, 62.0], [56.0, 62.0], [56.1, 62.0], [56.2, 62.0], [56.3, 62.0], [56.4, 62.0], [56.5, 62.0], [56.6, 62.0], [56.7, 62.0], [56.8, 63.0], [56.9, 63.0], [57.0, 63.0], [57.1, 63.0], [57.2, 63.0], [57.3, 63.0], [57.4, 63.0], [57.5, 63.0], [57.6, 64.0], [57.7, 64.0], [57.8, 64.0], [57.9, 64.0], [58.0, 64.0], [58.1, 64.0], [58.2, 64.0], [58.3, 65.0], [58.4, 65.0], [58.5, 65.0], [58.6, 65.0], [58.7, 65.0], [58.8, 65.0], [58.9, 65.0], [59.0, 65.0], [59.1, 66.0], [59.2, 66.0], [59.3, 66.0], [59.4, 66.0], [59.5, 66.0], [59.6, 66.0], [59.7, 67.0], [59.8, 67.0], [59.9, 67.0], [60.0, 67.0], [60.1, 67.0], [60.2, 67.0], [60.3, 67.0], [60.4, 68.0], [60.5, 68.0], [60.6, 68.0], [60.7, 68.0], [60.8, 68.0], [60.9, 68.0], [61.0, 68.0], [61.1, 69.0], [61.2, 69.0], [61.3, 69.0], [61.4, 69.0], [61.5, 69.0], [61.6, 69.0], [61.7, 69.0], [61.8, 70.0], [61.9, 70.0], [62.0, 70.0], [62.1, 70.0], [62.2, 70.0], [62.3, 70.0], [62.4, 71.0], [62.5, 71.0], [62.6, 71.0], [62.7, 71.0], [62.8, 71.0], [62.9, 72.0], [63.0, 72.0], [63.1, 72.0], [63.2, 72.0], [63.3, 72.0], [63.4, 72.0], [63.5, 72.0], [63.6, 72.0], [63.7, 73.0], [63.8, 73.0], [63.9, 73.0], [64.0, 73.0], [64.1, 73.0], [64.2, 73.0], [64.3, 73.0], [64.4, 74.0], [64.5, 74.0], [64.6, 74.0], [64.7, 74.0], [64.8, 75.0], [64.9, 75.0], [65.0, 75.0], [65.1, 75.0], [65.2, 75.0], [65.3, 75.0], [65.4, 76.0], [65.5, 76.0], [65.6, 76.0], [65.7, 76.0], [65.8, 76.0], [65.9, 76.0], [66.0, 76.0], [66.1, 77.0], [66.2, 77.0], [66.3, 77.0], [66.4, 77.0], [66.5, 77.0], [66.6, 77.0], [66.7, 78.0], [66.8, 78.0], [66.9, 78.0], [67.0, 78.0], [67.1, 78.0], [67.2, 79.0], [67.3, 79.0], [67.4, 79.0], [67.5, 79.0], [67.6, 79.0], [67.7, 79.0], [67.8, 80.0], [67.9, 80.0], [68.0, 80.0], [68.1, 80.0], [68.2, 80.0], [68.3, 81.0], [68.4, 81.0], [68.5, 81.0], [68.6, 81.0], [68.7, 82.0], [68.8, 82.0], [68.9, 82.0], [69.0, 82.0], [69.1, 82.0], [69.2, 83.0], [69.3, 83.0], [69.4, 83.0], [69.5, 83.0], [69.6, 84.0], [69.7, 84.0], [69.8, 84.0], [69.9, 84.0], [70.0, 84.0], [70.1, 85.0], [70.2, 85.0], [70.3, 85.0], [70.4, 85.0], [70.5, 86.0], [70.6, 86.0], [70.7, 86.0], [70.8, 87.0], [70.9, 87.0], [71.0, 87.0], [71.1, 87.0], [71.2, 88.0], [71.3, 88.0], [71.4, 88.0], [71.5, 88.0], [71.6, 89.0], [71.7, 89.0], [71.8, 89.0], [71.9, 90.0], [72.0, 90.0], [72.1, 90.0], [72.2, 90.0], [72.3, 91.0], [72.4, 91.0], [72.5, 91.0], [72.6, 92.0], [72.7, 92.0], [72.8, 93.0], [72.9, 93.0], [73.0, 93.0], [73.1, 94.0], [73.2, 94.0], [73.3, 94.0], [73.4, 95.0], [73.5, 95.0], [73.6, 95.0], [73.7, 96.0], [73.8, 96.0], [73.9, 96.0], [74.0, 97.0], [74.1, 97.0], [74.2, 97.0], [74.3, 98.0], [74.4, 98.0], [74.5, 98.0], [74.6, 98.0], [74.7, 99.0], [74.8, 99.0], [74.9, 100.0], [75.0, 100.0], [75.1, 100.0], [75.2, 100.0], [75.3, 101.0], [75.4, 101.0], [75.5, 102.0], [75.6, 102.0], [75.7, 102.0], [75.8, 103.0], [75.9, 103.0], [76.0, 104.0], [76.1, 104.0], [76.2, 104.0], [76.3, 105.0], [76.4, 105.0], [76.5, 105.0], [76.6, 105.0], [76.7, 106.0], [76.8, 106.0], [76.9, 106.0], [77.0, 107.0], [77.1, 107.0], [77.2, 107.0], [77.3, 107.0], [77.4, 107.0], [77.5, 108.0], [77.6, 108.0], [77.7, 109.0], [77.8, 109.0], [77.9, 110.0], [78.0, 110.0], [78.1, 110.0], [78.2, 111.0], [78.3, 111.0], [78.4, 112.0], [78.5, 112.0], [78.6, 112.0], [78.7, 113.0], [78.8, 114.0], [78.9, 114.0], [79.0, 115.0], [79.1, 115.0], [79.2, 116.0], [79.3, 116.0], [79.4, 117.0], [79.5, 117.0], [79.6, 118.0], [79.7, 118.0], [79.8, 119.0], [79.9, 119.0], [80.0, 120.0], [80.1, 120.0], [80.2, 120.0], [80.3, 121.0], [80.4, 121.0], [80.5, 122.0], [80.6, 123.0], [80.7, 123.0], [80.8, 124.0], [80.9, 124.0], [81.0, 125.0], [81.1, 125.0], [81.2, 126.0], [81.3, 126.0], [81.4, 126.0], [81.5, 127.0], [81.6, 127.0], [81.7, 128.0], [81.8, 129.0], [81.9, 129.0], [82.0, 130.0], [82.1, 130.0], [82.2, 131.0], [82.3, 131.0], [82.4, 132.0], [82.5, 132.0], [82.6, 133.0], [82.7, 133.0], [82.8, 134.0], [82.9, 135.0], [83.0, 135.0], [83.1, 136.0], [83.2, 137.0], [83.3, 137.0], [83.4, 138.0], [83.5, 138.0], [83.6, 139.0], [83.7, 140.0], [83.8, 141.0], [83.9, 142.0], [84.0, 143.0], [84.1, 143.0], [84.2, 144.0], [84.3, 145.0], [84.4, 147.0], [84.5, 148.0], [84.6, 149.0], [84.7, 150.0], [84.8, 151.0], [84.9, 151.0], [85.0, 152.0], [85.1, 153.0], [85.2, 154.0], [85.3, 154.0], [85.4, 156.0], [85.5, 156.0], [85.6, 157.0], [85.7, 158.0], [85.8, 159.0], [85.9, 159.0], [86.0, 160.0], [86.1, 161.0], [86.2, 162.0], [86.3, 162.0], [86.4, 164.0], [86.5, 165.0], [86.6, 167.0], [86.7, 167.0], [86.8, 169.0], [86.9, 170.0], [87.0, 172.0], [87.1, 173.0], [87.2, 174.0], [87.3, 175.0], [87.4, 176.0], [87.5, 178.0], [87.6, 179.0], [87.7, 181.0], [87.8, 182.0], [87.9, 184.0], [88.0, 186.0], [88.1, 187.0], [88.2, 191.0], [88.3, 192.0], [88.4, 194.0], [88.5, 196.0], [88.6, 199.0], [88.7, 199.0], [88.8, 200.0], [88.9, 202.0], [89.0, 205.0], [89.1, 208.0], [89.2, 209.0], [89.3, 211.0], [89.4, 213.0], [89.5, 215.0], [89.6, 216.0], [89.7, 218.0], [89.8, 221.0], [89.9, 223.0], [90.0, 225.0], [90.1, 228.0], [90.2, 230.0], [90.3, 233.0], [90.4, 236.0], [90.5, 240.0], [90.6, 242.0], [90.7, 243.0], [90.8, 244.0], [90.9, 246.0], [91.0, 247.0], [91.1, 251.0], [91.2, 255.0], [91.3, 260.0], [91.4, 262.0], [91.5, 267.0], [91.6, 272.0], [91.7, 276.0], [91.8, 280.0], [91.9, 284.0], [92.0, 292.0], [92.1, 295.0], [92.2, 297.0], [92.3, 299.0], [92.4, 302.0], [92.5, 305.0], [92.6, 310.0], [92.7, 313.0], [92.8, 317.0], [92.9, 319.0], [93.0, 322.0], [93.1, 325.0], [93.2, 327.0], [93.3, 335.0], [93.4, 339.0], [93.5, 343.0], [93.6, 347.0], [93.7, 353.0], [93.8, 362.0], [93.9, 376.0], [94.0, 380.0], [94.1, 386.0], [94.2, 392.0], [94.3, 395.0], [94.4, 397.0], [94.5, 402.0], [94.6, 409.0], [94.7, 415.0], [94.8, 421.0], [94.9, 436.0], [95.0, 449.0], [95.1, 462.0], [95.2, 471.0], [95.3, 476.0], [95.4, 482.0], [95.5, 492.0], [95.6, 497.0], [95.7, 500.0], [95.8, 503.0], [95.9, 509.0], [96.0, 516.0], [96.1, 530.0], [96.2, 542.0], [96.3, 549.0], [96.4, 561.0], [96.5, 569.0], [96.6, 573.0], [96.7, 576.0], [96.8, 579.0], [96.9, 599.0], [97.0, 620.0], [97.1, 642.0], [97.2, 663.0], [97.3, 672.0], [97.4, 677.0], [97.5, 705.0], [97.6, 715.0], [97.7, 730.0], [97.8, 743.0], [97.9, 751.0], [98.0, 754.0], [98.1, 760.0], [98.2, 815.0], [98.3, 846.0], [98.4, 858.0], [98.5, 877.0], [98.6, 902.0], [98.7, 939.0], [98.8, 959.0], [98.9, 975.0], [99.0, 985.0], [99.1, 1033.0], [99.2, 1071.0], [99.3, 1153.0], [99.4, 1267.0], [99.5, 1284.0], [99.6, 1702.0], [99.7, 1990.0], [99.8, 4387.0], [99.9, 4860.0], [100.0, 5779.0]], "isOverall": false, "label": "GET All Activities", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 8591.0, "series": [{"data": [[0.0, 8591.0], [600.0, 64.0], [700.0, 81.0], [800.0, 45.0], [900.0, 55.0], [1000.0, 22.0], [1100.0, 15.0], [1200.0, 17.0], [1300.0, 6.0], [1400.0, 2.0], [1500.0, 2.0], [100.0, 1588.0], [1700.0, 1.0], [1800.0, 10.0], [1900.0, 1.0], [2000.0, 1.0], [2100.0, 1.0], [2300.0, 1.0], [2800.0, 1.0], [200.0, 415.0], [3600.0, 1.0], [3900.0, 1.0], [4000.0, 1.0], [4300.0, 3.0], [4100.0, 1.0], [4200.0, 1.0], [4400.0, 2.0], [4500.0, 4.0], [4600.0, 2.0], [300.0, 244.0], [4800.0, 2.0], [4700.0, 1.0], [5100.0, 4.0], [5000.0, 4.0], [4900.0, 1.0], [5300.0, 1.0], [5700.0, 1.0], [400.0, 138.0], [500.0, 143.0]], "isOverall": false, "label": "GET All Activities", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5700.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 48.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1 500ms"], [2, "Requests having \nresponse time > 1 500ms"], [3, "Requests in error"]], "maxY": 10985.0, "series": [{"data": [[0.0, 10985.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 441.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1 500ms", "isController": false}, {"data": [[2.0, 48.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1 500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 29.95079803192128, "minX": 1.684761E12, "maxY": 30.0, "series": [{"data": [[1.684761E12, 30.0], [1.68476106E12, 29.95079803192128]], "isOverall": false, "label": "Endurance test", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68476106E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 83.0, "minX": 1.0, "maxY": 209.0, "series": [{"data": [[8.0, 209.0], [9.0, 102.0], [10.0, 103.0], [11.0, 136.0], [12.0, 125.0], [3.0, 119.5], [14.0, 83.0], [15.0, 86.0], [4.0, 107.0], [1.0, 115.0], [19.0, 179.0], [20.0, 178.0], [23.0, 176.0], [26.0, 173.33333333333334], [7.0, 106.66666666666667], [30.0, 126.68169112508758]], "isOverall": false, "label": "GET All Activities", "isController": false}, {"data": [[29.964267038521875, 126.71256754401278]], "isOverall": false, "label": "GET All Activities-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 30.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 10051.2, "minX": 1.684761E12, "maxY": 431355.8, "series": [{"data": [[1.684761E12, 162560.21666666667], [1.68476106E12, 431355.8]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.684761E12, 10051.2], [1.68476106E12, 26665.6]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68476106E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 112.22980919236788, "minX": 1.684761E12, "maxY": 165.13498885705184, "series": [{"data": [[1.684761E12, 165.13498885705184], [1.68476106E12, 112.22980919236788]], "isOverall": false, "label": "GET All Activities", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68476106E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 112.22368894755763, "minX": 1.684761E12, "maxY": 165.11716014008314, "series": [{"data": [[1.684761E12, 165.11716014008314], [1.68476106E12, 112.22368894755763]], "isOverall": false, "label": "GET All Activities", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68476106E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.684761E12, "maxY": 37.800700413880776, "series": [{"data": [[1.684761E12, 37.800700413880776], [1.68476106E12, 0.0]], "isOverall": false, "label": "GET All Activities", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68476106E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 36.0, "minX": 1.684761E12, "maxY": 5779.0, "series": [{"data": [[1.684761E12, 5779.0], [1.68476106E12, 2854.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.684761E12, 317.0], [1.68476106E12, 205.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.684761E12, 1454.7599999999911], [1.68476106E12, 898.6599999999999]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.684761E12, 577.0], [1.68476106E12, 394.2999999999993]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.684761E12, 36.0], [1.68476106E12, 36.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.684761E12, 53.0], [1.68476106E12, 58.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68476106E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 42.0, "minX": 17.0, "maxY": 753.0, "series": [{"data": [[17.0, 101.0], [32.0, 166.5], [39.0, 244.0], [44.0, 109.0], [55.0, 753.0], [68.0, 69.5], [74.0, 347.0], [80.0, 411.0], [87.0, 124.0], [91.0, 54.0], [101.0, 143.0], [110.0, 139.0], [121.0, 129.0], [126.0, 87.0], [135.0, 62.0], [136.0, 181.0], [142.0, 53.5], [151.0, 45.0], [152.0, 54.0], [156.0, 106.0], [166.0, 52.0], [168.0, 108.0], [180.0, 75.5], [179.0, 92.5], [187.0, 72.0], [193.0, 60.0], [195.0, 76.0], [205.0, 48.0], [201.0, 59.0], [204.0, 59.5], [208.0, 66.0], [219.0, 42.0], [218.0, 72.5], [227.0, 67.0], [228.0, 62.5], [224.0, 55.0], [239.0, 59.0], [238.0, 46.0], [233.0, 72.0], [250.0, 89.0], [260.0, 60.0], [262.0, 73.5], [276.0, 62.5], [287.0, 53.0], [273.0, 58.0], [279.0, 51.0], [295.0, 48.0], [293.0, 61.0], [302.0, 63.0], [320.0, 50.0], [340.0, 45.0], [371.0, 52.0], [386.0, 50.0], [391.0, 51.0], [402.0, 44.0], [479.0, 46.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 479.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 42.0, "minX": 17.0, "maxY": 753.0, "series": [{"data": [[17.0, 101.0], [32.0, 166.5], [39.0, 244.0], [44.0, 109.0], [55.0, 753.0], [68.0, 69.5], [74.0, 347.0], [80.0, 411.0], [87.0, 124.0], [91.0, 54.0], [101.0, 143.0], [110.0, 139.0], [121.0, 129.0], [126.0, 87.0], [135.0, 62.0], [136.0, 181.0], [142.0, 53.5], [151.0, 45.0], [152.0, 54.0], [156.0, 106.0], [166.0, 52.0], [168.0, 108.0], [180.0, 75.5], [179.0, 92.5], [187.0, 72.0], [193.0, 60.0], [195.0, 76.0], [205.0, 48.0], [201.0, 59.0], [204.0, 59.5], [208.0, 66.0], [219.0, 42.0], [218.0, 72.5], [227.0, 67.0], [228.0, 62.5], [224.0, 55.0], [239.0, 59.0], [238.0, 46.0], [233.0, 72.0], [250.0, 89.0], [260.0, 60.0], [262.0, 73.5], [276.0, 62.5], [287.0, 53.0], [273.0, 58.0], [279.0, 51.0], [295.0, 48.0], [293.0, 61.0], [302.0, 63.0], [320.0, 50.0], [340.0, 45.0], [371.0, 52.0], [386.0, 50.0], [391.0, 51.0], [402.0, 44.0], [479.0, 46.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 479.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 52.85, "minX": 1.684761E12, "maxY": 138.38333333333333, "series": [{"data": [[1.684761E12, 52.85], [1.68476106E12, 138.38333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68476106E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 52.35, "minX": 1.684761E12, "maxY": 138.88333333333333, "series": [{"data": [[1.684761E12, 52.35], [1.68476106E12, 138.88333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68476106E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 52.35, "minX": 1.684761E12, "maxY": 138.88333333333333, "series": [{"data": [[1.684761E12, 52.35], [1.68476106E12, 138.88333333333333]], "isOverall": false, "label": "GET All Activities-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68476106E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 52.35, "minX": 1.684761E12, "maxY": 138.88333333333333, "series": [{"data": [[1.684761E12, 52.35], [1.68476106E12, 138.88333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68476106E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

