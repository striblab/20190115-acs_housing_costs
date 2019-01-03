import * as d3 from 'd3';
import * as c3 from 'c3';

class Chart {

    constructor(target) {
        this.target = target;
        this.chartCounts = null;
    }


    do_step1() {
        var self = this;
        self.chartCounts.load({
            columns: [
                ['DFL', 154, 163, 142, 162, 168, 160, 167, 153, 158, 204]
            ],
            unload: ['RACES']
        });
    }

    undo_step1() {
        var self = this;
        self.chartCounts.load({
            columns: [
                ['RACES', 143, 146, 142, 147, 143, 146, 144, 147, 142, 148]
            ],
            unload: ['DFL']
        });

    }

    do_step2() {
        var self = this;
        self.chartCounts.load({
            columns: [
                ['GOP', 150, 159, 142, 152, 160, 158, 162, 166, 152, 171]
            ],
            // unload: ['data2', 'data3'],
        });
    }

    undo_step2() {
        var self = this;
        self.chartCounts.load({
            unload: ['GOP']
        });
    }

    do_step3() {
        var self = this;
        self.chartCounts.load({
            columns: [
                ['IND', 62, 68, 40, 30, 30, 33, 27, 29, 14, 17]
            ],
            // unload: ['data2', 'data3'],
        });
    }

    undo_step3() {
        var self = this;
        self.chartCounts.load({
            unload: ['IND']
        });
    }

    do_step4() {
        var self = this;
        self.chartCounts.load({
            columns: [
                ['RACES', 143, 146, 142, 147, 143, 146, 144, 147, 142, 148]
            ]
        });
    }

    undo_step4() {
        var self = this;
        self.chartCounts.load({
            unload: ['RACES']
        });
    }


    render() {
        var self = this;

        var padding = {
            top: 40,
            right: 20,
            bottom: 30,
            left: 60,
        };

        var cities = ["Richfield", "Mounds View", "Champlin", "Brooklyn Center", "Fridley", "Robbinsdale", "New Brighton", "Columbia Heights", "Dayton", "Crystal", "Albertville", "New Hope", "Coon Rapids", "Carver", "St. Anthony", "Minneapolis", "Savage", "Apple Valley", "Cottage Grove", "Circle Pines", "Bloomington", "Ramsey", "St. Louis Park", "Roseville", "Big Lake", "Eagan", "North St. Paul", "Isanti", "Brooklyn Park", "Inver Grove Heights", "Otsego", "Little Canada", "St. Michael", "Monticello", "South St. Paul", "Shoreview", "Somerset", "Hugo", "Farmington", "Jordan", "Elk River", "Rosemount", "Golden Valley", "Montrose", "Blaine", "Waconia", "Maplewood", "Maple Grove", "Wyoming", "Oakdale", "White Bear Lake", "Shakopee", "Wayzata", "St. Francis", "St. Paul", "Vadnais Heights", "West St. Paul", "Lindstrom", "Andover", "Woodbury", "Burnsville", "New Richmond", "Delano", "Anoka", "Lakeville", "Cambridge", "Chaska", "Zimmerman", "Chanhassen", "North Branch", "Hopkins", "Mahtomedi", "Belle Plaine", "Buffalo", "River Falls", "Hudson", "East Bethel", "Rogers", "Minnetonka", "Annandale", "Forest Lake", "Victoria", "Plymouth", "Lake Elmo", "Oak Grove", "Stillwater", "Mound", "Lino Lakes", "Prior Lake", "Hastings", "Eden Prairie", "Shorewood", "Edina", "North Oaks", "Princeton", "Mendota Heights", "Becker", "Elko New Market", "Medina", "Chisago City", "Ham Lake", "Orono", "Minnetrista"]

        var chart = c3.generate({
            bindto: self.target,
            padding: padding,
            data: {
                xs: {
                    DaysMarket15: 'cities3',
                    DaysMarket16: 'cities',
                    DaysMarket17: 'cities2'
                },
                // iris data from R
                columns: [
                    // ["cities3",2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104],
                    // ["DaysMarket15",28,36.5,34.5,34,36,43,41,39.5,56,40,38,34,33,50.5,29,35,42,36,38,37,34,41,38,38,39,30,34,37,34.5,43,30,55,45,42,43,40,54,41,39,68,40,41,47,45,33,48,47,40,38,34,34,36,79.5,41.5,42,44,38,57,36.5,39.5,35,70,27.5,32,40.5,48,43,48,44,41,38,63,41.5,47,63,60,41.5,46,46,89.5,56,47.5,40,56,50,55,63,36,51.5,47,50,63,55.5,67,63,49.5,49,46,72.5,40,53,119,87.5],
                    ["cities", 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104],
                    ["DaysMarket16", 40, 49, 48, 47, 48, 58, 52, 53, 81, 46, 56, 48, 46, 58, 60, 54, 53, 50, 51, 51, 52, 55, 48, 63, 59, 52, 54, 56, 51, 55, 50, 79, 65, 55, 51, 53, 87, 62, 51, 81, 60, 56, 71, 55, 56, 64, 62, 61, 70, 48, 50, 59, 137, 63, 63, 57, 62, 93, 52, 57, 61, 112, 77, 54, 60, 61, 68, 67, 75, 56, 51, 71, 81, 66, 119, 96, 75, 58, 78, 104, 82, 111, 69, 69, 85, 86, 96, 69, 73, 65, 74, 124, 89, 158, 91, 74, 75, 89, 119, 72, 70, 128, 137],
                    ["cities2", 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104],
                    ["DaysMarket17", 29, 37, 43, 35, 37, 37, 37, 37, 65, 36, 42, 42, 36, 50, 45, 43, 47, 41, 39, 36, 41, 45, 38, 43, 49, 41, 39, 72, 49, 44, 46, 55, 52, 45, 43, 45, 82, 51, 50, 56, 51, 46, 63, 49, 50, 53, 49, 46, 47, 43, 43, 47, 144, 56, 52, 52, 46, 76, 61, 54, 44, 89, 74, 49, 59, 62, 55, 59, 55, 61, 41, 76, 58, 56, 94, 88, 70, 56, 59, 94, 70, 87, 60, 88, 75, 74, 77, 63, 62, 52, 68, 110, 93, 135, 61, 78, 64, 73, 138, 100, 73, 134, 120]
                ],
                type: 'scatter',
                colors: {
                    'DaysMarket15': '#857AAA',
                    'DaysMarket16': '#271D42',
                    'DaysMarket17': '#299e3d'
                },
            },
            legend: {
                show: false
            },
            tooltip: {
                show: false
            },
            axis: {
                x: {
                    // label: 'Sepal.Width',
                    show: true,

                    tick: {
                        fit: false
                    },
                    // height: 60
                },
                y: {
                    max: 160,
                    min: 0,
                    padding: {
                        bottom: 0,
                        top: 0,
                        right: 0,
                        left: 0
                    },
                    label: {
                        text: '⬅ Average days on market',
                        position: 'outer-center'
                    },
                    // tick: {
                    //  format: function (d) {
                    //         return cities[d];
                    //     },
                    //   values: [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104],
                    // }
                }
            }
        });

    }
}

export {
    Chart as
    default
}