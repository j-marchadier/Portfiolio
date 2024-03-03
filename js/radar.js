(async function() {
  const data = [
    {label: 'Data Engineering', score: 4, obectif : 4},
    {label: 'Data Analytics', score: 5, obectif : 5},
    {label: 'Data Gouvernance', score: 3, obectif : 3},
    {label: 'Data Science', score: 2, obectif : 3},
    {label: 'Machien Learing', score: 1, obectif : 2}
  ];

  new Chart(
    document.getElementById('radar'),
    {
      type: 'radar',
      data: {
        labels: data.map(row => row.label),
        datasets: [
          {
            label: 'My Skills',
            data: data.map(row => row.score),
            fill: true,
            backgroundColor: 'rgb(241, 182, 5,0.3)',
            borderColor : 'rgb(241, 182, 5)',
            pointBackgroundColor : 'rgb(241, 182, 5)',
            pointBorderColor: 'rgb(241, 182, 5)',
            pointHoverBackgroundColor: 'rgb(241, 182, 5)',
            pointHoverBorderColor: 'rgb(241, 182, 5)',
          }
        ]
      },
      options: {
        plugins: {
            legend: {
                position: 'none',
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 32,
                        family: '"Kode Mono", monospace',
                    }
                }
            },
            title:{
                display: true,
                align: "center",
                text: "My skills",
                fontFamily : '"Kode Mono", monospace',
                fontSize:50,
                fontColor : 'white'
            }
        },
        elements:{
            line:{
                borderWidth: 3
            },
            point:{
                borderColor:'white',
                radius:5,
                pointHoverRadius:10
            }
        },
        scale:{
            ticks:{
                beginAtZero: false,
                max: 5,
                stepSize: 1,
            }
        },
        maintainAspectRatio: false
    }
    }
  );
})();
