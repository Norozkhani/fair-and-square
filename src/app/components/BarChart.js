import { useEffect } from "react"
import { Chart } from "chart.js";
import DATA from "../../../DiagramData.json"
function Example() {
	const gender = DATA.genderreport.map((elem) => {
		return elem.gender
	})
	const amount = DATA.genderreport.map((elem) => {
		return elem.amount
	})

	const toggle = "bar"

    useEffect(() => {
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: toggle,
            data: {
                labels: gender ,
                datasets: [{
                    data: amount,
                    label: [],
                    borderColor: "rgb(109, 253, 181)",
                    backgroundColor: "rgb(109, 253, 181,0.5)",
                    borderWidth: 1
                }, 
                ]
            },
        });
    }, [])


    return (
        <>
            {/* Bar chart */}
            <h1 className="w-[150px] mx-auto mt-10 text-xl font-semibold capitalize ">Bar Chart</h1>
            <div className="w-[1100px] h-screen flex mx-auto my-auto">
                <div className='border border-gray-400 pt-0 rounded-xl  w-full h-fit my-auto  shadow-xl'>
                    <canvas id='myChart'></canvas>
                </div>
            </div>
        </>
    )
}

export default Example;