async function getStock(){
    // const stock = await fetch("https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=IBM&apikey=S0MAQ8E9UC369SJS")
    const res = await stock.json()
    // console.log(res, "res")

	return res
  }

  export default getStock