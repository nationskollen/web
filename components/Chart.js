import React from 'react'
import { Doughnut } from 'react-chartjs-2'

// const data = {
//   labels: [
//     'Red',
//     'Green',
//     'Yellow'
// ],
// datasets: [{
//   data: [300, 50, 100],
//   backgroundColor: [
//   '#FF6384',
//   '#36A2EB',
//   '#FFCE56'
//   ],
//   hoverBackgroundColor: [
//   '#FF6384',
//   '#36A2EB',
//   '#FFCE56'
//   ]
// }]
// };

const Chart = (info) => {
    return (
        <div>
            <h2>{info.header}</h2>
            <Doughnut
                data={info.data}
                // width={400}
                width={info.width}
                // height={400}t
                height={info.height}
                t
            />
        </div>
    )
}
export default Chart

// https://itnext.io/chartjs-tutorial-with-react-nextjs-with-examples-2f514fdc130
